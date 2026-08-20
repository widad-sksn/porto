# Portfolio - Ahmad Widad Saksana

Welcome to my personal portfolio repository! I am a **Network & Infrastructure Engineer** and **Backend Developer** with deep expertise in computer networking, MikroTik configuration, server administration, virtualization, and cybersecurity.

This portfolio is built using **React**, **Vite**, **Tailwind CSS**, and **Supabase**. It showcases my technical stack, past projects, certifications, and professional journey.

---

## ?? Tech Stack

- **React.js** (Vite) - Frontend Framework
- **Tailwind CSS** - Styling
- **Supabase** - Backend-as-a-Service (PostgreSQL, Auth, Storage)
- **Docker** - Containerization & Deployment
- **Lucide React** - Icons
- **AOS & Framer Motion** - Animations

---

## ??? Features

- **Responsive Design**: fully functional on desktop and mobile.
- **Dynamic Content**: Projects and Certificates are fetched in real-time from Supabase.
- **Dashboard Admin**: Secure login to add/edit/delete projects and upload certificates.
- **Dockerized**: Ready to be deployed easily to any Linux VPS or container platform.

---

## ?? Docker Deployment (Linux Server)

This repository includes a Dockerfile and docker-compose.yml for quick and reliable deployment on a Linux server using Nginx.

### 1. Prerequisites
Ensure you have Docker and Docker Compose installed on your server:
`ash
sudo apt update
sudo apt install docker.io docker-compose -y
`

### 2. Clone & Setup
Clone this repository to your server:
`ash
git clone https://github.com/widad-sksn/porto.git
cd porto
`

### 3. Environment Variables
Create a .env file in the root directory:
`ash
nano .env
`
Paste your Supabase keys:
`env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
`

### 4. Build & Run
Spin up the container in detached mode:
`ash
docker-compose up -d --build
`
Your website will now be running and accessible on port 8080. You can configure a reverse proxy (like Nginx Proxy Manager or Cloudflare Tunnels) to map this to your domain.

---

## ?? Local Development

If you want to run or modify the code locally on your machine:

1. Install dependencies:
   `ash
   npm install
   `
2. Start the Vite development server:
   `ash
   npm run dev
   `
3. Open http://localhost:5173 in your browser.

---

## ?? Contact & Links

- **GitHub**: [@widad-sksn](https://github.com/widad-sksn)
- **Email**: [ahmadwidad54@gmail.com](mailto:ahmadwidad54@gmail.com)
- **Instagram**: [@widad_sksn](https://www.instagram.com/widad_sksn)

> *"Leveraging AI as a professional tool, not a replacement."*
