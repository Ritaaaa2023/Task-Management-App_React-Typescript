import AboutMe from "./AboutMe";
import { useState } from "react";
import NewToDoItem from "./NewToDoItem";
import ToDoList from "./ToDoList";
import LightBulb from "./LightBulb";

// Define the type for todo items
interface TodoItem {
  description: string;
  isComplete: boolean;
}

// A to-do list to use for testing purposes
// define the type as TodoItem[]
const initialTodos:TodoItem[]= [
  { description: "Finish lecture", isComplete: true },
  { description: "Do homework", isComplete: false },
  { description: "Sleep", isComplete: true }
];

const LabApp: React.FC = () => {
  // Setting up our todos as stateful, because we want to modify them while running this program.
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  /**
   * This function will be called when a to-do item's checkbox is clicked.
   * We will modify the clicked to-do item's isComplete status.
   */
  function handleTodoStatusChanged(index:number, isComplete:boolean) {
    const newTodos = [...todos];
    newTodos[index] = { ...todos[index], isComplete };
    setTodos(newTodos);
  }

  /**
   * This function will be called when the "add item" button is clicked. We will
   * add a new to-do item.
   */
  function handleAddTodo(description:string) {
    setTodos([
      ...todos,
      {
        description,
        isComplete: false,
      },
    ]);
  }

  /**
   * This function will be called when the "remove" button on a to-do item is clicked. We will remove that item.
   */
  function handleRemoveTodo(index:number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  

  return (
    <div className="container">
      <div className="box">
        <h1>About me</h1>
        <AboutMe
          name="Andrew"
          age={35}
          favouriteFood="burgers and fries 🍔🍟"
        />
      </div>

      <div className="box">
        <h1>My light bulb</h1>
        <LightBulb />
      </div>

      <div className="box">
        <h1>My todos</h1>
        <ToDoList
          items={todos}
          onTodoStatusChanged={handleTodoStatusChanged}
          onRemove={handleRemoveTodo}
        />
      </div>

      <div className="box">
        <h1>Add item</h1>
        <NewToDoItem onAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};

export default LabApp;
