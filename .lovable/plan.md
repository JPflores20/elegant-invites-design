

# Eventos Inolvidables - Premium Landing Page

## Overview
A sophisticated, minimalist luxury landing page for a digital invitation service targeting the Mexican/Latin American market. The design will feature champagne/gold accents, elegant typography, and smooth interactions.

---

## Design System

### Color Palette
- **Background**: Warm cream/off-white (`#FFFBF5`)
- **Primary Accent**: Champagne gold (`#C9A050`)
- **Text Primary**: Deep charcoal (`#2D2D2D`)
- **Text Secondary**: Warm gray (`#6B6B6B`)
- **Card backgrounds**: Soft white with subtle glass effect

### Typography
- **Headings**: Playfair Display (elegant serif) - imported from Google Fonts
- **Body**: Inter (clean sans-serif) - already available

---

## Page Sections

### 1. Hero Section
- Large, impactful headline: "Tu evento comienza con la invitación perfecta."
- Elegant subheadline describing the service
- Gold "Ver Diseños" CTA button (smooth scroll to designs section)
- Decorative placeholder area showing a phone mockup with an invitation
- Subtle animated gradient or floating shapes for visual interest

### 2. Event Types Grid
- Section title: "Diseños exclusivos para cada ocasión"
- 6 elegant cards with icons for each event type:
  - 💒 Bodas (Weddings)
  - 👑 XV Años (Quinceañeras)
  - ✝️ Bautizos (Baptisms)
  - 🎈 Fiestas Infantiles (Kids' Parties)
  - 🎓 Graduaciones (Graduations)
  - 💼 Eventos Corporativos (Corporate)
- Hover effects: subtle lift and gold border accent
- Each card links to WhatsApp with a pre-filled inquiry message

### 3. Key Features Section
- Title: "¿Por qué elegir nuestras invitaciones?"
- 5 feature cards with icons and descriptions:
  - 📍 Ubicación GPS with Maps/Waze integration
  - 📅 Agendar Fecha with calendar integration
  - ⏰ Cuenta Regresiva countdown timer
  - ✅ Confirmación de Asistencia (RSVP)
  - 📸 Galería de Fotos
- Elegant icons from Lucide React
- Subtle entrance animations on scroll

### 4. Pricing Packages
- 3 glassmorphism-style cards
- **Plan Básico** - $499 MXN
  - Invitación en imagen HD
  - Diseño personalizado
  - Links de ubicación
- **Plan Interactivo** - $899 MXN ⭐ *Recomendado*
  - Highlighted card (gold border, slightly larger)
  - Sitio web dedicado
  - Contador regresivo
  - Botón 'Agregar a Calendario'
  - Mapa con GPS integrado
  - Música de fondo
- **Plan Premium** - $1,499 MXN
  - Todo lo del Plan Interactivo +
  - Sistema de confirmación (RSVP)
  - Galería de fotos ilimitada
  - Sección de Mesa de Regalos
  - Código de vestimenta visual
- Each card has a WhatsApp CTA button

### 5. Testimonials Carousel
- Auto-playing carousel (5 second intervals)
- Elegant quote styling with decorative quotation marks
- 4-5 sample testimonials from happy couples
- Dot indicators and arrow navigation
- Pause on hover
- Using Embla Carousel (already installed)

### 6. Footer
- Clean, minimal design
- "Contáctanos" button → Opens WhatsApp
- Social media icon links (Instagram, Facebook, TikTok placeholders)
- Copyright text
- Optional: Decorative gold accent line

---

## Technical Implementation

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Fonts**: Google Fonts (Playfair Display) imported via CSS
- **Animations**: Subtle hover effects, scroll-triggered fade-ins using CSS transitions
- **Carousel**: Embla Carousel React for testimonials
- **WhatsApp Integration**: Direct links with pre-filled messages in Spanish
- **Glassmorphism**: CSS backdrop-blur and semi-transparent backgrounds on pricing cards

---

## Files to Create
1. `src/pages/Index.tsx` - Main landing page component
2. `src/components/HeroSection.tsx`
3. `src/components/EventTypesGrid.tsx`
4. `src/components/FeaturesSection.tsx`
5. `src/components/PricingCards.tsx`
6. `src/components/TestimonialsCarousel.tsx`
7. `src/components/Footer.tsx`
8. Updated `src/index.css` - Custom design tokens and font imports

