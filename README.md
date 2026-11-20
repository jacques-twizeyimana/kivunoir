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
- `src/data/photos.ts` lists every photograph with its alt text; the files live in `src/assets/`.
- `src/pages/` has one file per page. Small inline scripts handle the menu toggle, café menu tabs, shop filters, the booking summary and the demo form confirmations.

## Photos

Photos come from the Kivu Noir and Caferwa websites and the café menu. `scripts/image-sources.json` lists each source URL and where it is saved; this command downloads them and saves compressed WebP copies in `src/assets/`:

```sh
node scripts/fetch-images.mjs          # only missing files
node scripts/fetch-images.mjs --force  # refresh everything
```

Astro then generates the responsive sizes at build time. To add or replace a photo, add an entry to the JSON, run the script, and reference the file from `src/data/photos.ts` (or `src/data/cafe-menu.ts` for menu items).

## Still to do

- **Souvenir photos.** The four souvenir items in the shop still use labelled placeholders (`PhotoSlot`); the live shop doesn't sell souvenirs yet.
- **Placeholder copy.** Bracketed text such as `[hours]`, `[street address]` and `[Souvenir item]` still needs real details.
- **Forms.** The forms don't submit anywhere yet. They only show a confirmation message.
