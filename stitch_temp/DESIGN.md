---
name: Clinical Prestige
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c8c4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b928f'
  outline-variant: '#414845'
  surface-tint: '#adcec1'
  primary: '#adcec1'
  on-primary: '#18362d'
  primary-container: '#0d2c24'
  on-primary-container: '#75958a'
  inverse-primary: '#46645b'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#a0d1bf'
  on-tertiary: '#02382c'
  tertiary-container: '#002d23'
  on-tertiary-container: '#689787'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c8eadd'
  primary-fixed-dim: '#adcec1'
  on-primary-fixed: '#012019'
  on-primary-fixed-variant: '#2f4c43'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#bceddb'
  tertiary-fixed-dim: '#a0d1bf'
  on-tertiary-fixed: '#002018'
  on-tertiary-fixed-variant: '#204f42'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  bento-gap: 16px
---

## Brand & Style

The design system is engineered to evoke the precision of high-end medical technology and the exclusivity of private concierge medicine. It targets an elite demographic that values discretion, authority, and cutting-edge innovation. 

The aesthetic is **Cinematic Minimalism**, heavily influenced by modern architectural glass and premium hardware interfaces. It utilizes a "Dark Mode First" philosophy to create a focused, low-eye-strain environment that feels both sophisticated and calming. The emotional response should be one of absolute trust and quiet confidence—moving away from clinical sterile whites toward a rich, layered, and immersive professional experience.

## Colors

The palette is anchored in **Deep Medical Green (#0D2C24)**, a color that represents growth, stability, and surgical precision. This is complemented by **Sleek Charcoal (#121212)** for the deepest background layers to ensure a premium, infinite-depth feel. 

**Gold (#D4AF37)** is used sparingly as a "prestige accent" for high-value calls to action, certifications, and subtle highlights. **Emerald Glow (#1E4D40)** serves as the primary interactive color, used for glass backdrops and subtle gradients. Typography primarily utilizes **Pure White (#FFFFFF)** for maximum legibility against the dark canvases, with secondary text in a muted silver-gray.

## Typography

This design system utilizes a high-contrast typographic hierarchy. For headlines, **Inter** is set with tight tracking and heavy weights to create a "blocky," authoritative look reminiscent of premium editorial spreads. 

Body text remains in Inter but is given generous line height and slight tracking (0.01em) to ensure a breathable, luxury reading experience. To lean into the "medical tech" aspect, **JetBrains Mono** is introduced for small labels, metadata, and eyebrows to provide a precise, systematic feel.

## Layout & Spacing

The layout philosophy follows a **Bento-Box Grid** model. Content is organized into distinct, rounded modules that create a sense of organized complexity. 

- **Desktop:** A 12-column fluid grid with 80px side margins and a 1440px max-width.
- **Bento Logic:** Elements should span 4, 6, or 8 columns. Internal padding within bento cards should be a consistent 40px to maintain the "Apple-tier" airy aesthetic.
- **Rhythm:** Spacing follows an 8px base unit. Vertical section spacing is aggressive (160px+) to allow the "cinematic" transitions to breathe.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Inner Glows** rather than traditional drop shadows. 

1. **Base Layer:** Deep Charcoal (#121212).
2. **Card Layer:** Semi-transparent Emerald-Charcoal mix with a 40px backdrop blur.
3. **Stroke:** Every card must have a 1px solid border at 10% opacity (White) to catch the "light" and define the edges.
4. **Inner Glow:** A subtle 1px inner-shadow (top-left) in a light emerald tint to simulate glass thickness.
5. **Interactive Elevation:** Upon hover, cards should increase in scale (1.02x) and the backdrop blur should intensify.

## Shapes

The design system uses a **Rounded (Level 2)** shape language. The 0.5rem base radius provides a modern, friendly feel while remaining professional. Large bento-style cards and primary buttons should scale up to `rounded-xl` (1.5rem / 24px) to create the soft, "molded" look characteristic of premium hardware.

## Components

### Buttons
- **Primary:** High-gloss Gold or Deep Green. Magnetic interaction (follows the cursor within a 20px radius).
- **Secondary:** Ghost style with the 1px subtle white border and 12px padding.

### Bento Cards
- Rounded corners (24px). 
- Subtle 1px inner glow. 
- Integrated imagery should use a dark vignette or desaturated emerald overlay to blend into the UI.

### Inputs & Forms
- Minimalist underlines or fully enclosed glass containers. 
- Focus state is indicated by the 1px border turning into a solid Gold or Emerald glow.

### Medical Data Visualization
- Use the JetBrains Mono font for numbers.
- Lines should be ultra-thin (0.5pt) and use the primary Emerald color with a subtle outer glow.

### Magnetic Cursors
- The default cursor should be replaced with a custom small dot that expands into a ring when hovering over "Magnetic" elements (buttons/cards).