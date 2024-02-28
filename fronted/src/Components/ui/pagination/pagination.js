import React from "react";
import { useState } from "react";
import './pagination.css';

const Pagination = () => {
  const [pagenumber, setpagenumber] = useState(1);

  function previouspage() {
    setpagenumber((prevPage) => (prevPage !== 1 ? prevPage - 1 : prevPage));
  }

  function nextpagenumber() {
    setpagenumber((prevPage) => prevPage + 1);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
          className="paginationbutton"
          onClick={previouspage}
        >
          pre
        </button>
        <button
          className="paginationbutton"
        >
          {pagenumber}
        </button>
        <button
          className="paginationbutton"
          onClick={nextpagenumber}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
