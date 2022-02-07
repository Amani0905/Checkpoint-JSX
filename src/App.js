import './App.css';
import React from 'react';
import lookup from './lookup.png';
import night from './house.mp4';
import './style.css';

function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Netflix Production</h1>
      <div className="form">
        <img className="image" src="/tinder.png" />
        <img className="image" src={lookup} />
      </div>
    </div>
    <video class="myvideo" width="320" height="240" controls>
      <source src={night} type="video/mp4" />
    </video>
  </div>
);
}

export default App;
