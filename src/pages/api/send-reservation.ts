import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const RESERVATION_EMAIL = 'chalet.husky.2alpes@gmail.com';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { nom, email, telephone, message } = await request.json();
    if (!nom || !email || !telephone) {
      return new Response(JSON.stringify({ error: 'Champs requis manquants' }), { status: 400 });
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Envoi d\'email non configuré' }), { status: 500 });
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
      from: 'Chalet Husky <onboarding@resend.dev>',
      to: RESERVATION_EMAIL,
      subject,
      html
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi' }), { status: 500 });
    }

    // Optionnel : sauvegarder dans la base contacts si disponible
    try {
      const { db } = await import('@vercel/postgres');
      const client = await db.connect();
      await client.sql`
        INSERT INTO contacts (nom, email, telephone, periode, personnes, statut, source, message)
        VALUES (${nom}, ${email}, ${telephone}, 'Demande à préciser', '-', 'contact', 'Formulaire réservation', ${message || ''})
      `;
    } catch (_) {
      // Ignorer si la base n'est pas configurée
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Erreur send-reservation:', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500 });
  }
};
