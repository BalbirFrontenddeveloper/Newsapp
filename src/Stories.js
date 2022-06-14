import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, removepost, isLoading } = useGlobalContext();

  if(isLoading) {
      return (
          <>
          <div className="isLoading">
          <h2>Loading....</h2>
          </div>
          </>
      );
  };

  return (
    <>
    <div className="stories-div">
    {hits.map((curElem) => {
      const { author, title, url, objectID, num_comments } = curElem;
      return (
        <div className='card' key={objectID}>
          <h3>{title}</h3>
          <p>By <span>{author}</span> | <span>{num_comments}</span> comments</p>
          <div className='card_btn'>
            <a href={url} target={'_blank'}>Learn more</a>
            <a href='#' onClick={() => {removepost(objectID)}}>Remove</a>
          </div>
        </div>
      )})}
      </div>
      </>
  );
};

export default Stories;
