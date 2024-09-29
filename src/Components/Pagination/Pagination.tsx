import React from "react";

import "./pagination.css";

type PaginationProps = {
    numPages: number;
    currentPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
}
const NUM_VISIBLE_PAGES = 3;
export const Pagination = ({currentPage, numPages, setPage, setIsSearching}: PaginationProps) => {
    const visiblePages =  Array.from({ length: (currentPage + NUM_VISIBLE_PAGES - currentPage)}, (_, i) => currentPage + i);

    const handleClick = (page: number) => {
        setIsSearching(true);
        setPage(page);
    }

    return (
        <div className="pagination">
            { currentPage > 1 ?
                (<>
                    <p onClick={() => handleClick(1)}>1</p>
                    ...
                </>): null
            }
            {visiblePages.map(x => <p className={currentPage === x ? "active" : undefined} key={x} onClick={() => handleClick(x)}>{x}</p>)}
            ...
            <p onClick={() => handleClick(numPages)}>{numPages}</p>
        </div>
    )
};
