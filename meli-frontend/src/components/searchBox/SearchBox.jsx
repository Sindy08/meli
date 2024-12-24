import React from 'react';
import search from "../../assets/images/search.webp";
import WelcomeMessage from '../welcomeMessage/WelcomeMessage';
import useSearchBox from './useSearchBox';

const SearchBox = () => {
  const { query, setQuery, handleSubmit, inputRef } = useSearchBox();

  return (
    <form onSubmit={handleSubmit} className="header__search">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos, marcas y más..."
        className="header__search-input"
        aria-label="Buscar productos"
      />
      <button 
        type="submit"
        className="header__search-button"
        aria-label="Buscar"
      >
        <img src={search} alt="Search" title="Search" className="header__search-img" loading="lazy" />
      </button>
      <WelcomeMessage />
    </form>
  );
};

export default SearchBox;