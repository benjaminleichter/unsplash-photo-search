import React, {ChangeEventHandler} from "react";
import {ColorId} from "unsplash-js";

const VALID_COLORS: Array<ColorId> = [
    'white',
    'black',
    'yellow',
    'orange',
    'red',
    'purple',
    'magenta',
    'green',
    'teal',
    'blue',
    'black_and_white'
];

type ColorFilterProps = {
    activeColor?: ColorId;
    handleChange: ChangeEventHandler<HTMLSelectElement>
}
const ColorFilter = ({activeColor, handleChange}: ColorFilterProps) => {
    return (
        <select defaultValue={activeColor || ""} onChange={handleChange}>
            <option value="">Select color</option>
            {VALID_COLORS.map(color => <option key={color} value={color}>{ color}</option>)}
        </select>
    )
}

export default ColorFilter;
