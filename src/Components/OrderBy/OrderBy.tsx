import React, {ChangeEventHandler} from "react";
import { SearchOrderBy} from "unsplash-js";

const VALID_ORDERS: Array<SearchOrderBy> = [
   "latest",
   "editorial",
   "relevant"
];

type OrderByProps = {
    currentOrder: SearchOrderBy;
    handleChange: ChangeEventHandler<HTMLSelectElement>
}
const OrderBy = ({currentOrder, handleChange}: OrderByProps) => {
    return (
        <select defaultValue={currentOrder} onChange={handleChange}>
            {VALID_ORDERS.map(order => <option key={order} value={order}>{order}</option>)}
        </select>
    )
}

export default OrderBy;
