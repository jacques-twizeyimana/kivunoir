import type { ImageMetadata } from 'astro';
import cylinderFilterGround from '../assets/products/cylinder-filter-ground.webp';
import cylinderWholeBean from '../assets/products/cylinder-whole-bean.webp';
import darkRoastWholeBean from '../assets/products/dark-roast-whole-bean.webp';
import espressoRoastFilterGround from '../assets/products/espresso-roast-filter-ground.webp';
import espressoRoastWholeBean from '../assets/products/espresso-roast-whole-bean.webp';
import mediumRoastGround from '../assets/products/medium-roast-ground.webp';
import mediumRoastWholeBean from '../assets/products/medium-roast-whole-bean.webp';
import { photos } from './photos';

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
  { id: 'mw', cat: 'coffee', eyebrow: 'Medium roast', name: 'Kivu Noir medium roast', desc: 'Whole bean', price: 'From RWF 18,000', image: mediumRoastWholeBean, alt: 'Kivu Noir medium roast whole bean pack' },
  { id: 'mg', cat: 'coffee', eyebrow: 'Medium roast', name: 'Kivu Noir medium roast', desc: 'Ground', price: 'From RWF 18,000', image: mediumRoastGround, alt: 'Kivu Noir medium roast ground coffee pack' },
  { id: 'ew', cat: 'coffee', eyebrow: 'Espresso roast', name: 'Kivu Noir espresso roast', desc: 'Whole bean', price: 'From RWF 18,000', image: espressoRoastWholeBean, alt: 'Kivu Noir espresso roast whole bean pack' },
  { id: 'eg', cat: 'coffee', eyebrow: 'Espresso roast', name: 'Kivu Noir espresso roast', desc: 'Filter ground', price: 'From RWF 18,000', image: espressoRoastFilterGround, alt: 'Kivu Noir espresso roast filter ground pack' },
  { id: 'dw', cat: 'coffee', eyebrow: 'Dark roast', name: 'Kivu Noir dark roast', desc: 'Whole bean', price: 'From RWF 18,000', image: darkRoastWholeBean, alt: 'Kivu Noir dark roast whole bean pack' },
  { id: 'lw', cat: 'limited', eyebrow: 'Limited edition', name: 'The Kivu Noir cylinder', desc: 'Whole bean', price: 'RWF 40,000', image: cylinderWholeBean, alt: 'The Kivu Noir limited edition cylinder', badge: 'Limited', soldOut: true },
  { id: 'lg', cat: 'limited', eyebrow: 'Limited edition', name: 'The Kivu Noir cylinder', desc: 'Filter ground', price: 'RWF 40,000', image: cylinderFilterGround, alt: 'The black Kivu Noir limited edition cylinder', badge: 'Limited', soldOut: true },
  { id: 's1', cat: 'souvenir', eyebrow: 'Souvenir', name: '[Souvenir item]', desc: '[Material · size]', price: 'RWF [price]', photo: 'Souvenir item on bone ground' },
  { id: 's2', cat: 'souvenir', eyebrow: 'Souvenir', name: '[Souvenir item]', desc: '[Material · size]', price: 'RWF [price]', photo: 'Souvenir item on bone ground' },
  { id: 's3', cat: 'souvenir', eyebrow: 'Souvenir', name: '[Souvenir item]', desc: '[Material · size]', price: 'RWF [price]', photo: 'Souvenir item on bone ground' },
  { id: 's4', cat: 'souvenir', eyebrow: 'Gift set', name: '[Gift set name]', desc: '[What is inside]', price: 'RWF [price]', photo: 'Gift set on bone ground' },
  { id: 't1', cat: 'experience', eyebrow: 'Experience', name: 'Buliza estate tour', desc: 'Northern Province', price: 'From RWF 360,000', image: photos.cherriesSorting.src, alt: photos.cherriesSorting.alt, cta: 'Book' },
  { id: 't2', cat: 'experience', eyebrow: 'Experience', name: 'Tasting experience', desc: 'Kigali', price: 'RWF 100,000', image: photos.tastingCupping.src, alt: photos.tastingCupping.alt, cta: 'Book' },
];

export const featuredProducts = [
  { name: 'Medium roast', eyebrow: 'Whole bean', price: 'From RWF 18,000', image: mediumRoastWholeBean, alt: 'Kivu Noir medium roast whole bean pack' },
  { name: 'Espresso roast', eyebrow: 'Whole bean', price: 'From RWF 18,000', image: espressoRoastWholeBean, alt: 'Kivu Noir espresso roast whole bean pack' },
  { name: 'Dark roast', eyebrow: 'Whole bean', price: 'From RWF 18,000', image: darkRoastWholeBean, alt: 'Kivu Noir dark roast whole bean pack' },
  { name: 'Medium roast', eyebrow: 'Ground', price: 'From RWF 18,000', image: mediumRoastGround, alt: 'Kivu Noir medium roast ground coffee pack' },
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
