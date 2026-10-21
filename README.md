# Corvus Forge

Eine schlichte, moderne Landingpage für ein fiktives Webstudio („Corvus Forge“).

Das Projekt dient als Portfolio- und Showcase-Seite und wurde bewusst komplett ohne Frameworks, Build-Tools oder npm-Abhängigkeiten umgesetzt – schlankes, semantisches HTML, CSS und Vanilla JavaScript.

## Tech-Stack

- **HTML5**: Semantischer Aufbau (`<header>`, `<main>`, `<article>`, `<figure>`, `<footer>`) ohne unnötige Wrapper
- **CSS3**: Eigenes Design-System über CSS-Variablen, Responsive Layouts und Dark Mode
- **JavaScript (ES6+)**:
  - `main.js`: Interaktive UI-Logik (Navbar-Scroll-Status, 3D-Tilt der Mockups, IntersectionObserver für Einblendungen, Cookie-Banner)
  - `smoke.js`: Dezenter WebGL-Hintergrundeffekt (Shader-Animation)

## Projektstruktur

```text
corvus_forge/
├── assets/         # Grafiken, Logos und Favicons
├── css/
│   └── style.css   # Vollständiges Stylesheet und Design-Tokens
├── js/
│   ├── main.js     # UI-Interaktionen und Logik
│   └── smoke.js    # WebGL-Canvas Hintergrund
├── pages/          # Rechtliche Seiten (Datenschutz, AGB)
├── index.html      # Hauptseite / Landingpage
└── README.md
```

## Lokale Nutzung

Da es sich um reines statisches HTML/CSS/JS handelt, ist kein Build-Schritt erforderlich. 

Die Datei `index.html` kann direkt im Browser geöffnet werden oder über einen einfachen lokalen Server:

```bash
# Mit Python:
python -m http.server 8000

# Oder mit Node:
npx serve .
```

Danach im Browser `http://localhost:8000` aufrufen.

## Lizenz

Privates Projekt / Portfolio.
