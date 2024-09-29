import React, {FormEventHandler, KeyboardEventHandler} from "react";

import "./searchBar.css";

type SearchBarProps = {
    defaultValue: string;
    handleInputChange: FormEventHandler<HTMLInputElement>;
    handleEnterPress: KeyboardEventHandler;
}
export const SearchBar = (
    {
        defaultValue,
        handleInputChange,
        handleEnterPress
    }: SearchBarProps
) => (
    <input
        className="search-bar"
        type="text"
        onInput={handleInputChange}
        defaultValue={defaultValue}
        onKeyDown={handleEnterPress}
    />
);
