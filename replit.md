# وسم (Wasem) - Invoice Management & Customer Analytics App

## Overview

Wasem is a bilingual (Arabic/English) mobile application landing page designed for the Middle Eastern market. The application helps users manage invoices through QR code scanning and provides customer behavior analytics. The project features a modern, trust-focused design with seamless RTL/LTR language support.

The landing page showcases the app's core features: QR code invoice scanning, invoice storage, and customer analytics through an elegant, conversion-focused interface inspired by modern SaaS landing pages (Linear, Notion, Revolut).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and RTL/LTR support
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation

**Design System**:
- Custom color palette with HSL-based theming for light/dark mode support
- Typography system using Cairo/Tajawal for Arabic and Inter/Manrope for English
- Responsive spacing units (4, 6, 8, 12, 16, 20, 24) via Tailwind
- Component variants using class-variance-authority (CVA)
- Mobile-first responsive design approach

**Language Support**:
- Context-based language switching (Arabic/English)
- RTL/LTR layout switching based on selected language
- Bilingual content delivery through translation helper functions

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- **Development**: Hot module replacement via Vite middleware in development mode
- **Production**: Bundled with esbuild for optimized cold start times
- **Session Management**: Express-session (configured for connect-pg-simple for PostgreSQL-backed sessions)
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Logging**: Custom request/response logging middleware

**Storage Layer**:
- Interface-based storage abstraction (`IStorage`) for flexibility
- In-memory storage implementation (`MemStorage`) for development
- Designed to support database migration (prepared for Drizzle ORM with PostgreSQL)

### Data Layer

**ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` for type sharing between client and server
- **Migrations**: Stored in `/migrations` directory
- **Database**: Configured for Neon Database (serverless PostgreSQL)
- **Validation**: Drizzle-Zod integration for runtime validation

**Current Schema**:
- Users table with UUID primary keys, username, and password fields
- Prepared for expansion with invoice and analytics tables

### External Dependencies

**UI & Component Libraries**:
- Radix UI primitives (dialogs, dropdowns, popovers, tooltips, etc.)
- Embla Carousel for image/content carousels
- Lucide React for icon system
- CMDK for command palette functionality

**Database & ORM**:
- Neon Database (@neondatabase/serverless) - Serverless PostgreSQL
- Drizzle ORM - Type-safe database operations
- connect-pg-simple - PostgreSQL session store

**Development Tools**:
- Vite with React plugin for fast development
- Replit-specific plugins (runtime error modal, cartographer, dev banner)
- esbuild for production bundling
- tsx for TypeScript execution

**Utilities**:
- date-fns for date manipulation
- clsx & tailwind-merge for className management
- nanoid for unique ID generation

**Google Fonts**:
- Cairo/Tajawal for Arabic typography
- Inter for English typography
- Loaded via Google Fonts CDN with preconnect optimization

### Build & Deployment

**Build Process**:
1. Client built with Vite (output: `dist/public`)
2. Server bundled with esbuild (output: `dist/index.cjs`)
3. Selective bundling of server dependencies to reduce syscalls
4. Static file serving from built client directory

**Environment**:
- Development: Vite dev server with HMR and Express API server
- Production: Single Express server serving bundled client and API
- Database URL required via `DATABASE_URL` environment variable