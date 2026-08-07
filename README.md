# Evespire - Educational Consulting Platform

![Evespire Hero](/public/images/why-families-trust-evespire-image.png) <!-- Conceptual placeholder, replace with actual banner if available -->

Evespire is a modern, responsive web application designed to help African students and families build clear, practical pathways to global education opportunities. Built with Next.js (App Router), this platform provides comprehensive information on study destinations, educational services, and a seamless consultation booking experience.

## 🌟 Key Features

- **Destination Guides**: Detailed pathways for studying in the UK, US, Canada, Australia, and Asia/Europe.
- **Service Overview**: Clear information on University Selection, Application Support, and Visa & Pre-Departure assistance.
- **Consultation Booking & Contact Forms**: Integrated forms via custom API routes allowing users to easily request consultations or make enquiries.
  - **Spam Protection**: Custom honeypot checks and IP-based rate limiting (5 requests per 10 mins).
  - **Email Automation**: Branded HTML & Plain Text auto-responders sent via Nodemailer to both the organization and the user.
- **Modern UI/UX**: Built with Tailwind CSS and Shadcn UI for a clean, accessible, and responsive design. Smooth scroll reveals and animations enhance user engagement.
- **SEO Optimized**: Fully optimized with Next.js metadata API, JSON-LD schema markup (for organization details & social links), and automatic sitemap generation.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Version 14/15 - App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Delivery**: [Nodemailer](https://nodemailer.com/)
- **Fonts**: Optimized local fonts via `next/font` (Geist font family)

## 📁 Project Structure

```text
evespire/
├── app/                  # Next.js App Router root
│   ├── api/              # API routes 
│   │   └── forms/        # Appointment and Contact form handlers
│   ├── contact/          # Contact page and form UI
│   ├── study-in-.../     # Destination-specific pages (UK, US, Canada, etc.)
│   ├── layout.js         # Global layout, SEO metadata, JSON-LD schema
│   ├── page.js           # Server component entry for Home
│   └── page.client.js    # Client-side logic, media carousels and animations for Home
├── components/           # Reusable UI components
│   ├── common/           # Shared components (e.g., scroll reveals)
│   ├── home/             # Home page specific components
│   ├── layout/           # Header, Footer, Sidebar, etc.
│   └── ui/               # Shadcn UI primitives (Buttons, Cards, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── email/            # SMTP sender and HTML templates
│   ├── seo.js            # Centralized SEO metadata builder
│   └── abuse-prevention.js # Honeypot and rate-limiting utilities
├── public/               # Static assets (images, videos, favicon)
├── deploy.sh             # Custom bash script for cPanel Node.js deployments
└── .env.local            # Environment variables (not tracked in Git)
```

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd evespire
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root directory and configure your SMTP settings for the contact forms:

   ```env
   # SMTP configuration
   SMTP_HOST=your.smtp.host
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_email_password

   # Sender and recipient settings
   MAIL_FROM=your_email@example.com
   ORG_NOTIFICATION_EMAIL=your_email@example.com
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the application for production.
- `npm run start` - Starts the production server (requires a build first).
- `npm run lint` - Runs ESLint to catch errors and enforce code style.
- `npm run postbuild` - Automatically generates the sitemap using `next-sitemap`.

## 🌐 API Reference

The application exposes two main endpoints for handling user submissions:

- `POST /api/forms/appointment`: Handles consultation booking requests. Validates names, emails, specific time slots, and modes of meeting.
- `POST /api/forms/contact`: Handles general enquiries. Validates phone numbers and message lengths.

Both endpoints feature automatic bot protection (honeypots) and rate limiting to prevent abuse.

## 🚀 Deployment

The project includes a custom deployment script (`deploy.sh`) tailored for **cPanel / SSH environments running Node.js**.

To deploy to your production server:

1. Ensure your `.env.production` file is present locally (it will be securely copied to the remote server).
2. Configure your SSH variables at the top of `deploy.sh` (e.g., `SSH_HOST`, `SSH_PORT`, `SSH_USER`).
3. Make the script executable and run it:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

The script will automatically SSH into the server, pull the latest code, install dependencies within the Node.js virtual environment, build the application, and restart the Node process.


## 📄 License

This project is proprietary software belonging to Evespire Investment Limited. All rights reserved.
