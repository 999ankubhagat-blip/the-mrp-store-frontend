import Link from 'next/link';
export default function CategoryCard({ title, img, link }) {
  return (
    <Link href={link} aria-label={`Shop ${title}`} className="category-card">
      <div className="img" style={{ backgroundImage: `url('${img}')` }} />
      <div className="category-meta">{title}</div>
    </Link>
  );
}
