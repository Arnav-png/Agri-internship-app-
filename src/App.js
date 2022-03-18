import Slider from "./components/Slider/Slider";
import Auth from './components/login/Auth'
import SetUp from './components/setUp/SetUp'
import CropSelection from "./components/CropSelection/CropSelection";
import WeatherPage from "./components/weather/WeatherPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Location from "./components/setUp/Location";
import Index from "./components/app/Index";
import MarketPrices from "./components/MarketViews/MarketPrices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SetUp />} />
        <Route path="/Setup/crop-selection" exact element={<CropSelection />} />
        <Route path="/quickStart" exact element={<Slider />} />
        <Route path="/Auth" exact element={<Auth />} />
        <Route path="/Setup/location" exact element={<Location />} />
        <Route path="/app" exact element={<Index />} />
        <Route path="/weather" exact element={<WeatherPage />} />
        <Route path="/market" exact element={<MarketPrices />} />
      </Routes>
    </Router>
  );
}

export default App;
