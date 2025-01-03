import { useState } from "react";

function SearchableList({items}) {

  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
        <input type="search" placeholder='Search' onChange={handleChange} />
        <ul>
            {searchResults.map((item, index) => (
                <li key={index}>
                    {item.toString()}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default SearchableList