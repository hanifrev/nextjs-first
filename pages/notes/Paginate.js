import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import datatest from "./test.json";

const PER_PAGE = 6;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  // const [perPage] = useState(10);
  // const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  // use this if you fetch data from API
  // const fetchData = () => {
  //   fetch(`https://jsonplaceholder.typicode.com/photos`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // };

  // use this if you use local json
  const fetchData = () => {
    setData(datatest);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((x, index) => (
      <div key={index}>
        <p>{x.id}</p>
        <h3>{x.title}</h3>
      </div>
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  // const getData = async () => {
  //   const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
  //   const data = res.data;
  //   // const data = datatest;
  //   const slice = data.slice(offset, offset + perPage);
  //   const postData = slice.map((pd) => (
  //     <div key={pd.id}>
  //       <p>{pd.title}</p>
  //       {/* <img src={pd.thumbnailUrl} alt="" /> */}
  //     </div>
  //   ));
  //   setData(postData);
  //   setPageCount(Math.ceil(data.length / perPage));
  // };
  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + 1);
  // };

  // useEffect(() => {
  //   getData();
  // }, [offset]);

  return (
    <div className="App">
      {/* {data} */}
      {currentPageData}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        previousClassName={"prev"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
