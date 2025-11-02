# 🐦 Projet d’automatisation des tests – ornitho.com

![Playwright](https://img.shields.io/badge/Powered%20by-Playwright-blue.svg)
![License](https://img.shields.io/badge/Licence-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/Langage-TypeScript-3178C6.svg)

---

## 📋 Description
Ce projet automatise les tests du site **ornitho.com**, une plateforme d’identification d’oiseaux par intelligence artificielle.  
Il vérifie que chaque photo est correctement reconnue **avec un score de confiance ≥ 90 %**.

---

## 🧰 Prérequis
- [Node.js](https://nodejs.org/) ≥ 18  
- [Git](https://git-scm.com/)  
- Un éditeur de code (VS Code recommandé) + extension [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

---

## 📁 Structure du projet

ornitho-test/
├── tests/
│   ├── bird_identification.spec.ts   # scénarios de test
│   └── bird_data/                    # photos .jpeg
│       ├── tarin_triste.jpeg
│       ├── bergeronnette_printaniere.jpeg
│       └── chevalier_aboyeur.jpeg
├── playwright.config.ts              # configuration Playwright
└── README.md                         # ce fichier


---

## ⚙️ Installation
```bash
# Cloner le dépôt
git clone https://github.com/bnasif25/ornitho_test.git
cd ornitho_test

# Installer les dépendances
npm install
npx playwright install

🛠️ Modifier le dossier des images

1. Ouvrir tests/bird_identification.spec.ts
2. Changer les lignes : 12 , 45 , 78 >>> VOTRE/CHEMIN/VERS/bird_data
3. Sauvegarder → relancer les tests.

🚀 Lancer les tests

# Mode avec navigateur visible (headed)
npx playwright test --headed

# Mode silencieux (headless, par défaut)
npx playwright test

# Voir le rapport HTML interactif
npx playwright show-report

🤝 Contribution
Les PR et suggestions sont les bienvenues !
