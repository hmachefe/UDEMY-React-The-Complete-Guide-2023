export default function TabButton(props) {

    function handleClick() {
        console.log('button has been clicked')
    }

    return (
        <li>
            <button onClick={handleClick}>
                {props.children}
            </button>
        </li>
    );
}