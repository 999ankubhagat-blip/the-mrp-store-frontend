import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function Cart(){
  const [cart, setCart] = useState([]);
  useEffect(()=> setCart(JSON.parse(localStorage.getItem('cart')||'[]')), []);
  const total = cart.reduce((s,i)=> s + (i.price||0) * (i.qty||1), 0);

  function checkout(){
    // temporarily redirect to enter-store to simulate gating, or to checkout when backend later.
    Router.push('/enter-store');
  }

  function remove(ix){
    const c = [...cart];
    c.splice(ix,1);
    localStorage.setItem('cart', JSON.stringify(c));
    setCart(c);
  }

  return (
    <>
      <Header />
      <main style={{ maxWidth: 900, margin: '40px auto', padding:'0 20px' }}>
        <h2>Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty.</p> : (
          <>
            <ul style={{ listStyle:'none', padding:0 }}>
              {cart.map((it, idx)=> (
                <li key={idx} style={{ display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid #eee' }}>
                  <div>
                    <div style={{ fontWeight:600 }}>{it.name}</div>
                    <div style={{ color:'#666' }}>{it.size} • Qty {it.qty}</div>
                  </div>
                  <div>
                    <div>₹{it.price * it.qty}</div>
                    <button className="tiny" onClick={()=>remove(idx)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ textAlign:'right', marginTop:18 }}>
              <div style={{ fontSize:18, fontWeight:600 }}>Total ₹{total}</div>
              <button className="btn" onClick={checkout} style={{ marginTop:10 }}>Checkout</button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
