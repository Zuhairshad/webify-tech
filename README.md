# Webify Tech — Portfolio

A modern portfolio website for **Webify Tech**, showcasing software services, case studies, and client achievements.  
Built with **React + Vite**, **Tailwind CSS**, and **Framer Motion** for a responsive, performant, and animated experience.

---

## 🚀 Features

- **Responsive Hero Sections**  
  Full-bleed background images with gradient overlays and mobile-safe `svh/dvh` viewport units.  
  Dynamic titles/subtitles highlighting Webify Tech’s software services.

- **Work Portfolio (Case Studies)**  
  - Categorized case studies: Consultation & Audit, SEO, Branding, Web Development, Web Design, UI/UX.  
  - Each project includes *challenge, solution, outcome, deliverables, metrics, and testimonials*.  
  - `CaseStudy.jsx` page renders all project details dynamically via `projects.js`.

- **Clients Section**  
  - Logo grid and animated marquee carousel.  
  - Supports text logos or actual brand images.

- **Testimonials & Contact**  
  - Testimonials section with client feedback.  
  - Contact form ready for integration with Formspree or backend API.  

- **Navbar with Dropdowns**  
  - Sticky, animated navbar using `framer-motion`.  
  - Services dropdown (desktop) + accordion (mobile).  
  - Smart scroll-aware background and contrast modes.

- **Modern Styling**  
  - Tailwind CSS utility-first approach.  
  - Gradient overlays, rounded corners, and shadow effects.  
  - Google Fonts (`Dancing Script`, `Great Vibes`, `Syne Tactile`, `Unbounded`).

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (Vite)  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Routing:** React Router DOM  
- **Icons/Avatars:** Heroicons, boring-avatars  

---

## 📂 Project Structure

webify-tech-portfolio/
├── public/ # Static assets (images, icons)
├── src/
│ ├── components/ # Reusable UI components (Hero, Navbar, Portfolio, etc.)
│ ├── data/ # Project data (projects.js)
│ ├── pages/ # Page-level components (Work.jsx, CaseStudy.jsx, etc.)
│ ├── assets/ # Local images (optional)
│ ├── App.jsx # Main app routes
│ └── main.jsx # Entry point
├── package.json
└── tailwind.config.js

yaml
Copy code

---

## ⚙️ Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/webify-tech-portfolio.git
   cd webify-tech-portfolio
Install dependencies:

bash
Copy code
npm install
Run development server:

bash
Copy code
npm run dev
Site will be available at http://localhost:3000.

Build for production:

bash
Copy code
npm run build
Preview production build:

bash
Copy code
npm run preview
🔑 Environment Variables
Not required by default.
Optional if you integrate external APIs (Formspree, analytics, etc.).

🧩 Customization
Hero Text: Update default props in Hero.jsx or override via titleLines and subtitle.

Portfolio Data: All case study/project content is defined in src/data/projects.js.

Logos/Clients: Update RecentClients.jsx with new images or brand names.

Branding: Tailwind colors and gradients can be customized in tailwind.config.js.

📸 Screenshots
Desktop Hero

Mobile Hero

📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute for personal or commercial purposes.

👨‍💻 Author
Webify Tech Team
Building scalable software, modern websites, and impactful digital strategies.
