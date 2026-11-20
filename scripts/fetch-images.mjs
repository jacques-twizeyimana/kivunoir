/**
 * Downloads the source photos listed in scripts/image-sources.json and saves
 * compressed WebP copies under src/assets. Astro then serves resized versions.
 *
 *   node scripts/fetch-images.mjs          # skip files that already exist
 *   node scripts/fetch-images.mjs --force  # re-download everything
 */
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sources = JSON.parse(readFileSync(resolve(root, 'scripts/image-sources.json'), 'utf8'));
const force = process.argv.includes('--force');

let done = 0;
let failed = 0;
const queue = [...sources];

async function work() {
  for (let item = queue.shift(); item; item = queue.shift()) {
    const out = resolve(root, item.out);
    if (!force && existsSync(out)) continue;
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const input = Buffer.from(await res.arrayBuffer());
      mkdirSync(dirname(out), { recursive: true });
      const info = await sharp(input)
        .rotate()
        .resize({ width: item.width ?? 1600, withoutEnlargement: true })
        .webp({ quality: item.quality ?? 72 })
        .toFile(out);
      done += 1;
      console.log(`${item.out}  ${Math.round(input.length / 1024)} KB → ${Math.round(info.size / 1024)} KB`);
    } catch (error) {
      failed += 1;
      console.error(`FAILED ${item.url}: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 6 }, work));
console.log(`\n${done} written, ${failed} failed, ${sources.length} listed.`);
if (failed) process.exitCode = 1;
