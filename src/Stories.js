import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, removepost, isLoading } = useGlobalContext();

  if(isLoading) {
      return (
          <>
          <h2>Loading....</h2>
          </>
      );
  };

  return (
    <>
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
      </>
  );
};

export default Stories;
