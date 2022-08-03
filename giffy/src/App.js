import React, {useEffect,useState} from 'react';
import './App.css';
const GIFS = [
  'https://media0.giphy.com/media/fuJPZBIIqzbt1kAYVc/giphy.gif?cid=ecf05e47tz75pcqwyr5pd1e4xo3uk3wogpsrolok3mx8mtvd&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/ndIq5ohg1pyfqyVOII/giphy.gif?cid=ecf05e47jvp9gb7ptncvlpc855kead4gjs1bliuww7tzsnl6&rid=giphy.gif&ct=g',
];
function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect(
    function() {
    alert('useEffect');
    },[]
  )

  return (
    <div className='App'>
      <section className='App-content'>
        {
          gifs.map(gif => <img src={gif} alt='gif' />)
        }
      </section>
    </div>
  );
}

export default App;
