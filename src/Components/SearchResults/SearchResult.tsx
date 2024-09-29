import React from "react";
import {Basic} from "unsplash-js/dist/methods/photos/types";

import "./searchResult.css"

type SearchResultProps = {
    photo: Basic
}
export const SearchResult = ({photo}: SearchResultProps) => (
    <div className="search-result" style={{backgroundImage: `url(${photo.urls.regular})`}} />
);
