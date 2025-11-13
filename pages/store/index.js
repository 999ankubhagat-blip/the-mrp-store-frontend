import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';

const PLACEHOLDERS = [
  { id:'p1', name:'Signature White Shirt', price:1999, img:'/images/category-shirts.jpg', sizes:['S','M','L','XL'] },
  { id:'p2', name:'Midnight Black Shirt', price:2199, img:'/images/category-shirts.jpg', sizes:['S','M','L','XL'] },
  { id:'p3', name:'Charcoal Trousers', price:2499, img:'/images/category-pants.jpg', sizes:['M','L','XL'] },
  { id:'p4', name:'Tailored Slim Pants', price:2599, img:'/images/category-pants.jpg', sizes:['M','L','XL'] }
];

export default function Store(){
  const router = useRouter();
  const { category } = router.query;
  const [list, setList] = useState(PLACEHOLDERS);
  const [q, setQ] = useState('');

  useEffect(()=> {
    let items = PLACEHOLDERS;
    if (category) {
      if (category.toLowerCase() === 'shirts') items = items.filter(p => p.name.toLowerCase().includes('shirt'));
      if (category.toLowerCase() === 'pants') items = items.filter(p => p.name.toLowerCase().includes('pant') || p.name.toLowerCase().includes('trouser'));
    }
    if (q) items = items.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    setList(items);
  }, [category, q]);

  return (
    <>
      <Head><title>Store — The MRP Store</title></Head>
      <Header />
      <main style={{ maxWidth:1200, margin:'36px auto', padding:'0 20px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18 }}>
          <h2 style={{ margin:0 }}>Collection {category ? `— ${category}` : ''}</h2>
          <div style={{ width:420 }}>
            <SearchBar value={q} onChange={setQ} placeholder="Search products, e.g., 'white shirt'" />
          </div>
        </div>

        <div className="grid">
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
