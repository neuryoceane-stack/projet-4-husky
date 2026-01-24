import { db } from '@vercel/postgres';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const year = url.searchParams.get('year');
  const season = url.searchParams.get('season');

  if (!year || !season) {
    return new Response(JSON.stringify({ error: "Paramètres manquants" }), { status: 400 });
  }

  try {
    const client = await db.connect();
    
    const { rows: reservations } = await client.sql`
      SELECT week_key, tarif, plateforme, etat 
      FROM reservations 
      WHERE year = ${parseInt(year)} AND season = ${season}
    `;

    const { rows: tenants } = await client.sql`
      SELECT week_key, nom, prenom, nationalite, email, telephone, note 
      FROM tenants 
      WHERE year = ${parseInt(year)} AND season = ${season}
    `;

    // Transformer les tableaux en objets indexés par week_key
    const resObj = reservations.reduce((acc: any, row: any) => {
      acc[row.week_key] = { tarif: row.tarif, plateforme: row.plateforme, etat: row.etat };
      return acc;
    }, {});

    const tenantObj = tenants.reduce((acc: any, row: any) => {
      acc[row.week_key] = { 
        nom: row.nom, 
        prenom: row.prenom, 
        nationalite: row.nationalite, 
        email: row.email, 
        telephone: row.telephone, 
        note: row.note 
      };
      return acc;
    }, {});

    return new Response(JSON.stringify({ reservations: resObj, tenants: tenantObj }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Erreur fetch calendrier:', error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { year, season, week_key, type, data } = await request.json();
    const client = await db.connect();

    if (type === 'reservation') {
      await client.sql`
        INSERT INTO reservations (year, season, week_key, tarif, plateforme, etat)
        VALUES (${year}, ${season}, ${week_key}, ${data.tarif}, ${data.plateforme}, ${data.etat})
        ON CONFLICT (year, season, week_key) 
        DO UPDATE SET 
          tarif = EXCLUDED.tarif,
          plateforme = EXCLUDED.plateforme,
          etat = EXCLUDED.etat,
          updated_at = CURRENT_TIMESTAMP
      `;
    } else if (type === 'tenant') {
      await client.sql`
        INSERT INTO tenants (year, season, week_key, nom, prenom, nationalite, email, telephone, note)
        VALUES (${year}, ${season}, ${week_key}, ${data.nom}, ${data.prenom}, ${data.nationalite}, ${data.email}, ${data.telephone}, ${data.note})
        ON CONFLICT (year, season, week_key) 
        DO UPDATE SET 
          nom = EXCLUDED.nom,
          prenom = EXCLUDED.prenom,
          nationalite = EXCLUDED.nationalite,
          email = EXCLUDED.email,
          telephone = EXCLUDED.telephone,
          note = EXCLUDED.note,
          updated_at = CURRENT_TIMESTAMP
      `;
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erreur update calendrier:', error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
};
