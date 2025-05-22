# Royal Phoenicia Hotel Website

## Overview

This project is a luxury hotel website for "Royal Phoenicia Hotel" built with a modern tech stack: React for the frontend, Express for the backend, and Drizzle ORM for database interactions. The site features an elegant design with sections for rooms, amenities, dining, gallery, testimonials, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture with a clear separation between frontend and backend components:

1. **Frontend**: React-based SPA with shadcn/ui components and Tailwind CSS for styling
2. **Backend**: Express.js API server with RESTful endpoints
3. **Database**: PostgreSQL (via Drizzle ORM)
4. **State Management**: React Query for server state management

The project is structured into three main directories:
- `client/`: Frontend React application
- `server/`: Express backend
- `shared/`: Shared types and database schema definitions

## Key Components

### Frontend

1. **Component Organization**:
   - UI components are built using shadcn/ui (based on Radix UI primitives)
   - The hotel page is composed of modular sections (Header, Hero, Rooms, Amenities, etc.)
   - A mobile-responsive design with a dedicated mobile navigation component

2. **Pages**:
   - Home page with all hotel sections
   - 404 Not Found page
   - Routes are managed with Wouter, a lightweight router

3. **Styling**:
   - Tailwind CSS for utility-based styling
   - Custom color scheme with gold and blue brand colors
   - CSS variables for theming

### Backend

1. **Express Server**:
   - API routes with `/api` prefix
   - Middleware for logging, error handling, and JSON parsing

2. **Storage Interface**:
   - Abstract storage interface (IStorage) for data operations
   - Current implementation is an in-memory storage (MemStorage)
   - Ready to be extended with a Drizzle/PostgreSQL implementation

3. **Authentication**:
   - Schema prepared for user authentication
   - Not yet fully implemented

### Database

1. **Schema**:
   - Defined in `shared/schema.ts`
   - Uses Drizzle ORM with PostgreSQL
   - Currently includes a simple users table
   - Schema types are generated using Drizzle Zod for validation

## Data Flow

1. **Client-Server Communication**:
   - React Query for data fetching, caching and state management
   - API requests to server endpoints
   - JSON responses from server

2. **Database Operations**:
   - Drizzle ORM for type-safe database queries
   - Abstract storage layer to allow for different implementations

3. **Authentication Flow**:
   - Authentication endpoints (yet to be implemented)
   - Session management (likely via cookies/session tokens)

## External Dependencies

### Frontend

- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Routing**: Wouter for lightweight routing
- **Data Fetching**: TanStack React Query
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Utilities**: class-variance-authority, clsx, tailwind-merge

### Backend

- **Server**: Express.js
- **Database ORM**: Drizzle ORM
- **Validation**: Zod
- **Database**: PostgreSQL (via Neon Serverless)

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development**: 
   - `npm run dev` for local development (runs both frontend and backend)
   - Vite for frontend development with HMR

2. **Production Build**:
   - Frontend: Vite builds static assets to `dist/public`
   - Backend: esbuild bundles server to `dist/index.js`
   - Combined build with `npm run build`

3. **Replit Deployment**:
   - Configured in `.replit` to use the built files
   - Autoscale deployment target
   - Port 5000 mapped to external port 80

## Implementation Plan

### Current Status

The project has a fully designed frontend with static data but needs backend implementation and database integration.

### Next Steps

1. **Database Setup**:
   - Implement PostgreSQL connection using the Neon Serverless driver
   - Update the storage implementation to use Drizzle ORM

2. **API Routes**:
   - Implement user authentication routes (register, login, logout)
   - Create routes for hotel data (rooms, bookings, etc.)

3. **Connect Frontend**:
   - Replace static data with API calls
   - Implement booking functionality
   - Add authentication UI components

4. **Testing & Optimization**:
   - Add tests for critical paths
   - Optimize performance and loading states

### Future Enhancements

1. **Admin Dashboard**:
   - Booking management
   - Content management for hotel information

2. **Advanced Features**:
   - Room availability calendar
   - Payment processing integration
   - Email notifications