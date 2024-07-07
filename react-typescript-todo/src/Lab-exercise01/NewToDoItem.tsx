import React, { useState, ChangeEvent } from "react";
import "./NewToDoItem.css";

/**
 * defined an interface NewToDoItemProps 
 * specify the props of the NewToDoItem component,including the type of the onAddTodo function.
*/

interface NewToDoItemProps {
  onAddTodo: (description: string) => void;
}

const NewToDoItem: React.FC<NewToDoItemProps> = ({ onAddTodo }) => {
  const [description, setDescription] = useState<string>("");

  /**
   * Handles input change event
   * specify it accepts a ChangeEvent<HTMLInputElement> parameter.
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  /**
   * Handles button click event.
   */
  const handleButtonClick = () => {
    onAddTodo(description);
    setDescription(""); // Clear the input field after adding the todo
  };

  return (
    <div className="newTodo">
      <label>Description: </label>
      <input
        type="text"
        value={description}
        onChange={handleInputChange}
        // Using onChange instead of onInput for better compatibility
      />
      <button onClick={handleButtonClick}>Add</button>
    </div>
  );
};

export default NewToDoItem;
