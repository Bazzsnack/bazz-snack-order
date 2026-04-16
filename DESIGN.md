# Design System Document: Editorial Snack E-Commerce

## 1. Overview & Creative North Star: "The Neon Pantry"
This design system is built to transform the mundane act of snack shopping into a high-octane, sensorial experience. Our Creative North Star is **"The Neon Pantry"**—a concept that marries the sophisticated depth of a luxury dark-mode editorial with the high-energy "pop" of street-food culture.

To move beyond the "template" look, this system rejects the standard 12-column rigid grid in favor of **Dynamic Layering**. We use intentional asymmetry, where product imagery "breaks" container bounds, and typography scales are pushed to extremes to create a sense of urgency and flavor. The interface shouldn't just be a shop; it should feel like a late-night premium vending experience in a futuristic metropolis.

---

## 2. Colors: Tonal Depth & Liquid Fire
We avoid flat, dead blacks. Our palette is rooted in deep charcols that provide a canvas for our "Liquid Fire" accents.

### Palette Strategy
*   **Primary (The Heat):** `primary` (#ff8f70) and `secondary` (#fd8b00). Use these for high-conversion moments.
*   **Neutral (The Void):** `surface` (#0e0e0e) and `surface-container` (#1a1a1a).
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Use background shifts (e.g., a `surface-container-low` card sitting on a `surface` background) to define boundaries.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. 
    *   *Base:* `surface` (#0e0e0e)
    *   *Subtle Lift:* `surface-container-low` (#131313)
    *   *Interactive/High Lift:* `surface-container-highest` (#262626)
*   **Signature Textures:** Main CTAs must utilize the **Liquid Fire Gradient**: `linear-gradient(135deg, #ff7852 0%, #fd8b00 100%)`. This provides a tactile, glowing quality that flat colors lack.
*   **The Glass Rule:** For floating navigation or snack detail overlays, use `surface-variant` (#262626) at 70% opacity with a `24px` backdrop-blur to maintain depth and context.

---

## 3. Typography: Energetic Authority
We pair the geometric confidence of **Plus Jakarta Sans** with the utilitarian precision of **Manrope**.

*   **Display (Plus Jakarta Sans):** Used for "Flavor Headlines." These should be set with tight letter-spacing (-2%) to feel impactful and "meaty."
*   **Body (Manrope):** Chosen for its high x-height and readability against dark backgrounds. 
*   **Editorial Scaling:** Don't be afraid of the gap. Use `display-lg` (3.5rem) immediately adjacent to `body-md` (0.875rem) to create a sophisticated, high-end editorial contrast.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-like." We use **Ambient Glows** and **Tonal Stacking**.

*   **The Layering Principle:** To highlight a snack card, do not add a border. Place a `surface-container-highest` card on a `surface-dim` background. The change in lightness creates a natural edge.
*   **Ambient Shadows:** If an element must "float" (like a sticky cart button), use a shadow tinted with the `primary` hue: `box-shadow: 0 20px 40px rgba(255, 115, 76, 0.15)`.
*   **The Ghost Border:** If accessibility requires a stroke, use `outline-variant` (#484847) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use for the sticky footer. A `surface-container` background with 60% opacity and a heavy blur allows the vibrant snack photography to scroll underneath, creating a "frosted" high-end feel.

---

## 5. Components

### Buttons
*   **Primary:** Features the "Liquid Fire" gradient. `border-radius: rounded-md` (0.75rem). No border. Typography: `label-md` in `on-primary-fixed` (Black) for maximum legibility.
*   **Secondary:** Ghost style. Transparent background with a `Ghost Border`. Text color: `primary`.

### Cards & Lists
*   **Snack Cards:** Forbid divider lines. Use `surface-container-low` for the card body. The product image should "overflow" the top of the card by `1rem` to break the boxy feel.
*   **Lists:** Separate items using vertical whitespace from the spacing scale (`1.5rem`) rather than lines.

### Inputs
*   **Text Fields:** `surface-container-highest` background. Bottom-only "Ghost Border" that transforms into a `primary` 2px line on focus.
*   **Chips:** Use `rounded-full` for a friendly, snackable feel. Unselected: `surface-container-high`. Selected: `primary` background with `on-primary` text.

### Sticky Footer Bar (The "Action Dock")
*   **Design:** A floating dock positioned `1rem` from the bottom. 
*   **Visuals:** Glassmorphic `surface-container` with a `primary-dim` top-glow (a 1px inner-shadow at the top to simulate light hitting an edge).

---

## 6. Do's and Don'ts

### Do
*   **DO** use high-quality, "wet" photography of snacks. The dark UI is designed to make the food colors (reds, oranges, yellows) pop.
*   **DO** use asymmetrical margins (e.g., 5% left, 10% right) in hero sections to create a custom, "boutique" feel.
*   **DO** lean into the "Plus Jakarta Sans" bold weights for price points to make them feel like a design element.

### Don't
*   **DON'T** use pure #000000 for backgrounds; it kills the "Glass" effect and feels "cheap." Use `surface` (#0e0e0e).
*   **DON'T** use standard 1px borders to separate content. If you feel the need for a line, use a gap of empty space instead.
*   **DON'T** use "Default Blue" for links or success states. Use `tertiary` (#eaa5ff) for a neon-electric alternative that fits the "Neon Pantry" aesthetic.