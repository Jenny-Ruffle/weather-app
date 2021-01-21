import React, {useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import useForecast from "./utils/useForecast";
import Navigation from "./components/Navigation";
import FourteenDayForecastPage from "./pages/FourteenDay";
import FiveDayForecastPage from "./pages/FiveDay";
import ThreeDayForecastPage from "./pages/ThreeDay";

export const ForecastContext = React.createContext(null);
export const useForecastContext = () => useContext(ForecastContext)

function App() {
  const { data, isLoading, isError } = useForecast();
  return (
    <Router>
      <ForecastContext.Provider value={data}>
        <div className="App">
          <h1 className="App-header">Weather Forecast App</h1>
          <Navigation />
          <Route exact path="/" component={FiveDayForecastPage} />
          <Route exact path="/three-day" component={ThreeDayForecastPage} />
          <Route exact path="/fourteen-day" component={FourteenDayForecastPage} />
        </div>
      </ForecastContext.Provider>
    </Router>
  );
}

export default App;
