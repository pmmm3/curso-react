import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';
export default function ListOfGifs({ params }) {
  const { keyword } = params;
  console.log(keyword);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
      getGifs({keyword}).then(setGifs);
    }, [keyword]);

  return <div>
    {
      gifs.map(({ id, title, url }) =>
        <Gif
          key={id}
          title={title}
          id={id}
          url={url}
        />
      )
    }
    </div>
}
