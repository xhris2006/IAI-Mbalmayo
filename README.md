# Portail Étudiant IAI Mbalmayo

Bienvenue dans le portail étudiant de l’Institut Africain d’Informatique (IAI) - Centre de Mbalmayo.

Ce projet est une base moderne, responsive et prête pour le déploiement qui couvre :

- Une interface utilisateur professionnelle et moderne
- Gestion des actualités et des publications
- Accès protégé (authentification) pour l’administration
- Pages dédiées : Accueil, Espace Académique, Vie Étudiante, Événements & JPO, Nous Trouver
- Intégration Google Maps, WhatsApp et formulaire de contact

---

## 🗂 Structure du projet

```
mod1/
├── backend/               # API Express (exemple) pour publications, fichiers, etc.
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   └── server.js
├── frontend/              # Application Next.js (React + TailwindCSS)
│   ├── public/            # Images et assets statiques
│   ├── src/
│   │   ├── app/           # Routes et pages (App Router)
│   │   ├── components/    # Composants UI réutilisables
│   │   └── lib/           # Données mock + utilitaires
│   └── package.json
└── README.md
```

---

## 🚀 Démarrage local

### 1) Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Ouvrez le navigateur sur : http://localhost:3000

> Pour un accès administrateur (démonstration), utilisez :
> - Email : `admin@iai-mbalmayo.cm`
> - Mot de passe : `SuperSecret123`

### 2) Backend (Express)

```bash
cd backend
npm install
npm run dev
```

L’API sera disponible sur : http://localhost:4000

---

## 🌐 Déploiement

### Vercel (recommandé)

1. Importez le repo dans Vercel.
2. Configurez le projet sur le dossier `frontend`.
3. Ajoutez les variables d’environnement suivantes :
   - `NEXTAUTH_URL` = `https://<votre-domaine>`
   - `NEXTAUTH_SECRET` = `<secret long et aléatoire>`

### Netlify

1. Déployez le dossier `frontend` en tant que site Next.js.
2. Ajoutez les mêmes variables d’environnement que ci-dessus.

---

## 🔧 Personnalisation

- Modifiez le contenu (textes, images) dans `frontend/src/lib/data.ts`.
- Ajoutez de nouvelles pages dans `frontend/src/app/`.
- Pour une base de données réelle, connectez Supabase / PostgreSQL et ajustez `src/lib/auth.ts`.

---

## ✅ Améliorations futures

- Authentification complète via Supabase (Google & email)
- Téléversement de fichiers PDF et images (API + stockage)
- Tableau de bord administrateur fonctionnel (CRUD)
- Base de données relationnelle (PostgreSQL)

---

*Portail prêt pour le déploiement, moderne et responsive.*
