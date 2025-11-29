# Design Guidelines for وسم (Wasem) Landing Page

## Design Approach
**Reference-Based:** Drawing inspiration from modern app landing pages (Linear, Notion, Revolut) with adaptations for bilingual (Arabic/English) Middle Eastern market. Emphasis on clarity, trust-building, and mobile-app promotion.

## Core Design Principles
1. **Bilingual Excellence:** Seamless RTL/LTR support with language toggle in header
2. **Mobile-First Showcase:** Highlight app interface through mockups and demonstrations
3. **Trust & Clarity:** Professional polish with emphasis on security and simplicity
4. **Conversion-Focused:** Clear CTAs throughout the journey

## Typography
- **Arabic Font:** Cairo or Tajawal (Google Fonts) - clean, modern Arabic typeface
- **English Font:** Inter or Manrope (Google Fonts) - pairs well with Arabic
- **Hierarchy:**
  - Hero Headline: Bold, 3xl (mobile) to 6xl (desktop)
  - Section Headings: Semibold, 2xl to 4xl
  - Body Text: Regular, base to lg
  - CTA Buttons: Semibold, base to lg

## Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 (mobile), py-24 (desktop)
- Container: max-w-7xl with px-6 (mobile), px-8 (desktop)
- Component gaps: gap-8 to gap-16

## Page Structure & Components

### Header
- Sticky navigation with logo (Arabic/English versions), language toggle, "Download App" CTA
- Clean, minimal with subtle shadow on scroll

### Hero Section (100vh)
- **Layout:** Two-column split (60/40) - Left: Headline + subheadline + dual CTAs; Right: Phone mockup showcasing app interface with QR scanning animation
- **Image:** Hero mockup showing the app's QR scanning feature in action - phone with camera view scanning invoice QR code, vibrant and modern
- Background: Subtle gradient or abstract pattern suggesting organization/efficiency
- Buttons with blurred backgrounds overlay for visibility

### How It Works (4 Steps)
- Horizontal auto-scroll cards on mobile, 4-column grid on desktop
- Each step: Large number, icon (QR code, camera, checkmark, chart), title, brief description
- Connecting dotted lines between steps (desktop only)

### Features Grid
- 3-column grid (desktop), single column (mobile)
- 7 feature cards: Icon (from Heroicons), bold title, 2-line description
- Cards with subtle hover lift effect

### Use Cases
- 3 persona cards in grid layout
- Each card: Illustration/icon, persona type, benefit statement, mini testimonial quote
- Alternating image placement for visual interest

### Privacy & Security
- 2-column layout: Left - shield/lock illustration; Right - bullet points with check icons
- Emphasis on encryption, anonymity, user control

### Why Choose Us
- Centered text block with 3 key differentiators in pill-style badges
- Supporting statistics (time saved, user satisfaction, etc.)

### Testimonials
- 3-card carousel/grid with customer quotes
- Include: Quote, name, role/business type, subtle star rating

### Final CTA
- Full-width section with gradient background
- Centered headline, subtext, prominent download buttons (App Store + Google Play)
- App preview image/mockup

### Footer
- 4-column layout: About, Features, Legal, Social/Contact
- Newsletter signup, language selector
- Copyright and compliance badges

## Images
**Required Images:**
1. **Hero:** Phone mockup (iPhone/Android) with app interface showing QR scan in progress - dynamic, bright
2. **How It Works:** Step illustrations showing QR scan process, dashboard views
3. **Use Cases:** Simple icon-based illustrations for shop owner, accountant, marketer
4. **Privacy Section:** Shield/lock security illustration
5. **Final CTA:** Dual phone mockups showing analytics dashboard
6. **App Store Badges:** Official download buttons

## Component Specifications

### Buttons
- Primary CTA: Rounded-full, px-8, py-4, bold text
- Secondary: Outlined variant with same dimensions
- Blurred background (backdrop-blur-md) when over images

### Cards
- Rounded-2xl borders with subtle shadows
- Hover: Slight scale (1.02) and shadow increase
- Padding: p-6 to p-8

### Icons
Use **Heroicons** exclusively via CDN - Outline style for features, Solid for CTAs

### Language Toggle
- Pill-shaped switcher in header (AR | EN)
- Smooth transition with fade effect when switching

### Accessibility
- Clear focus states on all interactive elements
- High contrast text ratios (WCAG AA minimum)
- Properly labeled form inputs
- RTL-aware component positioning

## Responsive Breakpoints
- Mobile: base (single column, stacked)
- Tablet: md (2 columns where appropriate)
- Desktop: lg+ (full multi-column layouts)

## Animation Strategy
**Minimal, purposeful animations:**
- Scroll-triggered fade-ins for sections (stagger by 100ms)
- QR scanning animation in hero (subtle pulse/scan line)
- Card hover states (transform + shadow)
- NO parallax, NO complex scroll animations, NO distracting effects

## Bilingual Implementation
- All text content duplicated in Arabic/English
- RTL layout flip for Arabic (justify-end, reverse flex)
- Maintain visual hierarchy regardless of language
- Date/number formatting adjusted per locale

This design creates a professional, trustworthy landing page that effectively communicates Wasem's value proposition to Arabic and English-speaking audiences while maintaining modern design standards and optimal conversion paths.