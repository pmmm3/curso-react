import React from "react";
export default function Gif({ title, id ,url }) {
  return (
    <div>
            <h5>{title}</h5>
          <small>{id}</small>
            <br></br>
        <img src={url} alt={title} />
    </div>
  );
}