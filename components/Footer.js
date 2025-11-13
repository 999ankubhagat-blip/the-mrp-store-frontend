import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid-four">
          <div>
            <div style={{ fontFamily:'Playfair Display', fontSize:18, marginBottom:8 }}>THE MRP STORE</div>
            <div style={{ color:'var(--muted)' }}>Exclusive premium fashion for the discerning. Curated shirts and pants that define sophistication.</div>
          </div>

          <div>
            <h4 style={{ marginBottom:8 }}>SHOP</h4>
            <ul className="footer-links">
              <li><Link href="/store?category=Shirts">Shirts</Link></li>
              <li><Link href="/store?category=Pants">Pants</Link></li>
              <li><Link href="/store">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom:8 }}>POLICIES</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/shipping">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom:8 }}>CONTACT</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><a href="https://wa.me/919000000000" target="_blank" rel="noreferrer">WhatsApp Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ marginTop:28 }}>
          <div>© {new Date().getFullYear()} The MRP Store. All rights reserved.</div>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ color:'var(--muted)', fontSize:13 }}>WE ACCEPT</div>
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ background:'#fff', padding:'6px 10px', borderRadius:6, border:'1px solid #eee' }}>VISA</div>
              <div style={{ background:'#fff', padding:'6px 10px', borderRadius:6, border:'1px solid #eee' }}>MC</div>
              <div style={{ background:'#fff', padding:'6px 10px', borderRadius:6, border:'1px solid #eee' }}>UPI</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
