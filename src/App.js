import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unsplash from './api/unsplash';

function App() {
  const [pins, setNewPins] = useState([]);
  
  const getImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 30,
      }
    });
  };
  

  const onSearchSubmit = (term) => {
    console.log("on search submit", term)
    getImages(term).then ((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort (function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })
  }

const getNewPins = () => {
  let promises = [];
  let pinData = [];

  let pins = ['puppies', 'Ireland', 'castles', 'games']

  pins.forEach((pinTerm) => {
    promises.push(
      getImages(pinTerm).then((res) => {
        let results = res.data.results;

        pinData = pinData.concat(results);

        pinData.sort(function (a, b) {
          return 0.5 - Math.random();
        });
      })
    );
  });

  Promise.all(promises).then(() => {
    setNewPins(pinData);
  });
};


useEffect(() => {
  getNewPins();
}, [])


  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard pins={pins}/>
    </div>
  );
}

export default App;
