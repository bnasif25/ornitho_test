# 🐦 Projet d’Automatisation des Tests – ornitho.com

![Playwright](https://img.shields.io/badge/Powered%20by-Playwright-blue.svg)
![License](https://img.shields.io/badge/Licence-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/Langage-TypeScript-3178C6.svg)

---

## 📋 Description
Ce projet automatise les tests du site **ornitho.com**, une plateforme d’identification d’oiseaux par intelligence artificielle.  
Il vérifie que chaque photo uploadée est correctement reconnue **avec un score de confiance ≥ 90 %**.

Les tests couvrent :
- Upload d’images d’oiseaux depuis le dossier `tests/bird_data/`.
- Vérification des résultats d’identification (espèce + score).
- Assertions robustes avec Playwright pour cross-browser (Chrome, Firefox, WebKit).

---

## 🧰 Prérequis
- [Node.js](https://nodejs.org/) ≥ v18  
- [Git](https://git-scm.com/)  
- Éditeur de code : VS Code (recommandé) avec l’extension [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

---

## 📁 Structure du Projet
```
ornitho_test/
├── tests/
│   ├── bird_identification.spec.ts   # Scénarios de tests principaux
│   └── bird_data/                    # Données de test (photos JPEG)
│       ├── tarin_triste.jpeg
│       ├── bergeronnette_printaniere.jpeg
│       └── chevalier_aboyeur.jpeg
├── playwright.config.ts              # Configuration Playwright (browsers, timeouts, etc.)
├── package.json                      # Dépendances et scripts
├── .gitignore                        # Ignore node_modules, rapports, etc.
└── README.md                         # Ce fichier
```

---

## ⚙️ Installation
```bash
# 1. Cloner le dépôt
git clone https://github.com/bnasif25/ornitho_test.git
cd ornitho_test

# 2. Installer les dépendances
npm install

# 3. Installer les navigateurs Playwright
npx playwright install
```
*(Sur Linux : `npx playwright install --with-deps` pour les dépendances système.)*

### 🛠️ Configuration des Chemins d’Images
Les tests utilisent des chemins relatifs par défaut (`tests/bird_data/`).

Si besoin de modifier :
1. Ouvrir `tests/bird_identification.spec.ts`.
2. Ajuster la ligne du imagePath si le dossier change (ex. : chemin absolu pour debug local).
3. Sauvegarder le fichier.

---

## 🚀 Lancer les Tests
```bash
# Mode avec navigateur visible (idéal pour debug)
npx playwright test --headed

# Mode silencieux (headless, par défaut – pour CI/CD)
npx playwright test

# Lancer un test spécifique (ex. upload)
npx playwright test bird_identification

# Mode UI interactif (sélectionner/débugger visuellement)
npx playwright test --ui

# Mode debug (pas à pas)
npx playwright test --debug
```

### 📊 Voir les Résultats
Après exécution :
```bash
npx playwright show-report
```
Ouvre un rapport HTML interactif avec vidéos, traces, et logs.

---

## 🐞 Dépannage
- **Fichier non trouvé** : Vérifiez les chemins relatifs avec `console.log(process.cwd())` dans un test.
- **Problèmes navigateurs** : Relancez `npx playwright install`.
- **Tests flaky** : Ajoutez `--retries=2` ou augmentez les timeouts dans `playwright.config.ts`.

---

## 🤝 Contribution
1. Fork le repo.
2. Créez une branche : `git checkout -b feature/nouveau-test`.
3. Commitez : `git commit -m "Ajout test X"`.
4. Pushez et ouvrez une Pull Request.


---
 ## 📄 Licence
 
MIT License (LICENSE) – Libre d’utilisation et modification.
Projet prêt en <5 min. Clonez, installez, lancez ! Questions ? Contactez-moi.
Construit par [bnasif25](https://github.com/bnasif25) 
