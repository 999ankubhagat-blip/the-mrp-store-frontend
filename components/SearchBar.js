export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div style={{ display:'flex', gap:8 }}>
      <input className="search-input" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder || 'Search...'} aria-label="Search products"/>
      <button className="btn tiny" onClick={() => {}}>Search</button>
    </div>
  );
}
