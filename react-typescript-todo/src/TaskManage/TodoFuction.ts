import TodoTypes from "./TodoTypes";

const LOCAL_STORAGE_KEY ="todos";

//strore function types 

const TodoCard ={
  
  //get todos
  getTodos:():TodoTypes[]=>{
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  //add todos
  addTodos:(description:string): TodoTypes =>{
    const todos = TodoCard.getTodos();
    const newTodo: TodoTypes ={id:todos.length +1,description,isCompleted:false};

    const updateTodos =[...todos,newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateTodos));

    return newTodo;
  },

  //Update todo

  updateTodo:(todo:TodoTypes):TodoTypes =>{
     const todos = TodoCard.getTodos();

     const updateTodos = todos.map((item) =>(item.id===todo.id ? todo: item));
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateTodos));

     return todo;
  },

  //delete the todo

  removeTodo:(id:number):void =>{
      const todos = TodoCard.getTodos();
      const updateTodos =todos.filter((todo)=>todo.id !==id);
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateTodos));
  }

};

export default TodoCard;