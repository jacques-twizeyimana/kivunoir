# Kivu Noir website

Astro + TypeScript + Tailwind CSS v4 build of the Kivu Noir site (eight pages: Home, Our story, Estates, Book a visit, Café, Shop, Export & trade, FAQ & contact).

Requires Node 22.23.4 or newer (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Structure

- `src/styles/global.css` holds the Kivu Noir design tokens as a Tailwind `@theme`: palette, type scale, breakpoints (600px / 900px), and the semantic colours (`surface`, `ink`, `roast`, …) that switch with `data-theme="blanc" | "noir"` on any section.
- `src/components/ui/` has the design-system pieces (Button, TextLink, Eyebrow, Display, Section, Hero, Split, ProductCard, Field, …), styled with Tailwind utilities only.
- `src/components/site/` has the shared header and footer.
- `src/data/` holds the copy that repeats or drives interactions (navigation, products, café menu, visits, FAQ).
- `src/pages/` has one file per page. Small inline scripts handle the menu toggle, café menu tabs, shop filters, the booking summary and the demo form confirmations.

## Still to do

- **Photos.** Dark blocks labelled "Photo · …" (`PhotoSlot`) mark where the official estate, product and café photos go. Swap each one for an `<Image>` once the files are in `src/assets/images/`.
- **Placeholder copy.** Bracketed text such as `[hours]`, `[street address]` and `[Souvenir item]` still needs real details.
- **Forms.** The forms don't submit anywhere yet. They only show a confirmation message.
