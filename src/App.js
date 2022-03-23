import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';

import "./styles.css";

const Card = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js', {})
            .then((response) => {
                setData(response.data)
            })
    }, [])

    console.log(data === null ? 'loading' : data)
    return (
        <div className="cards-list">
            <div className="card">
                <div className="card-pict">
                    <img
                        src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b"
                    />
                </div>
                <p>Bohemian Rhapsody (The Original Soundtrack)</p>
                <p>Queen</p>
                <p>Bohemian Rhapsody</p>
                <button>Details</button>
            </div>
        </div>
    )
}


function App() {
  return (
    <div className="App">
      <div className='cards'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
