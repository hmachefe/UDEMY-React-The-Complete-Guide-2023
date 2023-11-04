export default function TabButton({children, onSelect}) {
    console.log('TabButton');
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}