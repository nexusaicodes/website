# Nexus AI Landing - Project Context

## Project Overview

This is the landing page website for **Nexus AI** (nexusai.world), a technology consulting firm specializing in enterprise architecture, sustainable technology solutions, and strategic digital transformation.

**Company:** AI Nexus Consulting FZ-LLC

## Content Direction & Positioning

### Core Messaging
The website emphasizes:
- **Sustainable Technology Focus**: EV infrastructure, renewable energy, and clean technology consulting
- **Enterprise Expertise**: Digital transformation, systems architecture, and strategic planning
- **Bridge Between Traditional & Emerging**: Connecting established enterprise needs with opportunities in sustainable technology sectors

### Target Audience
- Businesses seeking technology strategy and digital transformation
- Organizations exploring EV infrastructure and electric mobility solutions
- Companies evaluating renewable energy technology opportunities
- Enterprises needing systems architecture and modernization guidance

### Brand Voice
- Professional and strategic
- Practical expertise with forward-thinking innovation
- Focus on "bridging" traditional enterprise with sustainable/emerging tech
- Solution-oriented without being overly technical

## Tech Stack

### Core Framework
- **Next.js**: v15.2.6 (App Router pattern)
- **React**: v19.0.0
- **Node.js**: Runtime environment

### Styling
- **Tailwind CSS**: v4 (utility-first CSS framework)
- **PostCSS**: v4 (@tailwindcss/postcss)
- **Custom Utilities**: Responsive mobile-first design patterns

### Development Tools
- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting
- **Turbopack**: Fast bundler for development

## Project Structure

```
nexus-ai-landing/
├── src/
│   ├── app/
│   │   ├── page.js              # Main landing page (homepage)
│   │   ├── layout.js            # Root layout with fonts & metadata
│   │   └── globals.css          # Global styles & Tailwind config
│   ├── components/
│   │   ├── Navigation.jsx       # Responsive navigation bar
│   │   └── HexagonBackground.jsx # Animated hexagon background
│   └── utils/
│       └── smoothScroll.js      # Smooth scroll utility function
├── public/
│   ├── logo.svg                 # Nexus AI logo
│   └── saksham.jpg              # Founder image (About section)
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
└── CLAUDE.md                    # This file
```

## Homepage Content Sections

The main landing page (`src/app/page.js`) contains the following sections:

### 1. Hero Section (id="home")
- **Headline**: "Technology, Strategy, and Innovation."
- **Tagline**: "Empowering businesses through intelligent technology strategy and sustainable innovation."
- **CTA**: "Explore Our Services" → Smooth scroll to #services

### 2. Summary Section (id="summary")
- **Heading**: "Strategic Technology Consulting"
- **Content**: Single paragraph with bulleted list
  - Bridge traditional enterprise technology with sustainable innovation
  - Focus on cost-effective and scalable solutions
  - Expertise areas listed:
    - Digital Transformation
    - Systems Architecture
    - Strategic Planning
    - EV Infrastructure
    - Renewable Energy
- **CTA**: "Explore Our Services" → Smooth scroll to #services

### 3. Services Section (id="services")
- **Heading**: "Our Services"
- **Layout**: Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Services** (6 cards):
  1. Technology & Product Strategy
  2. Digital Transformation
  3. Systems Architecture & Consulting
  4. EV Infrastructure & Mobility Solutions
  5. Renewable Energy Technology Advisory
  6. Deep Tech Assessment

### 4. About Us Section (id="about")
- **Heading**: "About Us"
- **Tagline**: "Strategic technology consulting for the future of business."
- **Content**: Overview of company mission focusing on:
  - Bridging proven enterprise technology with sustainable innovation
  - Digital transformation and systems architecture
  - Clean technology sectors (EV infrastructure, renewable energy)
  - Strategic planning with practical execution
  - Cost-effective solutions for long-term success
- **Image**: saksham.jpg - Founder & CEO (positioned on right on desktop, below text on mobile)
- **Layout**: Flexible layout (text content with side image on desktop)

### 5. Contact Section (id="contact")
- **Heading**: "Get in Touch"
- **Description**: Invitation to connect about challenges and opportunities
- **Layout**: Responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
- **Contact Options** (4 cards):
  1. LinkedIn - "Connect with us professionally"
  2. Email - "Send us a message"
  3. WhatsApp - "Chat with us directly"
  4. Book a Call - "Schedule a consultation"
- All cards are clickable with hover effects

### 6. Footer
- Copyright notice for AI Nexus Consulting FZ-LLC

## Design System

### Typography
- **Font**: Montserrat (Google Fonts)
- **Responsive Scaling**: Mobile-first approach with breakpoints
  - Base: text-xl → text-4xl for headlines
  - sm: Small screens (640px+)
  - md: Medium screens (768px+)
  - lg: Large screens (1024px+)

### Color Scheme
- **Background**: Black with overlay (bg-black/60)
- **Text**: White (text-white)
- **Primary Accent**: Defined in Tailwind config (bg-primary)
- **Cards**: Semi-transparent white (bg-white/10)
- **Dividers**: Semi-transparent white borders (border-white/20)

### Spacing & Layout
- **Section Padding**: Custom utility class `section-padding-mobile`
- **Container Padding**: Custom utility class `container-padding-mobile`
- **Min Height**: Most sections use `min-h-screen` for full-screen sections
- **Cards**: Custom utility class `mobile-card`
- **Buttons**: Custom utility class `mobile-button`

### Responsive Patterns
- Mobile-first design approach
- Flexible layouts using Flexbox and CSS Grid
- Responsive text sizing at every breakpoint
- Conditional rendering for mobile vs. desktop navigation

## Key Files

### Main Landing Page
- **File**: `src/app/page.js`
- **Type**: Client component ("use client")
- **Purpose**: Single-page application with all homepage sections
- **Sections**: Hero, Summary, Services, About Us, Contact, Footer
- **Section IDs**: home, summary, services, about, contact

### Navigation
- **File**: `src/components/Navigation.jsx`
- **Features**:
  - Responsive hamburger menu for mobile
  - Smooth scroll functionality using Link components
  - Links to: Home (#summary), Services (#services), About (#about), Contact (#contact)
  - Logo and branding (both link to #home)
  - Clean, minimal design with backdrop blur

### Hexagon Background
- **File**: `src/components/HexagonBackground.jsx`
- **Features**:
  - Animated SVG hexagon grid background
  - Dynamic current flow animations
  - Responsive to viewport resize
  - Gradient mask for fade effect
  - Optimized performance with cleanup on unmount

### Smooth Scroll Utility
- **File**: `src/utils/smoothScroll.js`
- **Purpose**: Shared utility for smooth scrolling to page sections
- **Usage**: Used by both Navigation and CTA buttons throughout the site

### Layout
- **File**: `src/app/layout.js`
- **Features**:
  - Montserrat font loading (weights: 400, 500, 700)
  - Enhanced SEO metadata:
    - Title: "Nexus AI | Strategic Technology Consulting for Sustainable Innovation"
    - Rich description with key services
    - Keywords for SEO
    - OpenGraph tags for social sharing
  - Viewport configuration (non-scalable for mobile stability)

### Styles
- **File**: `src/app/globals.css`
- **Features**:
  - Tailwind v4 directives
  - Custom utility classes (section-padding-mobile, container-padding-mobile, mobile-card, mobile-button)
  - Hexagon background styles and animations
  - CSS custom properties for theming
  - Mobile-responsive utilities

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## External Integrations

### Zoho Bookings
- **URL**: https://nexusai.zohobookings.com/#/4735220000000042052
- **Purpose**: Consultation booking system
- **Used In**: All CTA buttons across the site

## Content Guidelines

### When Updating Content
1. **Maintain Brand Voice**: Professional, strategic, solution-oriented
2. **Emphasize Sustainability**: Keep focus on EV, renewable energy, clean tech
3. **Bridge Narrative**: Always connect traditional enterprise with emerging tech
4. **Practical Over Theoretical**: Focus on real expertise and tangible outcomes
5. **Avoid Buzzwords**: Use clear, direct language about capabilities

### Service Descriptions
- Should be concise but descriptive (2-3 sentences)
- Lead with the business value/outcome
- Include specific domain expertise where relevant
- Avoid overly technical jargon

### CTAs (Call-to-Actions)
- Action-oriented language
- Clear next steps
- Hero and Summary sections: Link to Services section (#services) using smooth scroll
- Contact section: Zoho Bookings for scheduling consultations
- Button styling uses `bg-primary` with hover effects
- All internal links use Next.js Link component with scroll={false} and smooth scroll handler

## Code Conventions

### Component Structure
- Use functional components with hooks
- Client components must include "use client" directive
- Maintain consistent className ordering (layout → spacing → typography → colors → effects)

### Styling Approach
- Tailwind utility classes preferred over custom CSS
- Use responsive breakpoints consistently (sm, md, lg)
- Leverage custom utility classes for repeated patterns
- Keep inline styles minimal

### Accessibility
- Semantic HTML elements (section, nav, footer, etc.)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- ARIA labels where appropriate
- Focus states on interactive elements

## Future Considerations

### Potential Enhancements
- Blog/Insights section for thought leadership
- Case studies showcasing EV/renewable energy projects
- Team profiles page
- Client testimonials
- Interactive service selector or assessment tool

### SEO Optimization
- ✅ Meta descriptions with key services and value proposition
- ✅ Keywords targeting main service areas
- ✅ OpenGraph tags for social sharing
- Structured data for organization/services (future)
- Sitemap generation (future)

### Performance
- ✅ Image optimization using Next.js Image component
- ✅ Optimized hexagon background with cleanup on unmount
- ✅ Smooth scroll utility extracted for code reuse
- Code splitting for faster initial load (future)
- Analytics integration (Google Analytics, etc.) (future)

---

**Last Updated**: 2025-12-14
**Version**: 0.1.0
