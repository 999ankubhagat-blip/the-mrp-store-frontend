import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImageModal from '../../../components/ImageModal';

const ALL = {
  p1:{ id:'p1', name:'Signature White Shirt', price:1999, desc:'Premium cotton, tailored for a refined silhouette.', images:[
    '/images/category-shirts.jpg','/images/fabric.jpg'
  ], sizes:['S','M','L','XL']},
  p2:{ id:'p2', name:'Midnight Black Shirt', price:2199, desc:'Slim fit, luxe finish.', images:['/images/category-shirts.jpg'], sizes:['S','M','L','XL']},
  p3:{ id:'p3', name:'Charcoal Trousers', price:2499, desc:'Structured pants for formal & casual.', images:['/images/category-pants.jpg'], sizes:['M','L','XL']}
};

export default function ProductPage(){
  const router = useRouter();
  const { id } = router.query;
  const [p, setP] = useState(null);
  const [size, setSize] = useState('');
  const [qty, setQty] = useState(1);
  const [modalIdx, setModalIdx] = useState(-1);

  useEffect(()=>{ if (id) { setP(ALL[id] || null); if (ALL[id]) setSize(ALL[id].sizes[0]); } }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    cart.push({ productId: p.id, name: p.name, price: p.price, size, qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart (mock).');
  };

  if (!p) return (
    <>
      <Header />
      <main style={{ padding: 60, textAlign:'center' }}>Product not found</main>
      <Footer />
    </>
  );

  return (
    <>
      <Header />
      <main className="product-page">
        <div>
          <div className="product-images">
            <div style={{ height:460, backgroundImage:`url(${p.images[0]})`, backgroundSize:'cover', backgroundPosition:'center', borderRadius:10, cursor:'zoom-in' }} onClick={()=>setModalIdx(0)} />
            {p.images.length > 1 && (
              <div className="product-thumb-grid">
                {p.images.map((img, i)=> <img key={i} src={img} alt="" onClick={()=>setModalIdx(i)} />)}
              </div>
            )}
          </div>
        </div>

        <aside className="product-meta">
          <h1>{p.name}</h1>
          <p style={{ color:'#666' }}>{p.desc}</p>
          <div className="price">₹{p.price}</div>

          <label className="label">Size</label>
          <select className="input" value={size} onChange={e=>setSize(e.target.value)}>
            {p.sizes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <label className="label">Quantity</label>
          <input className="input" type="number" min="1" value={qty} onChange={e=>setQty(Number(e.target.value))} />

          <div style={{ display:'flex', gap:12, marginTop:16 }}>
            <button className="btn" onClick={addToCart}>Add to Cart</button>
            <Link href="/store/cart"><button className="btn hollow" type="button">Checkout</button></Link>

          </div>
        </aside>
      </main>

      {modalIdx >= 0 && <ImageModal images={p.images} start={modalIdx} onClose={()=>setModalIdx(-1)} />}

      <Footer />
    </>
  );
}
