# Wisecap Design Studio - Premium CMS Website

A premium, CMS-driven website for Wisecap Design Studio - India's boutique brand studio focused on narrative-driven design.

## Project Overview

This website embodies the positioning "We don't just design — we build perception" and targets brand founders and CMOs for conversion into enquiries and long-term partnerships.

### Key Features

- **CMS-driven content** with structured types for Projects, Services, Packages, Team, Blog, Jobs
- **Premium design system** with sophisticated animations and micro-interactions
- **Mobile-first responsive design** optimized for all devices
- **High performance** targeting Lighthouse 90+ desktop, 80+ mobile
- **SEO optimized** with Schema.org markup and OpenGraph support
- **WCAG AA accessible** with proper contrast ratios and keyboard navigation
- **Contact forms** with CRM integration capability

### Design System

**Colors:**
- Paper (Background): #F6F4F1
- Deep Indigo (Headlines): #1E2A47  
- Terracotta (Accents): #B85A3D
- Ochre (Highlights): #D8A66A
- Muted Olive (Secondary): #7B8163
- Charcoal (Body): #222427

**Typography:**
- Headlines: Playfair Display (serif)
- Body/UI: Inter (sans-serif)
- Minimum 16px body text for readability

**Motion:**
- Slow, considered animations
- Cubic-bezier easing: (0.22, 0.9, 0.32, 1)
- Respects prefers-reduced-motion

### Content Types & CMS Models

#### Projects
- Full case study template with storyboard components
- Problem → Insight → Strategy → Solution → Impact narrative
- Outcomes tracking and testimonials
- SEO and OpenGraph optimization

#### Services  
- Strategic service descriptions with deliverables
- Industry targeting and sample projects
- Pricing anchors and conversion paths

#### Packages
- Subscription-based design services (₹10k - ₹2.5L monthly)
- Annual commitment model
- FAQ and onboarding flows

#### Team
- Founder and team member profiles
- Role-based responsibility tagging
- Professional photography and bios

#### Blog/Insights
- Authority-building content strategy
- Author attribution and related projects
- SEO optimization per post

### Technical Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (when connected)
- **Analytics**: GA4 + Google Tag Manager integration ready
- **Forms**: HubSpot/Pipedrive integration capability
- **Performance**: Image optimization, lazy loading, srcset
- **SEO**: Schema.org structured data, OpenGraph, Twitter Cards

### Performance Targets

- **Desktop Lighthouse**: 90+
- **Mobile Lighthouse**: 80+
- **Image optimization**: WebP format with srcset
- **Lazy loading**: Non-critical images
- **Font optimization**: Preloaded Google Fonts

### Accessibility Features

- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader optimized
- Alt text on all images
- Focus management and indicators

### Integrations Ready

- **CRM**: HubSpot/Pipedrive for lead capture
- **Analytics**: GA4 with custom events tracking
- **Email**: Newsletter signup integration
- **Calendar**: Consultation booking capability
- **Heatmaps**: Hotjar/Fullstory ready

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Notes

This website is designed for easy deployment to any modern hosting platform. For full CMS functionality, connect to Supabase using the "Connect to Supabase" button in the interface.

### CMS Setup Required

1. Connect to Supabase for database functionality
2. Set up authentication for content management
3. Configure form integrations (HubSpot/Pipedrive)
4. Add Google Analytics tracking ID
5. Set up custom domain and SSL

### Content Strategy

The site launches with seeded content including:
- 2 case studies (Ritual Coffee, Ayurveda Wellness)
- Core service descriptions
- Package pricing tiers
- Founder and team bios
- Process documentation

## Brand Positioning

**Core Message**: "We don't just design — we build perception"

**Target Audience**: Brand founders, CMOs, marketing leaders of growth-stage companies

**Differentiation**: 
- Narrative-driven approach vs. portfolio showcase
- Value-based pricing vs. hourly billing
- Founder-led boutique vs. large agency
- Indian heritage with global craft standards

## Support & Training

Upon completion, this project includes:
- CMS training documentation
- Asset pack with brand guidelines
- Style token documentation  
- Developer handoff notes
- Editorial workflow guidelines

---

*Crafted with intention by Wisecap Design Studio*