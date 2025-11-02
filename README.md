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
