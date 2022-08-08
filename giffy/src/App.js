import React from 'react';
import { Route } from 'wouter';
import './App.css';

import ListOfGifs from './components/ListOfGifs';



export default function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App de Gifs</h1>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}
