# Centro de Formación Don Bosco — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing Don Bosco informational landing page into a fuller, more credible and visually polished institutional site using the confirmed project data and salesian-inspired draft content.

**Architecture:** Keep the existing Express static-server architecture. Refine the single semantic HTML page, centralize the visual system in the existing CSS file, and keep the current vanilla JavaScript interactions while adding only lightweight accessibility and reduced-motion behavior.

**Tech Stack:** Node.js, Express 4, HTML5, CSS3, vanilla JavaScript, existing local image assets.

**Spec:** `docs/superpowers/specs/2026-11-05-centro-formacion-don-bosco-visual-design.md`

## Global Constraints

- Preserve the existing Express server and dependency set.
- Preserve the user's existing rename and contact edits in `public/index.html`.
- Use only confirmed local facts for the center: name, services, authority, schedule and Cobija/Pando location.
- Label history, mission, vision and values as suggested institutional content pending confirmation.
- Do not invent fees, dates, enrollment requirements, testimonials, statistics or local founding history.
- Do not add a CMS, database, external form service or new runtime dependency.

## Review Focus

- The page must not retain visible filler copy such as “espacio para agregar” or “ejemplo” in primary sections; verify with a text search after editing.
- The services section must name only computación and asistencia pedagógica; verify the rendered HTML copy and source.
- The contact block must show the authority and both attention periods without creating unsupported contact claims.
- Existing image paths must remain valid and the gallery must not show an empty placeholder.
- Mobile navigation, accordion behavior, focus states and reduced-motion behavior must continue to work.

---

### Task 1: Rewrite the institutional page content and structure

**Files:**
- Modify: `public/index.html`

**Interfaces:**
- Consumes: confirmed project information and the approved design spec.
- Produces: semantic sections and copy consumed by the existing CSS and JavaScript selectors.

- [ ] **Step 1: Update the hero and navigation copy**

Use the official center name, a concise formation-focused headline, the two approved services, and visible authority/schedule metadata. Keep all existing section IDs used by navigation.

- [ ] **Step 2: Replace generic institution copy with suggested institutional identity**

Add a clear history block about Don Bosco without claiming a Cobija founding date, plus mission, vision and values cards. Mark the block as suggested content pending institutional validation.

- [ ] **Step 3: Replace generic service cards**

Use two primary service cards for classes of computing and pedagogical assistance, with descriptions that do not imply unsupported duration, cost or certification.

- [ ] **Step 4: Remove empty/demo presentation patterns**

Replace placeholder gallery copy and fictitious timeline milestones with a meaningful community/communications section that explains what will be published without presenting invented dates. Remove the empty gallery placeholder while preserving all valid local image assets.

- [ ] **Step 5: Improve FAQ and contact content**

Add FAQs based on the confirmed services, schedule and audience. Show Padre Germán Barrera Blanco, both attention periods and the existing contact values as data pending confirmation. Keep the form explicitly demonstrative.

- [ ] **Step 6: Review the resulting source for semantic correctness**

Check heading hierarchy, button/link semantics, image alt text and preserved anchor IDs before styling.

### Task 2: Apply the visual redesign and responsive polish

**Files:**
- Modify: `public/styles.css`

**Interfaces:**
- Consumes: the HTML classes and section structure from Task 1.
- Produces: the institutional salesian visual system and responsive layout.

- [ ] **Step 1: Establish design tokens and page rhythm**

Tune colors, typography scale, spacing, radii, borders and shadows around the existing blue/white/gold direction. Keep the layout lightweight and avoid adding a new CSS framework.

- [ ] **Step 2: Style the new identity and services compositions**

Create visually distinct layouts for the history narrative, mission/vision cards, values list, service cards and schedule/authority highlight so sections add substance instead of repeating one card pattern.

- [ ] **Step 3: Build a non-empty gallery mosaic**

Use the five existing images in a varied grid with controlled object positioning, caption overlays where useful and no placeholder tile.

- [ ] **Step 4: Improve contact, FAQ and footer hierarchy**

Make attention hours, authority and contact actions easy to scan; add visible `:focus-visible` states; keep contrast accessible on dark and light surfaces.

- [ ] **Step 5: Verify mobile breakpoints and motion preferences**

Ensure the navigation, hero, identity cards, services, gallery and contact sections collapse cleanly below tablet and phone widths. Add a `prefers-reduced-motion` override for scroll and reveal transitions.

### Task 3: Refine interactions and accessibility behavior

**Files:**
- Modify: `public/script.js`

**Interfaces:**
- Consumes: existing IDs/classes in `public/index.html`.
- Produces: stable mobile navigation, accordion state, reveal behavior and safe form feedback.

- [ ] **Step 1: Make navigation initialization defensive**

Guard DOM lookups so the script fails gracefully if an optional element changes, while preserving the current open/close behavior and `aria-expanded` state.

- [ ] **Step 2: Improve accordion semantics and state**

Keep one open item at a time, update the visible plus/minus state and use button attributes that communicate the expanded state.

- [ ] **Step 3: Add reduced-motion handling and form feedback**

Respect the media preference for reveal animations and show a local, non-submitting confirmation when the demonstrative form is submitted, making clear that no message was sent.

### Task 4: Verify the implementation

**Files:**
- Verify: `public/index.html`, `public/styles.css`, `public/script.js`, `server.js`

- [ ] **Step 1: Run JavaScript syntax validation**

Run `node --check public/script.js`.

Expected: exit code 0.

- [ ] **Step 2: Validate repository whitespace**

Run `git diff --check`.

Expected: no whitespace errors.

- [ ] **Step 3: Check asset references and key copy**

Use PowerShell checks to confirm all five image files exist and search the HTML for forbidden placeholder phrases, unsupported invented dates and the required official data.

- [ ] **Step 4: Start the Express server and verify the root response**

Run `npm start` in a temporary process and request `http://localhost:3000/` with a local HTTP client.

Expected: HTTP 200 and the official center name in the returned HTML.

- [ ] **Step 5: Review the final diff**

Run `git diff --stat` and inspect the changed files to ensure only the approved visual/content scope and the plan/spec documents were added.
