import Link from 'next/link';
export default function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <Link href="/"><span className="brand-title" style={{cursor:'pointer'}}>THE MRP STORE</span></Link>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/store?category=Shirts">SHIRTS</Link>
          <Link href="/store?category=Pants">PANTS</Link>
        </nav>

        <div className="actions">
          <Link href="/store/cart"><button className="btn tiny" type="button">Cart</button></Link>
          <Link href="/enter-store"><button className="btn hollow tiny" type="button">Log in</button></Link>
        </div>
      </div>
    </header>
  );
}
