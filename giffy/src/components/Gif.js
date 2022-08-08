import React from "react";
import './Gif.css'
export default function Gif({ title, id ,url }) {
  return (
    <a href={`#${id}`} className="Gif">
            <h5>{title}</h5>
          <small>{id}</small>
            <br></br>
        <img src={url} alt={title} />
    </a>
  );
}