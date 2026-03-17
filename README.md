# CareWash Frontend

## Overview
The **CareWash Frontend** is a React-based web application for visualizing and interacting with 3D car reconstruction pipelines. It provides:

- A homepage highlighting the processing pipeline and core technologies
- Project description pages with detailed workflow and 3D visualization
- Team introduction section with photos, LinkedIn QR codes, and roles
- Embedded demo videos and downloadable resources

The app is styled with **Material-UI (MUI)**, fully responsive, and uses static assets for images, videos, and PDFs.

---

## Features

- **Responsive UI:** Designed with MUI Grid, Cards, and Containers for desktop and mobile
- **Video Demo:** Embedded `.mp4` demo with play controls
- **Core Technologies & Pipeline:** Interactive cards and images with hover effects
- **Team Section:** Consistent card sizes with photos, roles, icons, and LinkedIn QR codes
- **Multi-page Routing:** Uses `react-router-dom` for `/`, `/project`, `/about` pages
- **Footer Component:** Reusable across all pages
- **Static Assets:** Images, videos, PDFs, and favicon are served from `/public`

---

---

## Tech Stack

- **React 18+**
- **Material-UI (MUI v5)**
- **React Router DOM**
- **Node.js & npm**
- **Static assets**: `.mp4`, `.jpeg`, `.png`, `.pdf`

---

## Installation

1. Clone the repository:

```bash
git clone https://gitlab.com/kdg-ti/the-lab/teams-25-26/25-the-three/carewash_front.git
cd carewash_front

npm install
npm start
