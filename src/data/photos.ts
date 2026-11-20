import type { ImageMetadata } from 'astro';

import cafeInterior from '../assets/images/cafe-interior.jpg';
import lattePour from '../assets/images/latte-pour.jpg';
import packagingTube from '../assets/images/packaging-tube.jpg';
import cafeCounter from '../assets/photos/cafe-counter.webp';
import cafeKnWall from '../assets/photos/cafe-kn-wall.webp';
import cafeOpeningDay from '../assets/photos/cafe-opening-day.webp';
import buliza from '../assets/photos/buliza-coffee-branch.webp';
import cherriesSorting from '../assets/photos/cherries-sorting.webp';
import cyebumba from '../assets/photos/cyebumba-drying-beds.webp';
import dryingStation from '../assets/photos/drying-station.webp';
import estateTerraces from '../assets/photos/estate-terraces.webp';
import handSorting from '../assets/photos/hand-sorting.webp';
import nurseryGraduates from '../assets/photos/nursery-graduates.webp';
import roasting from '../assets/photos/roasting.webp';
import tastingCupping from '../assets/photos/tasting-cupping.webp';
import mapBuliza from '../assets/maps/buliza.webp';
import mapCyebumba from '../assets/maps/cyebumba.webp';
import haccp from '../assets/certifications/haccp.webp';
import rsb from '../assets/certifications/rsb.webp';
import rwandaFda from '../assets/certifications/rwanda-fda.webp';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

/**
 * Every photograph used on the site, with its alt text. Sources are listed in
 * scripts/image-sources.json (Kivu Noir and Caferwa websites).
 */
export const photos = {
  cafeInterior: { src: cafeInterior, alt: 'Inside the Kivu Noir café, black walls and warm light' },
  lattePour: { src: lattePour, alt: 'A barista pours steamed milk into a Kivu Noir latte' },
  packagingTube: { src: packagingTube, alt: 'The black Kivu Noir tube and lid' },
  cafeCounter: { src: cafeCounter, alt: 'The long black counter and open seating of a Kivu Noir café' },
  cafeKnWall: { src: cafeKnWall, alt: 'Baristas behind the counter under the Kivu Noir café sign' },
  cafeOpeningDay: { src: cafeOpeningDay, alt: 'Guests at the counter on the café’s opening day' },
  buliza: { src: buliza, alt: 'Coffee flowers and green cherries on a branch at Buliza' },
  cherriesSorting: { src: cherriesSorting, alt: 'A hand sorting ripe red coffee cherries' },
  cyebumba: { src: cyebumba, alt: 'Raised drying beds among the trees at Cyebumba' },
  dryingStation: { src: dryingStation, alt: 'Workers turning coffee on the drying beds at the station' },
  estateTerraces: { src: estateTerraces, alt: 'Terraced green hills above the drying beds' },
  handSorting: { src: handSorting, alt: 'Women sorting coffee by hand on the drying beds' },
  nurseryGraduates: { src: nurseryGraduates, alt: 'Two nursery school graduates in blue caps and gowns' },
  roasting: { src: roasting, alt: 'Freshly roasted beans pouring from the roaster' },
  tastingCupping: { src: tastingCupping, alt: 'Guests cupping coffee at a Kivu Noir tasting' },
  mapBuliza: { src: mapBuliza, alt: 'Map outline of the Buliza estate' },
  mapCyebumba: { src: mapCyebumba, alt: 'Map outline of the Cyebumba estate' },
  haccp: { src: haccp, alt: 'HACCP logo' },
  rwandaFda: { src: rwandaFda, alt: 'Rwanda Food and Drugs Authority logo' },
  rsb: { src: rsb, alt: 'Rwanda Standards Board logo' },
} satisfies Record<string, Photo>;
