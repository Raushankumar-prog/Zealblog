import React from "react";

import './pagination.css';


const Pagination = ({pagenumber,previouspage,nextpage}) => {
  
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
          className="paginationbutton"
          onClick={previouspage}
        >
          Pre
        </button>
        <button
          className="paginationbutton"
        >
          {pagenumber}
        </button>
        <button
          className="paginationbutton"
          onClick={nextpage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
