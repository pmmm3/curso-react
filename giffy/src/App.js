import React, {useEffect,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';



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
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}
