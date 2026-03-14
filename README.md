# NDIS Self-Assessment SaaS

A modern, Apple-inspired self-assessment platform for NDIS providers to evaluate their compliance readiness.

## 🚀 Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + Liquid Design System
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions + Vercel Auto-deploy

## 📋 Features

- **Self-Assessment Module** - Interactive compliance questionnaires
- **Evidence Upload** - Secure file storage for supporting documents
- **Progress Tracking** - Visual progress indicators and completion status
- **Reporting** - Generate compliance readiness reports
- **Multi-tenancy** - Organization-based access control

## 🛠️ Development Setup

### Prerequisites
- Node.js 20+
- npm or pnpm
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/vish1281/ndis-self-assessment.git
cd ndis-self-assessment

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Environment Variables

Create a `.env` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_BASE_URL=your_supabase_rest_url
```

## 🏗️ Project Structure

```
ndis-self-assessment/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and configurations
│   ├── types/           # TypeScript types
│   └── styles/          # Global styles
├── supabase/
│   └── migrations/      # Database migrations
├── public/              # Static assets
└── docs/               # Documentation
```

## 🚀 Deployment

### Production
Pushes to `main` branch automatically deploy to:
https://ndis-self-assessment.vercel.app

### Preview Deployments
Pull requests get preview deployments for testing.

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Secure file storage with private buckets
- CORS configured for Vercel domains
- Environment variables encrypted at rest

## 📝 License

Private - All rights reserved.

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Open a Pull Request
4. Require 1 approval before merging

---

Built with ❤️ for NDIS providers.
