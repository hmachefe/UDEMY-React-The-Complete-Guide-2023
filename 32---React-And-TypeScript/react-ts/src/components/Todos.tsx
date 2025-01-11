import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

// function Todos(props: string[], children) {
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return <ul>
        {props.items.map(item => (
            <TodoItem key={item.id} text={item.text} />
        ))}
    </ul>
}

export default Todos;