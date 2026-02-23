## Garage Leads – demo website

Deze repository bevat een voorbeeld-website voor een B2B-dienst die websites en online leadformulieren levert aan lokale garages. Gemaakt met Next.js (App Router), TypeScript en Tailwind CSS.

### A. Project lokaal runnen

1. Installeer dependencies:

```bash
npm install
```

2. Start de ontwikkelserver:

```bash
npm run dev
```

3. Open de site op `http://localhost:3000`.

### B. Environment variabele instellen

Maak in de root van het project een `.env.local` bestand aan met:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/voorbeeld"
```

Vervang de URL door jouw eigen Formspree (of vergelijkbare dienst) endpoint.

### C. Git repo initialiseren en pushen naar GitHub

1. Initialiseer git (indien nog niet gedaan):

```bash
git init
git add .
git commit -m "Init Garage Leads demo"
```

2. Maak een nieuwe repository op GitHub (zonder README/License initialisatie of trek de repo eerst lokaal binnen).

3. Koppel de remote en push:

```bash
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

Pas `USERNAME` en `REPO` aan naar jouw situatie.

### D. Deploy naar Vercel

1. Ga naar `https://vercel.com` en log in.
2. Kies **New Project** en importeer de GitHub-repository.
3. Controleer dat het framework automatisch als **Next.js** wordt herkend.
4. Voeg bij **Environment Variables** de variabele toe:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` → jouw endpoint-URL
5. Klik op **Deploy**. Na de build is de site live op de door Vercel aangemaakte URL (of op je eigen domein als je dat koppelt).

