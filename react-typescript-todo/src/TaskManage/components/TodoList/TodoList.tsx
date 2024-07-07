import React, { useState } from "react";
import { FaPen, FaClipboardList } from "react-icons/fa";
import TodoTypes from "../../TodoTypes";
import TodoCard from "../../TodoFuction";
import { FaEdit, FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoCard.getTodos());
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editTodoDescription, setEditTodoDescription] = useState<string>("");

  //  handle edit todo
  const handleEditTodo = (id: number, description: string) => {
    setEditTodoId(id);
    setEditTodoDescription(description);
  };

  // cancel edit
  const handleEditCancel = () => {
    setEditTodoId(null);
    setEditTodoDescription("");
  };

  //save edit
  const handleEditSave = (id: number) => {
    if (editTodoDescription.trim() !== "") {
      const updateTodo = TodoCard.updateTodo({
        id,
        description: editTodoDescription,
        isCompleted: false,
      });
      setTodos((previousTodos) =>
        previousTodos.map((todo) => (todo.id == id ? updateTodo : todo))
      );

      setEditTodoId(null);
      setEditTodoDescription("");
    }
  };

  //handle delete todo
  const handleDeleteTodo = (id: number) => {
    TodoCard.removeTodo(id);
    setTodos((previousTodo) => previousTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="TaskManage">
        <div className="header">
          <div className="logoside">
            <FaPen />
            <h1>Task Manage</h1>
            <FaClipboardList />
          </div>
        </div>
        <div>
          <TodoForm setTodos={setTodos} />
        </div>
        <div className="todos">
          {todos.map((todo) => (
            <div className="items" key={todo.id}>
              {editTodoId == todo.id ? (
                <div className="editDecrip">
                  <input
                    type="text"
                    value={editTodoDescription}
                    onChange={(e) => setEditTodoDescription(e.target.value)}
                    autoFocus={true}
                  />

                  <button onClick={() => handleEditSave(todo.id)}>
                    <FaCheck />
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() => handleEditCancel()}
                  >
                    <GiCancel />
                  </button>
                </div>
              ) : (
                <div className="edit-btn">
                  <span>{todo.description}</span>
                  <button
                    onClick={() => handleEditTodo(todo.id, todo.description)}
                  >
                    <FaEdit />
                  </button>
                </div>
              )}
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <RiDeleteBin5Fill />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
