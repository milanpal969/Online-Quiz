import React, { useState } from 'react';

function WeatherApp() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [wdata, setWData] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    setLoading(true);
    console.log(loading);
    setError(null); 
    const apiKey = 'b7edec386e027bf251199819ccdb853c'
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
      );
      const data = await response.json();
      if (response.ok) {
        setWData(data);
        console.log(data);
      } else {
        setError(data.message || 'Error fetching weather data');
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  function currentDate(){
    const today = new Date();
  return formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  }
  return (
    <div className="container4">
      <div className="header">
        <input
          type="text"
          value={search}
          placeholder="Enter city name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
        {loading===true ? <div>Loading...</div> :<div className='content'>
        <div className='place'>
            {
                wdata.name
            }
            <span>{ wdata.sys?wdata.sys.country? wdata.sys.country : '':''}</span>
        </div>
        <div className='details'>
            <div className='data'>{currentDate}</div>
            <div className='description'> Description : {wdata.weather?wdata.weather[0].description? wdata.weather[0].description : '' :''}</div>
        </div>
        <div className='details2'>

            <div>Temperature : {wdata.main.temp}</div>
            <div>Humidity : {wdata.main.humidity}</div>
            </div>
        </div>}
        </div>

  );
}

export default WeatherApp;
