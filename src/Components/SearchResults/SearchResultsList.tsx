import React from "react";
import {Basic} from "unsplash-js/dist/methods/photos/types";

import "./searchResultsList.css";
import {SearchResult} from "./SearchResult";

type SearchResultsListProps = {
    results: Array<Basic>;
}
export const SearchResultsList = ({ results }: SearchResultsListProps) => {
    const resultElements = results.map(
        photo => <SearchResult key={photo.id} photo={photo} />
    );

    return (
        <div className="search-results-list">
            {resultElements}
        </div>
    )
};
