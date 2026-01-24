import { db } from '@vercel/postgres';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const client = await db.connect();
    const { rows } = await client.sql`
      SELECT * FROM contacts 
      ORDER BY date DESC
    `;
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Erreur fetch contacts:', error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const contact = await request.json();
    const client = await db.connect();

    // Si c'est une mise à jour (id présent)
    if (contact.id && !isNaN(parseInt(contact.id))) {
      await client.sql`
        UPDATE contacts 
        SET nom = ${contact.nom}, 
            email = ${contact.email}, 
            telephone = ${contact.telephone}, 
            periode = ${contact.periode}, 
            personnes = ${contact.personnes}, 
            statut = ${contact.statut},
            source = ${contact.source},
            message = ${contact.message},
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${parseInt(contact.id)}
      `;
    } else {
      // Nouveau contact
      await client.sql`
        INSERT INTO contacts (nom, email, telephone, periode, personnes, statut, source, message)
        VALUES (${contact.nom}, ${contact.email}, ${contact.telephone}, ${contact.periode}, ${contact.personnes}, ${contact.statut}, ${contact.source}, ${contact.message})
      `;
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erreur save contact:', error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
};
