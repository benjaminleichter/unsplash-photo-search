import React, {FormEventHandler, KeyboardEventHandler} from "react";

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
        type="search"
        onInput={handleInputChange}
        defaultValue={defaultValue}
        onKeyDown={handleEnterPress}
    />
);
