import React, {ChangeEventHandler, FormEventHandler, KeyboardEventHandler} from 'react';
import { useUnsplashSearch } from "./Hooks/searchHooks";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import {SearchResultsList} from "./Components/SearchResults/SearchResultsList";

import './App.css';
import {Pagination} from "./Components/Pagination/Pagination";
import ColorFilter from "./Components/ColorFilter/ColorFilter";
import {ColorId, SearchOrderBy} from "unsplash-js";
import OrderBy from "./Components/OrderBy/OrderBy";

function App() {
  const {
    photos,
    setIsSearching,
    setSearchTerm,
    isSearching,
    searchTerm,
    numPages,
    setPage,
    page,
    color,
    setColor,
    orderBy,
    setOrderBy
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

  const handleColorChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const {value} = e.currentTarget;
    let newColor: ColorId | undefined;
    if (value !== "") {
      newColor = value as ColorId;
    }
    setColor(newColor);
    setIsSearching(true);
  }

  const handleOrderChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setOrderBy(e.currentTarget.value as SearchOrderBy);
    setIsSearching(true);
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
        <ColorFilter activeColor={color} handleChange={handleColorChange} />
        <OrderBy currentOrder={orderBy} handleChange={handleOrderChange} />

        { !userHasSearched && !isSearching ? <p className="status-indicator">👀</p> : null }
        { isSearching && searchTerm !== "" ? <p className="status-indicator">🕵🏻‍♂️</p> : null }
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
