import { useRef, useState } from "react";

function SearchableList({items, children, itemKeyFn}) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  function handleChange(event) {

    if (lastChange.current) {
        clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
        lastChange.current = null;
        setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
        <input type="search" placeholder='Search' onChange={handleChange} />
        <ul>
            {searchResults.map((item) => (
                <li key={itemKeyFn(item)}>
                    {children(item)}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default SearchableList