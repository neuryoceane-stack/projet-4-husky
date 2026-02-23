import '../../../lib/env-bridge';
import { db } from '@vercel/postgres';
import type { APIRoute } from 'astro';
import { ensurePostgresEnv } from '../../../lib/load-env';

export const GET: APIRoute = async () => {
  try {
    await ensurePostgresEnv();
    const client = await db.connect();
    
    // Création des tables si elles n'existent pas
    await client.sql`
      CREATE TABLE IF NOT EXISTS reservations (
        id SERIAL PRIMARY KEY,
        year INTEGER NOT NULL,
        season VARCHAR(10) NOT NULL,
        week_key VARCHAR(50) NOT NULL,
        tarif VARCHAR(20),
        plateforme VARCHAR(50),
        etat VARCHAR(50),
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(year, season, week_key)
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS tenants (
        id SERIAL PRIMARY KEY,
        year INTEGER NOT NULL,
        season VARCHAR(10) NOT NULL,
        week_key VARCHAR(50) NOT NULL,
        nom VARCHAR(100),
        prenom VARCHAR(100),
        nationalite VARCHAR(100),
        email VARCHAR(150),
        telephone VARCHAR(50),
        note TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(year, season, week_key)
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        nom VARCHAR(200) NOT NULL,
        email VARCHAR(150) NOT NULL,
        telephone VARCHAR(50),
        periode VARCHAR(100),
        personnes VARCHAR(20),
        statut VARCHAR(50) DEFAULT 'nouveau',
        source VARCHAR(100),
        message TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Aligner le CRM avec la fiche locataire : ajouter nationalité et note si besoin
    await client.sql`ALTER TABLE contacts ADD COLUMN IF NOT EXISTS nationalite VARCHAR(100);`;
    await client.sql`ALTER TABLE contacts ADD COLUMN IF NOT EXISTS note TEXT;`;
    await client.sql`ALTER TABLE contacts ADD COLUMN IF NOT EXISTS saison VARCHAR(50);`;

    return new Response(JSON.stringify({ message: "Tables initialisées avec succès" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Erreur initialisation DB:', error);
    return new Response(JSON.stringify({ error: "Erreur lors de l'initialisation de la base de données" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
