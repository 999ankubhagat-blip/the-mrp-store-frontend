export default function FeatureGrid(){
  const items = [
    { title:'Free Shipping', desc:'On all orders above ₹2,000', icon:'🚚' },
    { title:'Premium Quality', desc:'Finest fabrics and craftsmanship', icon:'🏅' },
    { title:'Easy Returns', desc:'30-day return policy', icon:'🔁' },
    { title:'Secure Payment', desc:'UPI, Cards & more', icon:'💳' }
  ];
  return (
    <section style={{ marginTop: 20 }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:20 }}>
        {items.map(i=>(
          <div key={i.title} style={{ textAlign:'center', padding:20 }}>
            <div className="feature-icon">{i.icon}</div>
            <div style={{ fontWeight:700, marginTop:10 }}>{i.title}</div>
            <div style={{ color:'#777', marginTop:6 }}>{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
