import React, { Dispatch, SetStateAction, useState } from "react";
import TodoCard from "../../TodoFuction";
import TodoTypes from "../../TodoTypes";
import "./TodoForm.css";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoDescrition, setNewTodoDescription] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoDescrition.trim() !== "") {
      const newTodo = TodoCard.addTodos(newTodoDescrition);
      setTodos((previousTodo) => [...previousTodo, newTodo]);
      setNewTodoDescription("");
    }
  };

  return (
    <div className="input-form">
      <input
        type="text"
        value={newTodoDescrition}
        onChange={(e) => setNewTodoDescription(e.target.value)}
        autoFocus={true}
        placeholder="Add your Task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
