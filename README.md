# Rolekeeper.io

Marketing and community site for [Rolekeeper Quest](https://rolekeeper.quest) -- an AI session management platform. Features landing pages, user dashboards, guild directories, leaderboards, and community forums.

**Live:** [rolekeeper.io](https://rolekeeper.io)

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite 8
- **Routing:** React Router 7
- **Animations:** Framer Motion
- **Auth & Database:** Supabase
- **SEO:** React Helmet
- **Hosting:** Cloudflare Workers

## Pages

### Public
- **Landing** -- Hero with interactive simulation, features, testimonials, pricing, and roadmap
- **Pricing** -- Free tier + Pro tier ($5/mo) details and donation option
- **Guide** -- How-it-works documentation
- **Changelog & Roadmap** -- Product updates and upcoming features
- **Privacy & Terms** -- Legal pages

### Authenticated
- **Dashboard** -- User stats: quests completed, XP, level, streak, guild memberships
- **Profile** -- Public user profiles by username
- **Guilds** -- Browse and join community guilds
- **Leaderboard** -- Global user rankings
- **Community Forums** -- Discussion categories for tips, feature requests, bug reports, and showcase

## Getting Started

```bash
npm install

# Create .env with your Supabase credentials
cp .env.example .env

npm run dev
```

### Environment Variables

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Design System

Three themes (Light, Dark, Arcade) using CSS variables and glassmorphism. Bilingual support for English and Spanish.

## Deployment

```bash
npm run build
npx wrangler deploy
```
