import { useRef } from "react";
import classes from './NewTodo.module.css';

export const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText?.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
    };


  return (
  
  <form onSubmit={submitHandler} className={classes.form}>
    <input type="text" id="text" ref={todoTextInputRef}/>
    <button>Add Todo</button>
  </form>
  );
};
