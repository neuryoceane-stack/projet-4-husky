# Voir les données de maman en local (sans rien effacer)

Les contacts et réservations sont dans la **base de données en ligne** (Vercel).  
Sur ton ordinateur, le site n’y est pas connecté par défaut, donc tu ne vois rien.

## Ce qu’il faut faire (une seule fois)

### 1. Créer le fichier de connexion sur ton ordinateur

1. Dans le dossier du projet, crée un fichier nommé exactement : **`.env.local`**
2. Ouvre-le avec un éditeur de texte.

### 2. Récupérer les infos de connexion sur Vercel

1. Va sur **vercel.com** → connecte-toi.
2. Ouvre le projet **projet-4-husky** (ou ChaletHusky).
3. Va dans **Settings** → **Environment Variables**.
4. Tu dois voir des variables qui commencent par **POSTGRES_** (POSTGRES_URL, POSTGRES_USER, etc.).
5. Pour chaque variable, clique sur la petite **icône œil** pour afficher la valeur, puis **copie** la valeur.

### 3. Remplir .env.local

Dans le fichier `.env.local`, écris exactement (en collant les valeurs copiées) :

```
POSTGRES_URL=la_valeur_copiée_ici
POSTGRES_USER=la_valeur_copiée
POSTGRES_HOST=la_valeur_copiée
POSTGRES_PASSWORD=la_valeur_copiée
POSTGRES_DATABASE=la_valeur_copiée
```

Une ligne par variable, sans espaces autour du `=`.

**Important :** utilise les valeurs du projet **en ligne** (Production). Comme ça tu vois **les mêmes** contacts et réservations que ta maman.

### 4. Enregistrer et lancer le site en local

1. Enregistre le fichier `.env.local`.
2. Dans le terminal : `npm run dev`
3. Ouvre : **http://127.0.0.1:4321/**
4. Va sur la page de connexion admin, connecte-toi, puis ouvre **CRM** et **Calendrier** : tu devrais voir les données de ta maman.

---

## Rien ne sera effacé

- Le fichier `.env.local` sert **uniquement** à dire à ton ordinateur : « utilise la même base que le site en ligne ».
- Tu **lis** et **modifies** les mêmes données ; tu ne supprimes pas la base.
- Si tu modifies un contact ou une réservation en local, la modification est enregistrée dans la base en ligne (ta maman la verra aussi après un rechargement).

## Si tu ne vois pas les variables sur Vercel

Si dans **Settings → Environment Variables** tu ne vois pas de variables **POSTGRES_***, la base n’est peut-être pas encore connectée au projet. Dans ce cas, va dans **Storage**, clique sur la base **ChaletHusky**, puis **Connect Project** et choisis le projet **projet-4-husky**. Ensuite les variables apparaîtront dans Settings.
