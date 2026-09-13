![Banner Jaicker Lozano](./src/assets/img/banner-portfolio-personal.webp)

# 💻 Jaicker Lozano — Full Stack Developer & Software Services

[![Deploy](https://github.com/jaickerlozano/portfolio-jaicker/actions/workflows/deploy.yml/badge.svg)](https://github.com/jaickerlozano/portfolio-jaicker/actions/workflows/deploy.yml)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)](https://react.dev/)
[![Package Manager: pnpm](https://img.shields.io/badge/Maintained%20with-pnpm-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A modern, high-performance portfolio and software services showcase designed to present custom software development, web platforms, and backend engineering capabilities.

Built with **React + TypeScript**, styled with **Tailwind CSS v4**, animated with **Motion**, strictly managed via **pnpm**, and featuring comprehensive internationalization with **react-i18next**.

---

## 🚀 Overview

This portfolio serves as both my digital presentation and client acquisition platform. Combining an **Industrial Process Engineering** background with **Full Stack Software Engineering**, I build resilient, end-to-end applications designed to automate complex operations and deliver measurable business value.

> 👉 **Live Demo:** [https://jaickerlozano.github.io/portfolio-jaicker/](https://jaickerlozano.github.io/portfolio-jaicker/)

---

## 💼 Specialized Services

The platform highlights three core service pillars tailored to businesses, startups, and operational workflows:

1. **Custom Software & Management Systems**
   - End-to-end admin dashboards, inventory control, and space reservation systems.
   - Concurrency protection (`select_for_update`), transactional integrity, and Role-Based Access Control (RBAC).
   - *Core Stack:* Python, Django, Django REST Framework, PostgreSQL.

2. **Web Applications & Digital Platforms**
   - High-speed, responsive Single Page Applications (SPAs) and e-commerce interfaces.
   - Mobile-First design, modular component architecture, and Core Web Vitals optimization.
   - *Core Stack:* React 19, TypeScript, Tailwind CSS, Vite.

3. **Backend Architecture, APIs & Cloud Integrations**
   - Secure RESTful APIs, OpenAPI/Swagger documentation, and third-party webhook integrations.
   - Relational database schema modeling and automated cloud deployment.
   - *Core Stack:* Django REST Framework, PostgreSQL, Cloudinary, Docker, Render.

---

## 🏆 Featured Commercial Projects

The portfolio showcases 4 production-grade systems:

| Project | Description | Stack | Highlights |
|---------|-------------|-------|------------|
| **[Inventory System](https://github.com/jaickerlozano/inventory_sistem_full_stack)** | Enterprise inventory & stock management | Django REST, React 19, TypeScript, PostgreSQL, Tailwind v4 | Row-level locking concurrency (`select_for_update`), real-time stock alerts, Swagger docs, live demo on Render |
| **[Booking Manager](https://github.com/jaickerlozano/booking_manager_django)** | Residential amenities reservation system | Django 5.2, Python, PostgreSQL, Cloudinary, RBAC | Granular role-based permissions (Admin/Resident), real-time AJAX search, live demo on Render |
| **[Código Secreto](https://github.com/jaickerlozano/codigo_secreto)** | E-Commerce monorepo platform *(In Development)* | Django REST, React 19, TypeScript, OpenAPI, Tailwind CSS | Monorepo architecture, product catalog, cart/checkout pipeline, automatic OpenAPI type generation |
| **[Vending Services](https://github.com/jaickerlozano/vending-services-web-app)** | Fleet management & telemetry dashboard | React, TypeScript, Python/Django, Tailwind CSS | Fleet telemetry monitoring, stock replenishment alerts, and revenue metrics |

---

## 🛠️ Technology Stack

- **Runtime & Package Manager:** Node.js 20+ & **pnpm v10**
- **Frontend:** React 18/19, TypeScript 5.7, Tailwind CSS v4, Motion
- **Tooling & Bundler:** Vite 6, Autoprefixer, PostCSS
- **Internationalization:** `i18next` & `react-i18next` (English / Spanish)
- **Testing & Quality:** Vitest, Testing Library, ESLint, Prettier
- **CI/CD & Hosting:** GitHub Actions workflow with `pnpm/action-setup`, deploying to GitHub Pages

---

## 📁 Project Structure

```
portfolio-jaicker/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD deployment with pnpm
├── public/                     # Static assets (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── BentoProjects.tsx  # Responsive 4-item bento grid showcase
│   │   │   ├── Contact.tsx        # Client inquiry & contact form
│   │   │   ├── Hero.tsx           # Two-column hero with live metrics preview
│   │   │   ├── Navbar.tsx         # Sticky navigation with theme & language toggle
│   │   │   ├── Services.tsx       # 3 commercial service cards & engineering banner
│   │   │   ├── Story.tsx          # Engineering-to-code background & philosophy
│   │   │   └── TechTerminal.tsx   # Interactive terminal component
│   │   └── App.tsx                # Main app layout and section ordering
│   ├── assets/
│   │   └── img/                   # Optimized images and project mockups
│   ├── i18n/
│   │   └── locales/
│   │       ├── en.json            # English translations
│   │       └── es.json            # Spanish translations
│   ├── styles/                    # Tailwind v4, typography & CSS variables
│   └── main.tsx                   # React root entry point
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

---

## 🧪 Running Locally

Ensure you have **Node.js 20+** and **pnpm** installed.

```bash
# Clone the repository
git clone https://github.com/jaickerlozano/portfolio-jaicker.git
cd portfolio-jaicker

# Install dependencies with pnpm
pnpm install

# Start the Vite development server
pnpm run dev
```

Open [http://localhost:5173/portfolio-jaicker/](http://localhost:5173/portfolio-jaicker/) to view the application.

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm run dev` | Starts the Vite development server |
| `pnpm run build` | Compiles and optimizes production bundle into `dist/` |
| `pnpm run test` | Runs the Vitest test suite |
| `pnpm run test:coverage` | Runs tests and generates code coverage report |
| `pnpm run lint` | Checks codebase with ESLint |
| `pnpm run lint:fix` | Automatically fixes autofixable ESLint errors |
| `pnpm run format` | Formats source files with Prettier |
| `pnpm run format:check` | Checks source code formatting consistency |

---

## 🚀 Continuous Deployment

Every push to the `main` branch automatically triggers the GitHub Actions workflow in [deploy.yml](.github/workflows/deploy.yml), installing dependencies via `pnpm install --frozen-lockfile`, building the production bundle, and deploying directly to **GitHub Pages**.

---

## 🤝 Contact & Inquiries

- 💼 **LinkedIn:** [Jaicker Rafael Lozano Flores](https://www.linkedin.com/in/jaicker-rafael-lozano-flores-970197264/)
- 🐙 **GitHub:** [@jaickerlozano](https://github.com/jaickerlozano)
- ✉️ **Email:** [jlozano.devcode@gmail.com](mailto:jlozano.devcode@gmail.com)
- 💬 **WhatsApp:** [+56 9 5851 4284](https://wa.me/56958514284)

---

## 📄 License

This project is open-source and licensed under the [MIT License](./LICENSE).
