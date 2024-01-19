import { useReducer } from "react";

const initialTodo = [
  {
    id: "1",
    title: "todo 1",
    isComplete: false,
  },
  {
    id: "2",
    title: "todo 2",
    isComplete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        console.log("hiiii");
        if (todo.id == action.id)
          return { ...todo, isComplete: !todo.isComplete };
        else return todo;
      });
    default:
      return state;
  }
};

export default function Hooks_useReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodo);

  const handleComplete = (id) =>{
    dispatch({type:"Complete",id:id});
    console.log(todos);
  }

  return (
    <>
      <h1>Hooks useReducer</h1>
      <ul>
        {todos.map((todo) => (
          <li>
           <label>
              <input 
              type="checkbox"
               key={todo.id} 
               onChange={()=>handleComplete(todo.id)}
               />
              {todo.title}
           </label>
           <span>{todo.isComplete}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
