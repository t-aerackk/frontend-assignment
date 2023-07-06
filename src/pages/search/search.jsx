import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Make an API call to fetch the search results
      const response = await fetch(`https://fakestoreapi.com/products?title=${searchQuery}`);
      const data = await response.json();

      // Update the state with the fetched search results
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">
          Search<BsSearch />
        </button>
      </form>
      <ul>
      
        {searchResults.map(result => (
          <li key={result.id}>
            <img src={result.image} alt={result.title} />
            <h3>{result.title}</h3>
            <p>Price: ${result.price}</p>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Search;
