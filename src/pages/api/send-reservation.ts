import { Resend } from 'resend';
import type { APIRoute } from 'astro';

// Email de destination des réservations
const RESERVATION_EMAIL = 'chalet.husky.2alpes@gmail.com';

// Adresse expéditrice :
// - En mode test (onboarding@resend.dev) : ne peut envoyer qu'à l'email du compte Resend
// - Une fois le domaine vérifié : utiliser une adresse de votre domaine (ex: contact@chalet-les2alpes.fr)
const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL || 'Chalet Husky <onboarding@resend.dev>';

// Pour les tests uniquement : utiliser l'email du compte Resend
// À retirer une fois le domaine vérifié
const TEST_EMAIL = import.meta.env.RESEND_TEST_EMAIL;
const DESTINATION_EMAIL = TEST_EMAIL || RESERVATION_EMAIL;

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
  };

  try {
    const { nom, email, telephone, message } = await request.json();
    if (!nom || !email || !telephone) {
      return new Response(JSON.stringify({ error: 'Champs requis manquants', success: false }), { 
        status: 400,
        headers 
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY non configuré');
      return new Response(JSON.stringify({ error: 'Envoi d\'email non configuré', success: false }), { 
        status: 500,
        headers 
      });
    }

    const resend = new Resend(apiKey);
    const subject = `[Chalet Husky] Nouvelle demande de réservation - ${nom}`;
    const html = `
      <h2>Nouvelle demande de réservation</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Message :</strong></p>
      <p>${(message || '-').replace(/\n/g, '<br>')}</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: DESTINATION_EMAIL,
      subject,
      html
    });

    if (error) {
      console.error('Erreur Resend:', JSON.stringify(error, null, 2));
      return new Response(JSON.stringify({ 
        error: 'Erreur lors de l\'envoi', 
        details: error.message || 'Erreur inconnue',
        success: false 
      }), { 
        status: 500,
        headers 
      });
    }

    // Optionnel : sauvegarder dans la base contacts si disponible
    try {
      const { db } = await import('@vercel/postgres');
      const client = await db.connect();
      await client.sql`
        INSERT INTO contacts (nom, email, telephone, periode, personnes, statut, source, message)
        VALUES (${nom}, ${email}, ${telephone}, 'Demande à préciser', '-', 'contact', 'Formulaire réservation', ${message || ''})
      `;
    } catch (dbError) {
      // Ignorer si la base n'est pas configurée
      console.warn('Base de données non disponible:', dbError);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers
    });
  } catch (err: any) {
    console.error('Erreur send-reservation:', err);
    return new Response(JSON.stringify({ 
      error: 'Erreur serveur', 
      details: err?.message || 'Erreur inconnue',
      success: false 
    }), { 
      status: 500,
      headers 
    });
  }
};
