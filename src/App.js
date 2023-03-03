import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { BASE_URL } from './utils/api';
import options from './utils/option';

function App() {
  // fetch(`${BASE_URL}search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`, options)
  // .then(res => res.json())
  // .then(data => console.log(data))
  return (
    <div className="app">
      <Layout />
    </div>
  );
}

export default App;
