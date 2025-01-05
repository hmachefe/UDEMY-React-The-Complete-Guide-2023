import Todo from "../models/Todo";

// function Todos(props: string[], children) {
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return <ul>
        {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
}

export default Todos;