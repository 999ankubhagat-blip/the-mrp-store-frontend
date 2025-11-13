import { useState } from 'react';

export default function ImageModal({ images = [], start = 0, onClose }) {
  const [idx, setIdx] = useState(start || 0);
  if (!images.length) return null;

  function prev(){ setIdx(i => (i-1+images.length)%images.length); }
  function next(){ setIdx(i => (i+1)%images.length); }

  return (
    <div className="modal-root" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-inner" onClick={e => e.stopPropagation()}>
        <div style={{ position:'relative', background:'#000' }}>
          <img src={images[idx]} alt="" style={{ width:'100%', height:'auto', display:'block', maxHeight:'80vh', objectFit:'contain' }} />
          <button aria-label="Previous" onClick={prev} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.9)',border:'none',padding:8,borderRadius:999 }}>◀</button>
          <button aria-label="Next" onClick={next} style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.9)',border:'none',padding:8,borderRadius:999 }}>▶</button>
          <button aria-label="Close" onClick={onClose} style={{ position:'absolute', right:12, top:12, background:'rgba(255,255,255,0.95)', border:'none', padding:8, borderRadius:8 }}>✕</button>
        </div>
      </div>
    </div>
  );
}
