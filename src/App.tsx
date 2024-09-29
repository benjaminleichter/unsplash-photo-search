import React, { FormEventHandler, KeyboardEventHandler } from 'react';
import { useUnsplashSearch } from "./Hooks/searchHooks";
import { SearchBar } from "./Components/SearchBar";
import {SearchResultsList} from "./Components/SearchResults/SearchResultsList";

import './App.css';

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

  const userHasSearched = !isSearching && photos !== null;
  const shouldDisplayResults = userHasSearched && photos.length > 0;
  const shouldDisplayEmptyResults = userHasSearched && photos?.length === 0;

  return (
    <div className="App">
      <SearchBar
        defaultValue={searchTerm}
        handleInputChange={handleInputChange}
        handleEnterPress={handleEnterPress}
      />
      { shouldDisplayResults ? <SearchResultsList results={photos} /> : null }
      { shouldDisplayEmptyResults ? "no results :(" : null}
    </div>
  );
}

export default App;
