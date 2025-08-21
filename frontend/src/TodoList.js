import TodoItem from './TodoItem';

const list = {
  listStyle:'none', padding:0, margin:0,
  display:'grid', gap:10
};

export default function TodoList({ todos, onDelete }) {
  if (!todos.length) return <p style={{color:'#475569'}}>No tasks yet.</p>;
  return (
    <ul style={list}>
      {todos.map(t => <TodoItem key={t.id} todo={t} onDelete={onDelete} />)}
    </ul>
  );
}
