import Link from 'next/link';
export default function Hero(){
  return (
    <section className="hero" role="img" aria-label="Hero: The MRP Store">
      <div className="hero-bg" style={{ backgroundImage: `url('/images/hero.jpg')` }} />
      <div className="hero-overlay">
        <h1 className="hero-title">THE MRP STORE</h1>
        <p className="hero-sub">Exclusive premium fashion for the discerning. Curated shirts and pants that define sophistication.</p>
        <div style={{ display:'flex', justifyContent:'center', gap:12 }}>
          <Link href="/enter-store">ENTER STORE</Link>
          <Link href="/store">SHOP COLLECTION</Link>

        </div>
      </div>
    </section>
  );
}
