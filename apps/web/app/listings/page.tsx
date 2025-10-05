import ListingCard from '@/components/ListingCard';
export default function Listings() {
  const items = [
    { title: 'Tilapia (Large, 10kg)', species: 'Tilapia', price: 'GHS 320', location: 'Ho', seller: 'AquaFresh Farms' },
    { title: 'Catfish Fingerlings (500 pcs)', species: 'Catfish', price: 'GHS 900', location: 'Accra', seller: 'BluePond Hatchery' },
    { title: 'Smoked Mackerel (5 crates)', species: 'Mackerel', price: 'GHS 1,200', location: 'Tema', seller: 'Coastal Smokehouse' }
  ];
  return <main className="grid gap-5 md:grid-cols-2">{items.map((it, i) => <ListingCard key={i} {...it} />)}</main>;
}
