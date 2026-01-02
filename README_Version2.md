# France Tech Services — Site statique

Dépôt contenant le site statique pour France Tech Services.

Fichiers fournis:
- `index.html` — page principale (intègre assets/logo.png)
- `styles.css` — styles (responsive)
- `script.js` — script minimal (menu mobile + année)
- `CNAME` — nom de domaine: `France-Tech-Services.fr`
- `.github/workflows/deploy.yml` — workflow pour déployer automatiquement sur la branche `gh-pages` via action
- `assets/logo.png` — ton logo (à ajouter manuellement)
- `assets/favicon-32.png` — favicon (optionnel, à créer à partir du logo)

Avant de pousser:
1. Place le fichier logo que tu m'as envoyé dans `assets/logo.png`.
   - Tu peux uploader via l'interface GitHub (Add file → Upload files → place dans assets/), ou déposer localement et faire un git add.
2. (Optionnel) Génère `assets/favicon-32.png` (32x32) à partir du logo pour l'icône du navigateur.

Commandes recommandées pour créer la branche, committer et pousser:
```bash
# clone le repo (ou travaille dans ton répertoire existant)
git clone git@github.com:France-tech-services/FranceTechServices.git
cd FranceTechServices

# crée la branche pour le site
git checkout -b feature/site-github-pages

# crée les dossiers et fichiers (ou copie-les depuis ton système)
mkdir -p assets
# copier ton logo dans assets/logo.png

git add .
git commit -m "Add static site for France Tech Services (GitHub Pages)"
git push -u origin feature/site-github-pages
```

Créer la PR:
- Une fois la branche poussée, ouvre ce lien pour créer la PR (remplace si nécessaire si tu choisis un autre nom de branche):
  https://github.com/France-tech-services/FranceTechServices/compare/main...feature/site-github-pages?expand=1

Déploiement:
- Le workflow ci-dessus publiera le contenu sur la branche gh-pages automatiquement après merge si l'action est activée. Alternativement, tu peux activer GitHub Pages depuis Settings → Pages pour servir la branche `gh-pages` (ou `main` / root selon ta préférence).
- Configure les DNS pour `France-Tech-Services.fr`:
  - A records (apex): 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - Pour `www`, ajoute un CNAME vers `France-tech-services.github.io`.

Formulaire de contact:
- Remplace `action="https://formspree.io/f/your-form-id"` par ton identifiant Formspree ou utilise Netlify Forms.
- Met à jour l'adresse email de contact si besoin.

Besoin d'aide:
- Si tu veux, je peux te fournir un paquet ZIP des fichiers prêts à déposer.
- Si tu veux que je prépare un diff/patch ou un contenu prêt à coller dans l'éditeur GitHub, je peux l’ajouter.