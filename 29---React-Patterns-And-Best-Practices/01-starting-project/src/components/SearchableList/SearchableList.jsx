import { useState } from "react";

function SearchableList({items, children, itemKeyFn}) {

  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  function handleChange(event) {
    setSearchTerm(event.target.value);
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