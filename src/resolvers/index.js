import Resolver from '@forge/resolver';
import fetch from 'node-fetch';

const resolver = new Resolver();


const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


resolver.define('getWeather', async ({ payload }) => {
  
  const city  = payload.city?.trim()     || 'Delhi';
  const country = payload.country?.trim() || 'IN';
  const query = `${city},${country}`;

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`;
  console.log('⛅ Fetching:', url);

  try {
    const res  = await fetch(url, { headers: { 'Accept': 'application/json' }});
    const data = await res.json();

    if (!res.ok) {                       
      return `Error: ${data.message}`;
    }

    const temp    = data.main.temp;
    const weather = data.weather[0].description;
    return `Weather in ${data.name}: ${temp} °C, ${weather}`;
  } catch (err) {
    return `Failed to fetch weather: ${err.message}`;
  }
});

export const handler = resolver.getDefinitions();
