import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CategoryCard from '../components/CategoryCard';
import FloatingSupport from '../components/FloatingSupport';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>The MRP Store — Minimal Luxury</title>
        <meta name="description" content="Exclusive premium shirts & pants — curated for the discerning." />
      </Head>

      <Header />
      <Hero />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px' }}>
        <section style={{ marginBottom: 28, textAlign:'center' }}>
          <h2 style={{ fontFamily:'Playfair Display', fontSize:28, marginBottom:6 }}>Crafted for Excellence</h2>
          <p style={{ color:'#6b6b6b', maxWidth:760, margin:'0 auto' }}>Every piece in our collection is carefully curated to represent the pinnacle of contemporary fashion. We source the finest fabrics and work with master craftsmen to create garments that transcend trends.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <div style={{ borderRadius: 8, overflow: 'hidden' }}>
            <img src="/images/fabric.jpg" alt="Fabric" loading="lazy" />

          </div>
        </section>

        <section className="category-grid" style={{ marginBottom:36 }}>
          <CategoryCard title="Shirts" img="/images/category-shirts.jpg" link="/store?category=Shirts" />
          <CategoryCard title="Pants" img="/images/category-pants.jpg" link="/store?category=Pants" />
        </section>

        <FeatureGrid />
      </main>

      <section style={{ background: '#111', color:'#fff', padding: '56px 20px', textAlign:'center' }}>
        <h2 style={{ fontFamily:'Playfair Display', fontSize:36, margin:0 }}>Ready to Elevate Your Wardrobe?</h2>
        <p style={{ opacity:0.85, maxWidth:800, margin:'12px auto 20px' }}>Join our exclusive community and discover fashion that speaks to your refined taste.</p>
        <Link href="/store"><button className="cta" type="button">ENTER STORE</button></Link>
        
      </section>

      <Footer />
      <FloatingSupport />
    </>
  );
}
