import { useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {

    const todosContext = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        todosContext.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input id="text" type="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;