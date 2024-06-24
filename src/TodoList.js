import TodoItems from "./TodoItems";

export default function TodoList({
  list,
  toggleDone,
  toggleDeleteButton,
  deleteItem,
  handleTap,
}) {
  return (
    <ul>
      {list.map((list) => (
        <TodoItems
          key={list.id}
          list={list}
          toggleDone={toggleDone}
          deleteItem={deleteItem}
          toggleDeleteButton={toggleDeleteButton}
        />
      ))}
    </ul>
  );
}
