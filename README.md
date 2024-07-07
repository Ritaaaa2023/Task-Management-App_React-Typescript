# Typescript in React

Hi mate,

Thanks for reading the README. Below is the structure of the contents.

<a name="home"></a>

1. [TypeScript and demo case introduction](#ch1)
2. [Installation guide](#ch2)
3. [Key differences- TypeScript VS JavaScript(Based on Lab01 in 732)](#ch3)
4. [Build a new 'Task Manage' program from scratch](#ch4)  
    4.1 [TodoTypes.ts & TodoFunction.ts - Define the types & functions](#ch4_1)  
    4.2 [TodoForm.tsx & TodoList.tsx - Apply the types & functions](#ch4_2)
5. [Reference](#ref)
 
***

## <a name="ch1">Typescript and demo case introduction</a>  

In JavaScript, the most common kinds of errors we encounter can be described as type errors: a certain kind of value was used where a different kind of value was expected. Typically, these errors are caught at runtime, which can make maintaining code quality and readability challenging.

Microsoft created TypeScript in 2012. The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, static type checking helps us catch errors at compile time rather than runtime, so we can identify and fix issues before the code is executed.

TypeScript is the superset of JavaScript. This means that all the valid JavaScript code is also valid TypeScript code, the difference is 'TypeScript's Type System'. It’s especially beneficial for larger projects and teams.

### TypeScript background you shoud know

1. The lead architect of TypeScript and C# were the same person - Anders Hejlsberg. So if you have learned C#, you will find there are some similar features between them.
2. You may have written JavaScript in Visual Studio Code, and had editor auto-completion. Actually Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.(VS Code is the best editor choice for Typescrip! )
3. TypeScript is the fifth most popular programming language in the Stack Overflow Developer Survey 2023, and was highlighted as one of the most loved languages.

### Prerequisites you should have

1. You have learned JavaScript and React, beacuse the project is based on React framwork.
2. You have installed Visual Studio Code and Node.js. Additionally, it's recommended to install Vite for a faster installation experience.

### Demo case introduction

The demo case is divided into two parts. The first part is located in the 'Lab-exercise01' folder and is derived from the lab exercise01 in the 732 class. In this part, JavaScript code is converted into TypeScript code. It serves as a clear demonstration of TypeScript's functionality and illustrates the key differences between TypeScript and JavaScript.

The second part is located in the 'TaskManage' folder and focuses on creating a Task-Management project from scratch. This part provides practical insights into applying TypeScript in a real-world project, helping you understand how to effectively utilize TypeScript features in your own programs.[Home](#home)

## <a name="ch2">Installation guide </a>  

### Create a new React project with Typescript

If you have created a React project using JavaScript before, then applying TypeScript into React is almost similar. Note: this feature is available with react-scripts@2.1.0 and higher.

1. step1: Create React project with TypeScript

Situation 1:

If you have installed Vite (highly recommended), open the terminal and navigate to the desired directory where you want to store the project on your machine, and follow the below steps:

1) input command: `npm create vite@latest`
2) input your prefered project name: 
3) select a framework: `React`
4) select a variant: `TypeScript`

Situation 2:

If you have not installed Vite, you can also choose from two alternative ways. Run the following command in the terminal

`npx create-react-app my-app --template typescript`
or
`yarn create react-app my-app --template typescript`

2. step2: Once the project is created, navigate to the project folder on your machine and open it in Visual Studio Code. You will notice that the file extensions are '.tsx' instead of '.jsx' when using TypeScript.

3. For the detailed started guide, please refer to the [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/) and (https://www.typescriptlang.org/download) page. 

###  Run Demo Project from Github

1. Clone the repository into your local environment, the Git repo url is: https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Ritaaaa2023
2. Open the terminal and switch the directory to `react-typescript-todo`
3. Using `npm install` command to install the dependencies of the project.
4. Run the application by `npm run dev` and the React application with TypeScript should be ready in ` http://localhost:5173/` and wait for testing.  [Home](#home)
5. Open the link, There are 2 pages, you can click the `Lab Exercise` and `Task Manage` to experience the appliacation.

## <a name="ch3">Key differences- TypeScript VS JavaScript</a>

In the 'src/Lab-exercise01' folder, the TypeScript code was converted from JavaScript code. However, the JavaScript code can still function correctly in TypeScript without any modifications. The `Lab Exercise` page should work with no error, like below:

<p align="center">
  <img src="./react-typescript-todo/public/Lab Exercise-page.png" alt="Alt text" width="350" height="400">
</p>


The key difference between them is TypeScript’s type system. For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as `any` (allow anything), `unknown` (ensure someone using this type declares what the type is), `never` (it’s not possible that this type could happen), and `void` (a function which returns undefined or has no return value).

There are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.[1] Interface is typically used to define the shape of objects, function signatures, and custom types. 

Here are some examples demonstrating how types are applied in various scenarios.

### Functional component

In 'AboutMe.tsx', we define a functional component (AboutMe) and specify the types of properties it accepts.

1、Firstly, Using an interface declaration to define the props types. Interface in TypeScript is used to define custom types.
```
interface AboutMeProps {
  name: string;
  age: number;
  favouriteFood: string;
}
```
 
 Next we can pass it into the function in different ways, usually by using syntax like‘ : TypeName’ after the props.

1)  specify its props type directly within the function parameter

```
 function AboutMe({ name, age, favouriteFood }: AboutMeProps) {}
```

2)  Recommended: Using 'React.FC<TypeName>' to define the type of React functional components. It provides additional benefits such as automatic inference of children prop types and better support for defaultProps and propTypes.

```
const AboutMe: React.FC<AboutMeProps> =({ name, age, favouriteFood })=>{}
```

### function

In the 'LabApp.tsx' file, types are defined directly after the variables within a function, as shown below:

```
function handleTodoStatusChanged(index:number, isComplete:boolean)
```

In the 'ToDoList' file, when a function serves as a prop for components, we define the types of parameters using the '=>' syntax to specify the type of return value, as shown below:
```
interface ToDoListProps {
  onTodoStatusChanged: (index: number, isComplete: boolean) => void;
}
```

### Hook

In 'LightBulb.tsx' file, we define the type of hook by using 'hookName<type>（）'.
```
 const [isOn, setOn] = useState<boolean>(false);
```
By explicitly specifying the type with <boolean>, TypeScript ensures that isOn will only accept boolean values, and it will raise an error if you attempt to assign a value of a different type. 

### Object & Array

In 'ToDoList' file, we can define an object interface and reuse it.

1、Define the type for a single todo item

```
interface TodoItem {
  description: string;
  isComplete: boolean;
}
```
2、 Define the type for ToDoList function props, we notice that items is an array of TodoItem, so we define it like 'prop: typename[]'.

```
interface ToDoListProps {
  items: TodoItem[];
}
```

 [Home](#home)


## <a name="ch4">Build a “Task Manage” program from scratch</a>

We've covered the basics of TypeScript, and now we're ready to build a new project with TypeScript from scratch in a React environment. This mini 'Task Manager' project can implement the functionality to create, delete, edit, and cancel editing tasks.  The `Task Manage` page should work perfectly, like below:

<p align="center">
  <img src="./react-typescript-todo/public/Task Manage-page.png" alt="Alt text" width="350" height="400">
</p>



While the logic of implementing the functionality is actually still similar as the lab01 , the key difference lies in how we integrate and apply types throughout the development process. Hence, it's crucial to carefully define and organize types right from the start.

You can find the code in the 'TaskManage' folder

### <a name="ch4_1"> TodoTypes.ts & TodoFunction.ts - Define the types & functions</a>

In 'TodoTypes.ts', we define the types of single items . It can be reused by below sytax like in 'TodoFunctions.ts'.

```
import TodoTypes from "./TodoTypes";
```

In 'TodoFunctions.ts'file, we create an object to store the functions we will use in the project. We need to import the 'TodoTypes' component.

 `getTodos:():TodoTypes[]=>{}`,This method returns an array of todo items (TodoTypes[])

 `addTodos:(description:string): TodoTypes =>{}`,It takes a description parameter of type string as input and returns a new todo item of type TodoTypes.
 ...

### <a name="ch4_2"> TodoForm.tsx & TodoList.tsx - Apply the functions</a>

In 'TodoForm.tsx' file, this component allows users to input new todo items and adds them to the todo list when the "Add" button is clicked.

We import 'TodoTypes.ts & TodoFunction.ts' files to call the function and types we defined before.

Perhaps you've noticed that the type of the 'setTodo' prop seems a bit complex. However, when hovering over the 'setTodo' prop, smart VSCode will conveniently display its type.

```
interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}
```

In 'TodoList.tsx' file, this component integrates with other components and provides a user interface for managing todo items, including adding, editing, and deleting them.

The most of them are javascript code, but we can find a new type. It uses TypeScript's union type syntax (|) to specify that the state variable can hold either a number or null. This means it can either store a numeric value or be null.

```
 useState<number | null>(null);
```

Besides we have used in the project, there are also many other types and usage, for example,TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

another example is when we are not sure whether some variables are necesary, we can add a '?' after the variable as optional choice, meaning we can pass a value or not.

Inclusion, Core types in TypeScript include numbers, strings, booleans, arrays, tuples, enums, any, null, and undefined. Additionally, it's essential to study interfaces, classes, and modules, which are the building blocks of object-oriented TypeScript. TypeScript has a learning curve, but its similarity to JavaScript and strong typing can make it easier to pick up than other languages. 

More infomation about TypeScript, Please visit the handbook: https://www.typescriptlang.org/docs/handbook/intro.html



[Home](#home)

## <a name="ref">Reference</a>


\[1] TypeScript for JavaScript Programmers - https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html 
\[2] Lab Exercise Page - http://localhost:5173/lab
\[3]Task Manage Page - http://localhost:5173/todo 




