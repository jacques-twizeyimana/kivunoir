/** Estate visits and tastings offered on the Book a visit page. */

export interface Experience {
  id: string;
  title: string;
  meta: string;
  price: string;
  where: string;
  note: string;
}

export const experiences: Experience[] = [
  { id: 'buliza', title: 'Buliza estate tour', meta: 'Burega, Rulindo · Northern Province · about 1 hour from Kigali', price: 'From RWF 360,000', where: 'Buliza, Northern Province', note: 'A day trip from Kigali. Final price depends on party size and transport.' },
  { id: 'cyebumba', title: 'Cyebumba estate visit', meta: 'Kivumu, Rutsiro · Western Province · 1,900 m', price: 'On request', where: 'Cyebumba, Western Province', note: 'Further west and higher. We will send a programme and price once we know your dates.' },
  { id: 'tasting', title: 'Tasting experience', meta: 'Kigali · a guided tasting of our roasts', price: 'RWF 100,000', where: 'Kigali', note: 'A guided tasting in Kigali for those who cannot travel to an estate.' },
];
