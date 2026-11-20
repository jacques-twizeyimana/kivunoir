import type { ImageMetadata } from 'astro';
import packagingTube from '../assets/images/packaging-tube.jpg';

export type PageId = 'home' | 'story' | 'estates' | 'export' | 'cafe' | 'shop' | 'visit' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export const navLeft: NavItem[] = [
  { id: 'story', label: 'Our story', href: '/story' },
  { id: 'estates', label: 'Estates', href: '/estates' },
  { id: 'export', label: 'Export & trade', href: '/export' },
];

export const navRight: NavItem[] = [
  { id: 'cafe', label: 'Café', href: '/cafe' },
  { id: 'shop', label: 'Shop', href: '/shop' },
  { id: 'visit', label: 'Book a visit', href: '/visit' },
];

export const navAll: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  ...navLeft,
  ...navRight,
  { id: 'contact', label: 'FAQ & contact', href: '/contact' },
];

export const contact = {
  phoneRw: '+250 782 950 046',
  phoneUs: '+1 404-858-2337',
  email: 'info@kivunoir.coffee',
  instagram: '@kivunoircafe',
};

/* ---------- Seed to cup (Our story) ---------- */

export const seedToCup = [
  { where: 'The estate', title: 'Grow', text: 'Red Bourbon arabica on high slopes of rich soil, under equatorial sun and seasonal rain.' },
  { where: 'The estate', title: 'Harvest', text: 'Ripe cherries are picked by hand and taken down to our washing station.' },
  { where: 'The station', title: 'Wash', text: 'The cherries are washed and the beans sorted by hand.' },
  { where: 'The station', title: 'Dry', text: 'The coffee dries slowly in the sun before it travels to Kigali.' },
  { where: 'Kigali', title: 'Mill', text: 'Milling removes the husk, and each lot is sorted by hand once more.' },
  { where: 'Kigali', title: 'Roast', text: 'Roasted in Kigali as medium, espresso or dark, and sealed in our black tube.' },
  { where: 'On its way', title: 'Travel', text: 'Sent abroad by air, or delivered across Rwanda every day.' },
  { where: 'Your cup', title: 'Pour', text: 'At home, at a partner café or in our own cafés, while it is still fresh.' },
];

/* ---------- Shop ---------- */

export type ProductCategory = 'coffee' | 'limited' | 'souvenir' | 'experience';

export interface Product {
  id: string;
  cat: ProductCategory;
  eyebrow: string;
  name: string;
  desc: string;
  price: string;
  photo?: string;
  image?: ImageMetadata;
  alt?: string;
  badge?: string;
  soldOut?: boolean;
  cta?: string;
}

export const productFilters: { id: 'all' | ProductCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'limited', label: 'Limited edition' },
  { id: 'souvenir', label: 'Souvenirs' },
  { id: 'experience', label: 'Experiences' },
];

export const products: Product[] = [
  { id: 'mw', cat: 'coffee', eyebrow: 'Medium roast', name: 'Kivu Noir medium roast', desc: 'Whole bean', price: 'From RWF 18,000', photo: 'Medium roast whole bean pack' },
  { id: 'mg', cat: 'coffee', eyebrow: 'Medium roast', name: 'Kivu Noir medium roast', desc: 'Ground', price: 'From RWF 18,000', photo: 'Medium roast ground pack' },
  { id: 'ew', cat: 'coffee', eyebrow: 'Espresso roast', name: 'Kivu Noir espresso roast', desc: 'Whole bean', price: 'From RWF 18,000', photo: 'Espresso roast whole bean pack' },
  { id: 'eg', cat: 'coffee', eyebrow: 'Espresso roast', name: 'Kivu Noir espresso roast', desc: 'Filter ground', price: 'From RWF 18,000', photo: 'Espresso roast ground pack' },
  { id: 'dw', cat: 'coffee', eyebrow: 'Dark roast', name: 'Kivu Noir dark roast', desc: 'Whole bean', price: 'From RWF 18,000', photo: 'Dark roast whole bean pack' },
  { id: 'lw', cat: 'limited', eyebrow: 'Limited edition', name: 'The Kivu Noir cylinder', desc: 'Whole bean', price: 'RWF 40,000', image: packagingTube, alt: 'The black Kivu Noir cylinder', badge: 'Limited', soldOut: true },
  { id: 'lg', cat: 'limited', eyebrow: 'Limited edition', name: 'The Kivu Noir cylinder', desc: 'Filter ground', price: 'RWF 40,000', image: packagingTube, alt: 'The black Kivu Noir cylinder', badge: 'Limited', soldOut: true },
  { id: 's1', cat: 'souvenir', eyebrow: 'Souvenir', name: '[Souvenir item]', desc: '[Material · size]', price: 'RWF [price]', photo: 'Souvenir item on bone ground' },
  { id: 's2', cat: 'souvenir', eyebrow: 'Souvenir', name: '[Souvenir item]', desc: '[Material · size]', price: 'RWF [price]', photo: 'Souvenir item on bone ground' },
  { id: 's3', cat: 'souvenir', eyebrow: 'Souvenir', name: '[Souvenir item]', desc: '[Material · size]', price: 'RWF [price]', photo: 'Souvenir item on bone ground' },
  { id: 's4', cat: 'souvenir', eyebrow: 'Gift set', name: '[Gift set name]', desc: '[What is inside]', price: 'RWF [price]', photo: 'Gift set on bone ground' },
  { id: 't1', cat: 'experience', eyebrow: 'Experience', name: 'Buliza estate tour', desc: 'Northern Province', price: 'From RWF 360,000', photo: 'Buliza estate tour', cta: 'Book' },
  { id: 't2', cat: 'experience', eyebrow: 'Experience', name: 'Tasting experience', desc: 'Kigali', price: 'RWF 100,000', photo: 'Tasting experience', cta: 'Book' },
];

export const featuredProducts = [
  { name: 'Medium roast', eyebrow: 'Whole bean', price: 'From RWF 18,000', photo: 'Medium roast whole bean pack' },
  { name: 'Espresso roast', eyebrow: 'Whole bean', price: 'From RWF 18,000', photo: 'Espresso roast whole bean pack' },
  { name: 'Dark roast', eyebrow: 'Whole bean', price: 'From RWF 18,000', photo: 'Dark roast whole bean pack' },
  { name: 'Medium roast', eyebrow: 'Ground', price: 'From RWF 18,000', photo: 'Medium roast ground pack' },
];

/* ---------- Café menu ---------- */

export interface MenuSection {
  id: string;
  label: string;
  items: [name: string, price: string][];
}

export const cafeMenu: MenuSection[] = [
  {
    id: 'hot',
    label: 'Hot drinks',
    items: [['Espresso', '3,500'], ['Americano', '4,500'], ['Espresso macchiato', '4,000'], ['Pour over (Chemex / V60)', '5,000'], ['Aeropress', '5,000'], ['French press', '5,000'], ['African espresso', '6,000'], ['Cortado', '4,500'], ['Cappuccino', '5,000'], ['Flat white', '5,000'], ['Latte', '5,500'], ['Spanish latte', '6,500'], ['African latte', '8,000'], ['Caramel macchiato', '8,500'], ['Vanilla latte', '7,500'], ['Mocha', '9,000'], ['Nutmeg latte', '5,000'], ['Tiramisu latte', '10,500'], ['White mocha', '10,000'], ['Extra espresso shot', '2,000']],
  },
  {
    id: 'iced',
    label: 'Iced drinks',
    items: [['Iced pour over', '6,000'], ['Espresso shakerato', '4,500'], ['Iced espresso', '3,500'], ['Cold brew', '6,000'], ['Iced Americano', '5,500'], ['Cherry cold brew', '7,500'], ['Iced latte', '6,000'], ['Iced Spanish latte', '7,000'], ['Iced mocha', '9,500'], ['Iced caramel macchiato', '9,000'], ['Iced tiramisu latte', '11,000'], ['Iced frappé (choose flavour)', '10,000'], ['Iced vanilla latte', '8,000'], ['Iced nutmeg latte', '5,500'], ['Iced African espresso', '6,500'], ['Iced white mocha', '10,500'], ['Coffee protein shake', '12,000'], ['Affogato', '12,000'], ['Hibiscus spritz', '9,000'], ['Plum Noir', '9,000']],
  },
  {
    id: 'tea',
    label: 'Tea & more',
    items: [['Black loose leaf tea', '5,500'], ['Green loose leaf tea', '5,500'], ['Spice tea', '6,000'], ['African tea', '6,500'], ['Chai latte', '6,000'], ['Iced chai latte', '6,500'], ['Cascara tea', '5,000'], ['Iced cascara tea', '5,500'], ['Iced cascara spritz', '6,500'], ['Iced lemonade tea', '7,500'], ['Matcha tea', '9,000'], ['Iced matcha tea', '9,500'], ['Matcha mango', '12,000'], ['Hot chocolate', '9,000'], ['Iced chocolate', '9,500'], ['Ginger soda', '5,500'], ['Babyccino', '5,000']],
  },
  {
    id: 'soft',
    label: 'Soft drinks',
    items: [['Water', '2,500'], ['Sparkling water', '2,500'], ['Mixed fruit juice', '10,000'], ['Pineapple juice', '10,000'], ['Green juice', '11,000'], ['Orange juice', '12,000'], ['Smoothie', '10,000']],
  },
  {
    id: 'extras',
    label: 'Extras',
    items: [['Low-fat milk', '500'], ['Oat milk', '1,500'], ['Almond milk', '1,500'], ['Vanilla flavour', '1,500'], ['Caramel flavour', '1,500'], ['Hazelnut flavour', '1,500'], ['Condensed milk flavour', '1,500'], ['Spanish flavour', '1,500']],
  },
];

export { experiences, type Experience } from './experiences';

/* ---------- FAQ ---------- */

export const faqs = [
  { q: 'Which beans do you use?', a: 'Rwandan Red Bourbon arabica, grown at high altitude in Rwanda, where the soil, equatorial sun and rainfall suit the variety.' },
  { q: 'What is the difference between single estate and single origin?', a: 'Single origin can mean a country, a region or an area within one. Single estate means one specific, small growing area. Single origin beans are screen size 12+; single estate beans are 15+. Both stay traceable and fresh.' },
  { q: 'Where is the coffee processed?', a: 'Cherries are wet washed at our washing station, hand-sorted and sun-dried. They then travel to Kigali for dry milling, a second hand sort and roasting.' },
  { q: 'Why is it the world’s freshest coffee?', a: 'Most coffee is shipped green and stored for up to two years before roasting, losing much of its character. We harvest, process and roast in-house and air-freight abroad — typically within one month of harvest.' },
  { q: 'Can I buy Kivu Noir only online?', a: 'Online, and at our two cafés in Kigali. We are also looking for trade partners in Rwanda and the USA — get in touch if you would like to stock our coffee.' },
  { q: 'Do you deliver in Rwanda?', a: 'Yes — free daily delivery in Rwanda. Order online or call +250 782 950 046.' },
  { q: 'Do you sell wholesale or franchise?', a: 'Yes. For trade pricing and franchising write to info@kivunoir.coffee, or see Export & trade for green coffee and private label.' },
  { q: 'Which certifications do you hold?', a: 'HACCP, a food safety system that controls hazards at each stage of production; Rwanda FDA food safety compliance; and the S-Mark from the Rwanda Standards Board.' },
  { q: 'Can I visit an estate?', a: 'Yes. Buliza estate tours start from RWF 360,000 and Cyebumba visits are priced on request. A tasting experience in Kigali is RWF 100,000.' },
];
