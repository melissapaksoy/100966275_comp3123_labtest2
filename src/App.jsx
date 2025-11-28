import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);

  // Fetch Weather API
  const searchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      alert(data.message || "City not found");
      setWeather(null);
      return;
    }

    setWeather(data);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Pink Diva Weather App</h1>

      {/* SEARCH BAR */}
      <div className="searchBox">
        <input
          className="search-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Toronto"
        />
        <button className="search-btn" onClick={searchWeather}>
          Search
        </button>
      </div>

      {/* WEATHER CARD */}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
