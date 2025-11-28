export default function WeatherCard({ data }) {
    if (!data) return null;

    const temp = (data.main.temp - 273.15).toFixed(1);
    const feels = (data.main.feels_like - 273.15).toFixed(1);
    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;

    return (
        <div className="card">
            <h2>{data.name}, {data.sys.country}</h2>

            <img 
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
                className="weather-icon"
            />

            <h1>{temp}°C</h1>
            <p className="desc">{desc}</p>

            <div className="details">
                <p>Feels like: {feels}°C</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Wind: {data.wind.speed} km/h</p>
            </div>
        </div>
    );
}
