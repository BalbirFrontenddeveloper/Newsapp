import React, { useContext } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import { ApiContext } from "./Context";

const App = () => {

    const data = useContext(ApiContext);

  return (
    <>
    <h2>{data}</h2>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
