import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import FourteenDayForecast from './pages/FourteenDay'
import FiveDayForecast from './pages/FiveDay'
import ThreeDayForecast from './pages/ThreeDay'

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="App-header">
          Weather Forecast App
        </h1>
        <Route exact path="/" component={FiveDayForecast} />
        <Route exact path="/three-day" component={ThreeDayForecast} />
        <Route exact path="/fourteen-day" component={FourteenDayForecast} />
      </div>  
    </Router>
  );
}

export default App;

