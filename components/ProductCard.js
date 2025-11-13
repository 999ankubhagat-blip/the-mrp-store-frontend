import Link from 'next/link';
export default function ProductCard({ product }){
  const img = product.img || product.images?.[0] || '/images/fabric.jpg';
  return (
    <article className="product-card" role="article" aria-label={product.name}>
      <div className="pc-thumb" style={{ backgroundImage:`url(${img})` }} />
      <div style={{ padding:16 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontWeight:600 }}>{product.name}</div>
          <div style={{ fontWeight:700 }}>₹{product.price}</div>
        </div>
        <div style={{ marginTop:10, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href={`/store/product/${product.id || product._id}`}><button className="btn tiny" type="button">View</button></Link>
          <button className="btn hollow tiny" onClick={()=>{
            const wishlist = JSON.parse(localStorage.getItem('mrp_wishlist')||'[]');
            const id = product.id || product._id;
            if (!wishlist.includes(id)) wishlist.push(id);
            localStorage.setItem('mrp_wishlist', JSON.stringify(wishlist));
            alert('Added to wishlist');
          }}>Wishlist</button>
        </div>
      </div>
    </article>
  );
}
