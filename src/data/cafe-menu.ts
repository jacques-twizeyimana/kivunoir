/**
 * The café menu, shared by both branches. Items with a photo show as cards;
 * items without one are listed as rows under the cards.
 *
 * `photo` names a file in src/assets/menu/ (without .webp). Those files come
 * from scripts/image-sources.json via `node scripts/fetch-images.mjs`.
 */

export interface MenuItem {
  name: string;
  price: string;
  photo?: string;
}

export interface MenuGroup {
  title?: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  label: string;
  groups: MenuGroup[];
}

type Raw = [name: string, price: string, photo?: string];

const group = (items: Raw[], title?: string): MenuGroup => ({
  title,
  items: items.map(([name, price, photo]) => ({ name, price, photo })),
});

export const cafeMenu: MenuSection[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    groups: [
      group([
        ['Espresso', '3,500', 'espresso'],
        ['Americano', '4,500', 'americano'],
        ['Espresso macchiato', '4,000', 'espresso-macchiato'],
        ['Pour over (Chemex / V60)', '5,000', 'pour-over-chemex-v60'],
        ['Aeropress', '5,000', 'aeropress'],
        ['French press', '5,000', 'french-press'],
        ['African espresso', '6,000', 'african-espresso'],
        ['Cortado', '4,500', 'cortado'],
        ['Cappuccino', '5,000', 'cappuccino'],
        ['Flat white', '5,000', 'flat-white'],
        ['Latte', '5,500', 'latte'],
        ['Spanish latte', '6,500', 'spanish-latte'],
        ['African latte', '8,000', 'african-latte'],
        ['Caramel macchiato', '8,500', 'caramel-macchiato'],
        ['Vanilla latte', '7,500', 'vanilla-latte'],
        ['Mocha', '9,000', 'mocha'],
        ['Nutmeg latte', '5,000', 'nutmeg-latte'],
        ['Tiramisu latte', '10,500', 'tiramisu-latte'],
        ['White mocha', '10,000', 'white-mocha'],
        ['Extra espresso shot', '2,000'],
      ]),
    ],
  },
  {
    id: 'iced',
    label: 'Iced',
    groups: [
      group([
        ['Iced pour over', '6,000', 'iced-pour-over'],
        ['Espresso shakerato', '4,500', 'espresso-shakerato'],
        ['Iced espresso', '3,500', 'iced-espresso'],
        ['Cold brew', '6,000', 'cold-brew'],
        ['Iced Americano', '5,500', 'iced-americano'],
        ['Cherry cold brew', '7,500', 'cherry-cold-brew'],
        ['Iced latte', '6,000', 'iced-latte'],
        ['Iced Spanish latte', '7,000', 'iced-spanish-latte'],
        ['Iced mocha', '9,500', 'iced-mocha'],
        ['Iced caramel macchiato', '9,000', 'iced-caramel-macchiato'],
        ['Iced tiramisu latte', '11,000', 'iced-tiramisu-latte'],
        ['Iced frappé (choose flavour)', '10,000', 'iced-frappe-choose-flavour'],
        ['Iced vanilla latte', '8,000', 'iced-vanilla-latte'],
        ['Iced nutmeg latte', '5,500', 'iced-nutmeg-latte'],
        ['Iced African espresso', '6,500', 'iced-african-espresso'],
        ['Iced white mocha', '10,500', 'iced-white-mocha'],
        ['Coffee protein shake', '12,000', 'coffee-protein-shake'],
        ['Affogato', '12,000', 'affogato'],
        ['Plum Noir', '9,000', 'plum-noir'],
      ]),
    ],
  },
  {
    id: 'tea',
    label: 'Tea & more',
    groups: [
      group([
        ['Black loose leaf tea', '5,500', 'black-loose-leaf-tea'],
        ['Green loose leaf tea', '5,500', 'green-loose-leaf-tea'],
        ['Spice tea', '6,000', 'spice-tea'],
        ['African tea', '6,500', 'african-tea'],
        ['Chai latte', '6,000', 'chai-latte'],
        ['Iced chai latte', '6,500', 'iced-chai-latte'],
        ['Cascara tea', '5,000', 'cascara-tea'],
        ['Iced cascara tea', '5,500', 'iced-cascara-tea'],
        ['Iced cascara spritz', '6,500', 'iced-cascara-spritz'],
        ['Hibiscus spritz', '9,000', 'hibiscus-spritz'],
        ['Iced lemonade tea', '7,500', 'iced-lemonade-tea'],
        ['Matcha tea', '9,000', 'matcha-tea'],
        ['Iced matcha tea', '9,500', 'iced-matcha-tea'],
        ['Matcha mango', '12,000', 'matcha-mango'],
        ['Hot chocolate', '9,000', 'hot-chocolate'],
        ['Iced chocolate', '9,500', 'iced-chocolate'],
        ['Ginger soda', '5,500', 'ginger-soda'],
        ['Babyccino', '5,000', 'babyccino'],
      ]),
    ],
  },
  {
    id: 'soft',
    label: 'Juices & water',
    groups: [
      group([
        ['Mixed fruit juice', '10,000', 'mixed-fruit-juice'],
        ['Green juice', '11,000', 'green-juice'],
        ['Pineapple juice', '10,000', 'pineapple-juice'],
        ['Orange juice', '12,000', 'orange-juice'],
        ['Smoothie', '10,000', 'smoothie'],
        ['Water', '2,500'],
        ['Sparkling water', '2,500'],
      ]),
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    groups: [
      group([
        ['Lemon cake', '3,500', 'lemon-cake'],
        ['Chocolat Noir', '3,500', 'chocolat-noir'],
        ['Choco chip cookie', '4,500', 'choco-chip-cookie'],
        ['Oatmeal raisin cookie', '2,500', 'oatmeal-raisin-cookie'],
        ['Banana & almond bread', '3,500', 'banana-and-almond-bread'],
        ['Pain au chocolat', '3,000'],
      ]),
    ],
  },
  {
    id: 'food',
    label: 'Food',
    groups: [
      group(
        [
          ['Mixed fruit & granola bowl', '12,000', 'mixed-fruit-and-granola-bowl'],
          ['Classic waffle', '9,000', 'classic-waffle'],
          ['Pancakes', '12,000', 'pancakes'],
          ['Classic French toast', '12,000', 'classic-french-toast'],
        ],
        'Breakfast',
      ),
      group(
        [
          ['Fresh fruit platter', '9,000', 'fresh-fruit-platter'],
          ['Mediterranean salad', '18,000', 'mediterranean-salad'],
        ],
        'Salads',
      ),
      group([['Chicken & waffle', '12,000', 'chicken-and-waffle']], 'Sandwiches'),
      group(
        [
          ['Mini pancakes', '7,000', 'mini-pancakes'],
          ['Mini waffle', '7,000', 'mini-waffle'],
        ],
        'Small bites',
      ),
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    groups: [
      group([
        ['Berry cheesecake', '15,000', 'berry-cheesecake'],
        ['Passion cheesecake', '15,000', 'passion-cheesecake'],
        ['Tiramisu cake', '19,500', 'tiramisu-cake'],
        ['Brownie & ice cream', '9,000', 'brownie-and-ice-cream'],
        ['Chocolat Noir & vanilla ice cream', '9,000', 'chocolat-noir-and-vanilla-ice-cream'],
        ['Ice cream waffle', '12,000', 'ice-cream-waffle'],
      ]),
    ],
  },
  {
    id: 'extras',
    label: 'Extras',
    groups: [
      group([
        ['Low-fat milk', '500'],
        ['Oat milk', '1,500'],
        ['Almond milk', '1,500'],
        ['Vanilla flavour', '1,500'],
        ['Caramel flavour', '1,500'],
        ['Hazelnut flavour', '1,500'],
        ['Condensed milk flavour', '1,500'],
        ['Spanish flavour', '1,500'],
      ]),
    ],
  },
];

/* ---------- Reservations ---------- */

/** Half-hour slots between two times, given in minutes after midnight. */
const slots = (from: number, to: number) => {
  const out: string[] = [];
  for (let m = from; m <= to; m += 30) {
    const h = Math.floor(m / 60);
    const h12 = ((h + 11) % 12) + 1;
    out.push(`${h12}:${m % 60 ? '30' : '00'} ${h >= 12 ? 'pm' : 'am'}`);
  }
  return out;
};

export const reservationBranches = [
  { id: 'kimihurura', label: 'Kimihurura' },
  { id: 'norrsken', label: 'Norrsken' },
];

export const reservationTypes = [
  { id: 'cafe', label: 'Café', times: slots(7 * 60, 19 * 60 + 30) },
  { id: 'breakfast', label: 'Breakfast', times: slots(7 * 60, 14 * 60) },
  { id: 'lunch', label: 'Lunch', times: slots(14 * 60 + 30, 19 * 60 + 30) },
];

export const seatingOptions = [
  { id: 'interior', label: 'Café interior' },
  { id: 'pergola', label: 'Café pergola' },
  { id: 'deck', label: 'Deck exterior' },
  { id: 'balcony', label: 'Balcony' },
  { id: 'garden', label: 'Garden table' },
  { id: 'tasting', label: 'Tasting Room · RWF 100,000 minimum' },
];
