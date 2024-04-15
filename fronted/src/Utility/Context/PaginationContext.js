import React, { useContext, useState, useEffect } from "react";

const PaginationContext = React.createContext(undefined);

export const PaginationContextProvider = ({ children }) => {
  const [pagenumber, setpagenumber] = useState(() => {
    // Initialize from sessionStorage or default to 1
    return parseInt(sessionStorage.getItem('pagenumber')) || 1;
  });

  useEffect(() => {
    // Update sessionStorage whenever pagenumber changes
    sessionStorage.setItem('pagenumber', pagenumber.toString());
  }, [pagenumber]);

  function previouspage() {
    setpagenumber((prevPage) => (prevPage !== 1 ? prevPage - 1 : prevPage));
  }

  function nextpagenumber() {
    setpagenumber((prevPage) => prevPage + 1);
  }
  
  return (
    <PaginationContext.Provider
      value={{
        pagenumber,
        previouspage,
        nextpagenumber,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  return context;
};
