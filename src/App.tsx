import React, { FormEventHandler, KeyboardEventHandler } from 'react';
import './App.css';
import { useUnsplashSearch } from "./Hooks/searchHooks";
import { SearchBar } from "./Components/SearchBar";

function App() {
  const { photos, setIsSearching, setSearchTerm, isSearching, searchTerm } = useUnsplashSearch();

  const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
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
      <SearchBar
        defaultValue={searchTerm}
        handleInputChange={handleInputChange}
        handleEnterPress={handleEnterPress}
      />
      { photos && photos.length > 0 ?
          (<div>{photos.map(p => p.urls ? <img src={p.urls.regular} alt={p.alt_description || ""} /> : null)}</div>)
        : null
      }
      { !isSearching && photos?.length === 0 ? "no results :(" : null}
    </div>
  );
}

export default App;
