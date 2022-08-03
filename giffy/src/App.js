import React, {useEffect,useState} from 'react';
import './App.css';
import Gif from './components/Gif';
import getGifs from './services/getGifs';



export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs('flower').then(setGifs);
    },[]
  )

  return (
    <div className='App'>
      <section className='App-content'>
        {
          gifs.map(({id,title,url}) => <Gif key={id} title={title} id={id} url={url}/>
          )
        }
      </section>
    </div>
  );
}
