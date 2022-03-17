import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Paginate = () => {
  const [offset, setOffset] = useState(0);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div>
      <p>qwerty</p>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={3}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default Paginate;
