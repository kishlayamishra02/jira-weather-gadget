import Resolver from '@forge/resolver';
import fetch from 'node-fetch';

const resolver = new Resolver();

// ✅ use the ACTIVE key
const API_KEY = '3f9931b6c4d586b39a3be40254b8c220';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// The method name MUST match what the front‑end invokes
resolver.define('getWeather', async ({ payload }) => {
  // payload carries city & country from the front‑end
  const city  = payload.city?.trim()     || 'Delhi';
  const country = payload.country?.trim() || 'IN';
  const query = `${city},${country}`;

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`;
  console.log('⛅ Fetching:', url);

  try {
    const res  = await fetch(url, { headers: { 'Accept': 'application/json' }});
    const data = await res.json();

    if (!res.ok) {                       // Bad status from OpenWeather
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
