<h1 align="center">Creek & Crown Fashion House 👑</h1>

<p align="center">
  <strong>A Premium Front-End Web Architecture Project</strong><br>
  <em>Bridging Niger Delta Heritage with Modern High-Street Tailoring</em>
</p>

## 📌 Project Overview
Creek & Crown is a high-fidelity, fully responsive 5-page fashion e-commerce interface. This project was developed to demonstrate proficiency in semantic HTML5, modern CSS3 (Flexbox/Grid, Media Queries), and vanilla JavaScript DOM manipulation.

**🔗 Live Demo:** [https://datebisun2213.github.io/CSC-106-Creek-Crown/]

## 🎯 Academic Requirements Fulfilled
This project strictly adheres to the provided rubric guidelines:
* **5 Distinct HTML Pages:** Organized into Home (`index.html`), Showcase, Trustees, Events, and Inquiries.
* **Consistent Link Structure:** A uniform `<nav>` bar across all pages ensuring seamless user traversal utilizing proper relative file paths (`../`).
* **External CSS & JS:** All styling and logic are decoupled from the HTML into `main.css` and `script.js` for clean, maintainable code.
* **Marquee Integration:** A dynamic CSS keyframe-animated marquee features prominently on all pages.
* **Responsive Design:** Utilizes CSS `@media` queries and a JavaScript-powered "Hamburger Menu" to ensure 100% responsiveness on mobile and tablet devices.

## 📂 Project Architecture & File Structure
The project utilizes a production-ready directory structure. Views are separated into a `pages` directory, and static assets are neatly organized within an `assets` folder.

```text
CSC-106-LAB/
│
├── assets/
│   └── images/               # Locally hosted, high-res assets
│       ├── beads.jpg
│       ├── ceo.jpg
│       ├── director.jpg
│       ├── etibo.jpg
│       ├── hero.jpg
│       ├── operations.jpg
│       └── woko.jpg
│
├── pages/                    # Internal HTML Views
│   ├── contact.html          # Form handling and simulated submission
│   ├── events.html           # Upcoming shows with JS live countdown
│   ├── products.html         # JS-filterable product grid
│   └── trustees.html         # Executive board with JS toggle bios
│
├── .prettierrc               # Prettier configuration for consistent code formatting
├── index.html                # Landing page and brand ethos (Root View)
├── main.css                  # Global styling and responsive media queries
├── readme.md                 # Project documentation
└── script.js                 # Event listeners and DOM manipulation