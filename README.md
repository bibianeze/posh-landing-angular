# POSH Landing Page — Angular Rebuild

A rebuild of the POSH landing page (originally static HTML/CSS/JS) as a proper Angular application, using standalone components, Signals, `@Input()`/`@Output()`, typed interfaces, control flow (`@for`/`@if`), routing, and Reactive Forms.

## Running locally

\`\`\`bash
git clone git@github.com:bibianeze/posh-landing-angular.git
cd posh-landing-angular
npm install
ng serve
\`\`\`

Then open `http://localhost:4200` in your browser.

## How the page was split into components

The original single HTML file was broken into one component per visual section: `Navbar`, `Hero`, `Showcase`, `ImgCard`, `Features`, `Contact`, `Cta`, and `Footer`, each with its own template and scoped CSS. `Navbar` and `Footer` sit in the root `App` shell so they appear on every page, while `Hero`, `Showcase`, `Features`, `Contact`, and `Cta` live inside a `Home` page component, rendered through the Angular Router alongside a second `About` page. The 30 showcase demos are defined as a single typed array (`ShowcaseItem[]`) in `Showcase` and rendered by looping a single reusable `ImgCard` component with `@for`, receiving `title`, `subtitle`, and `imgId` via `@Input()`, instead of hand-writing 30 near-identical HTML blocks. The `Hero`'s CTA button uses `@Output()` to notify its parent when clicked, and the `Contact` component uses Reactive Forms with two custom validators (blank-check and email format), a submit button disabled until the form is valid, and a Signal-driven success state.