import React, {FormEvent, KeyboardEventHandler} from 'react';
import './App.css';
import {useUnsplashSearch} from "./Hooks/searchHooks";

function App() {
  const { photos, setIsSearching, setSearchTerm, isSearching, searchTerm } = useUnsplashSearch();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;

    setSearchTerm(value);
  }

  const handleEnterPress: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      setIsSearching(true);
    }
  }

  return (
    <div className="App">
      <input type="search" onInput={handleInputChange} defaultValue={searchTerm} onKeyDown={handleEnterPress} />
      { photos && photos.length > 0 ?
          (<div>{photos.map(p => p.urls ? <img src={p.urls.regular} alt={p.alt_description || ""} /> : null)}</div>)
        : null
      }
      { !isSearching && photos?.length === 0 ? "no results :(" : null}
    </div>
  );
}

export default App;
