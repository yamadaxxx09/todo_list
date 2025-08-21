import { useState } from 'react';

const row = { display:'flex', gap:10, marginBottom:16 };
const inputStyle = {
  flex:1, padding:'12px 14px', border:'1px solid #e2e8f0',
  borderRadius:14, outline:'none', fontSize:16
};
const btn = {
  padding:'12px 16px', border:'1px solid transparent', borderRadius:14,
  background:'#1e40af', color:'#e9efff', fontWeight:600, cursor:'pointer',
  boxShadow:'0 6px 18px rgba(30,64,175,.35)'
};

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const v = text.trim();
    if (!v) return;
    onAdd(v);
    setText('');
  };
  return (
    <form onSubmit={submit} style={row}>
      <input
        style={inputStyle}
        value={text}
        onChange={e=>setText(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit" style={btn}>Add</button>
    </form>
  );
}
