---
name: Clinical Precision
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#44474d'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4d6079'
  primary: '#000917'
  on-primary: '#ffffff'
  primary-container: '#0d2137'
  on-primary-container: '#7689a4'
  inverse-primary: '#b5c8e5'
  secondary: '#2c694e'
  on-secondary: '#ffffff'
  secondary-container: '#aeeecb'
  on-secondary-container: '#316e52'
  tertiary: '#070a0a'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e2122'
  on-tertiary-container: '#868889'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b5c8e5'
  on-primary-fixed: '#081c32'
  on-primary-fixed-variant: '#364860'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  element-gap: 16px
---

## Brand & Style

This design system embodies a premium, authoritative, and compassionate medical presence. It targets a high-end healthcare audience—patients seeking expertise and professionals looking for academic rigor. 

The aesthetic is a sophisticated blend of **Minimalism** and **Modern Corporate**, utilizing editorial typography to establish trust. It prioritizes clarity and whitespace to reflect a clinical environment, while using deep tonal depth and subtle "overlapping" layouts to create a sense of three-dimensional structure and modern architectural interest. The emotional response should be one of immediate confidence, clarity, and refined excellence.

## Colors

The palette is anchored in a professional medical spectrum, moving away from generic blues toward more distinctive, deep tones.

*   **Primary (Midnight Navy):** Used for headlines, primary navigation, and high-impact structural elements. It conveys authority and stability.
*   **Secondary (Emerald Green):** Reserved for primary actions, success states, and subtle accents. This "Emerald" variant provides a modern, sophisticated alternative to standard medical greens.
*   **Neutral & Backgrounds:** We use a "Crisp White" for the main canvas, with very light gray surfaces (`#F8F9FA`) to distinguish sections.
*   **Accents:** Thin, low-opacity lines in the primary color serve as separators, maintaining the "grid" feel without adding visual clutter.

## Typography

This system utilizes a high-contrast typographic pairing to balance tradition with modernity.

*   **Serif (Noto Serif):** Used for all headlines and names. The serif carries the "academic" and "literary" weight required for a consultant’s profile. It should be typeset with slightly tighter tracking in large sizes.
*   **Sans-Serif (Hanken Grotesk):** A precise, contemporary grotesque used for body text, labels, and UI elements. It ensures high readability for clinical data and bio descriptions.
*   **Hierarchy:** Use the `label-lg` style (uppercase with letter-spacing) for section overlines (e.g., "PROFESSIONAL JOURNEY") to create clear structural signposts.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** with generous vertical rhythm. 

*   **The Grid:** Use a 12-column grid for desktop. Elements like the "Hero" should feel asymmetrical, with portraits often overlapping background containers or section dividers to create depth.
*   **Overlapping Elements:** Cards and images should occasionally break the "containment" of their parent sections by 20–40px, creating a layered, premium look.
*   **Numerical Highlights:** Information cards (stats, years) should use centered alignment with significant whitespace, grouped in a 4-column layout that spans the full container width.
*   **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column. Overlapping elements are removed in favor of standard stacking to ensure touch targets and legibility remain high.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

*   **Surface Depth:** Use subtle background color shifts (White to Light Gray) to define content blocks. 
*   **Borders:** Use thin (1px) borders in a very light neutral or 10% opacity primary color for cards and input fields.
*   **Soft Shadows:** If depth is required for a floating element (like a dropdown or a primary card), use an "Ambient Shadow": `0px 4px 20px rgba(13, 33, 55, 0.05)`. The shadow color should always be a tint of the Primary Navy, never pure black.

## Shapes

The shape language is "Soft" and professional. We avoid sharp corners to maintain an approachable feel, but avoid high roundedness to stay away from a "playful" aesthetic.

*   **Standard Radius:** 0.25rem (4px) for small components like inputs and tags.
*   **Large Radius:** 0.5rem (8px) for cards and primary buttons.
*   **Images:** Portraits should feature subtle rounding (8px) or stay sharp if they are part of an overlapping bleed layout.

## Components

*   **Buttons:**
    *   *Primary:* Filled Emerald Green with white text. High contrast, rounded (8px).
    *   *Ghost:* Transparent background with a thin Primary Navy border. Used for secondary actions (e.g., "LinkedIn Profile").
    *   *Text-Only:* Primary Navy with a small trailing icon (e.g., "View Full Timeline >").
*   **Numerical Cards:** Large serif numbers (Primary Navy) paired with `label-lg` descriptors. These are often housed in a light-gray full-width bar to separate the Hero from the Bio.
*   **Input Fields:** Minimalist. Bottom-border only or very light 1px outline. Focused states use a 2px Emerald Green bottom-border.
*   **Timeline:** A horizontal or vertical line with 8px circular "nodes." Active nodes use the Emerald Green accent; past nodes use Primary Navy.
*   **Chips/Tags:** Small, light-gray backgrounds with `label-md` text. Used for skills, locations, or contact methods.