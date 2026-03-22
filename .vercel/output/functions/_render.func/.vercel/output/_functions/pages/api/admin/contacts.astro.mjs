import '../../../chunks/env-bridge_COxfGZjz.mjs';
import { db } from '@vercel/postgres';
import { e as ensurePostgresEnv } from '../../../chunks/load-env_BzTTQgEn.mjs';
export { renderers } from '../../../renderers.mjs';

function connectionErrorMessage(err) {
  const msg = err instanceof Error ? err.message : String(err);
  if (!process.env.POSTGRES_URL) return "Connection failed: POSTGRES_URL non configuré. En local, créez un fichier .env.local avec POSTGRES_URL. Sur Vercel, ajoutez les variables POSTGRES_* dans Settings → Environment Variables.";
  if (/connect|ECONNREFUSED|timeout|ENOTFOUND/i.test(msg)) return `Connection failed: ${msg}`;
  return msg;
}
const GET = async () => {
  try {
    await ensurePostgresEnv();
    const client = await db.connect();
    const { rows } = await client.sql`
      SELECT * FROM contacts 
      ORDER BY date DESC
    `;
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erreur fetch contacts:", error);
    const message = connectionErrorMessage(error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    await ensurePostgresEnv();
    const contact = await request.json();
    const client = await db.connect();
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
            nationalite = ${contact.nationalite},
            note = ${contact.note},
            saison = ${contact.saison},
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${parseInt(contact.id)}
      `;
    } else {
      await client.sql`
        INSERT INTO contacts (nom, email, telephone, periode, personnes, statut, source, message, nationalite, note, saison)
        VALUES (${contact.nom}, ${contact.email}, ${contact.telephone}, ${contact.periode}, ${contact.personnes}, ${contact.statut}, ${contact.source}, ${contact.message}, ${contact.nationalite}, ${contact.note}, ${contact.saison})
      `;
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur save contact:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
};
const DELETE = async ({ request }) => {
  try {
    await ensurePostgresEnv();
    const body = await request.json().catch(() => ({}));
    const id = body.id != null ? parseInt(body.id, 10) : NaN;
    if (isNaN(id) || id < 1) {
      return new Response(JSON.stringify({ error: "ID contact invalide" }), { status: 400 });
    }
    const client = await db.connect();
    await client.sql`DELETE FROM contacts WHERE id = ${id}`;
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erreur delete contact:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
