import React, { FormEventHandler, KeyboardEventHandler } from 'react';
import { useUnsplashSearch } from "./Hooks/searchHooks";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import {SearchResultsList} from "./Components/SearchResults/SearchResultsList";

import './App.css';
import {Pagination} from "./Components/Pagination/Pagination";

function App() {
  const {
    photos,
    setIsSearching,
    setSearchTerm,
    isSearching,
    searchTerm,
    numPages,
    setPage,
    page
  } = useUnsplashSearch();

  const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
    const {value} = e.currentTarget;

    setSearchTerm(value);
  }

  const handleEnterPress: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      setIsSearching(true);
    }
  }

  const userHasSearched = !isSearching && photos !== null;
  const shouldDisplayResults = userHasSearched && photos.length > 0 ;
  const shouldDisplayEmptyResults = userHasSearched && photos?.length === 0;

  return (
    <div className="app">
      <div className="app-inner">
        <h1>Search for photos!</h1>
        <SearchBar
            defaultValue={searchTerm}
            handleInputChange={handleInputChange}
            handleEnterPress={handleEnterPress}
        />
        { !userHasSearched && !isSearching? <p className="status-indicator">👀</p> : null }
        { isSearching ? <p className="status-indicator">🕵🏻‍♂️</p> : null }
        { shouldDisplayEmptyResults ? <p className="status-indicator">No results <br/> 🙅</p> : null}
        { shouldDisplayResults ? (
          <>
            <SearchResultsList results={photos} />
            <Pagination numPages={numPages} currentPage={page} setPage={setPage} setIsSearching={setIsSearching} />
          </>
        ) : null }
      </div>
    </div>
  );
}

export default App;
