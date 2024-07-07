import  "./ToDoList.css";

// Define the type for a single todo item
interface TodoItem {
  description: string;
  isComplete: boolean;
}

// Define the type for ToDoList props
interface ToDoListProps {
  items: TodoItem[];
  onTodoStatusChanged: (index: number, isComplete: boolean) => void;
  onRemove: (index: number) => void;
}

// Define ToDoItem props type
interface ToDoItemProps {
  todo: TodoItem;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onRemove: () => void;
}

/**
 * Renders a list of ToDoItem components - one for each item in the given list.
 *
 * When one of those items changes, this component's onTodoStatusChanged event will fire, supplying the
 * index of the changed item and the new completed status.
 *
 * When the remove button on one of those items is clicked, this component's onRemove event will fire,
 * supplying the index of the item to be removed.
 */
const ToDoList: React.FC<ToDoListProps> = ({ items, onTodoStatusChanged, onRemove }) => {
  if (items && items.length > 0) {
    return items.map((todo, index) => (
      <ToDoItem
        key={index}
        todo={todo}
        onChange={(e) => onTodoStatusChanged(index, e.target.checked)}
        onRemove={() => onRemove(index)}
      />
    ));
  } else {
    return <p>There are no to-do items!</p>;
  }
}

/**
 * Renders a single to-do item as a checkbox, which will be checked / unchecked based on that item's isComplete status.
 * Additionally renders the message "Done!", if the to-do is complete. When the to-do item is clicked, its "onChange" event
 * will fire. Also renders a "remove" button which, when clicked, will fire the "onRemove" event.
 */
const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onChange, onRemove }) => {
  return (
    <div className="todo">
      <label className={todo.isComplete ? "done": undefined}>
        <input type="checkbox" checked={todo.isComplete} onChange={onChange} />
        {todo.description}
        {todo.isComplete && <span> (Done!)</span>}
      </label>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};


export default ToDoList;