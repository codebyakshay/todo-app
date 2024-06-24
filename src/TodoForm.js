export default function TodoForm({ setText, text, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>Whats On your Mind 🤔 </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
