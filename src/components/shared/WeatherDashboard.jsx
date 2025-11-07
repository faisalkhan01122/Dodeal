import React, { useEffect, useState } from "react";
import { Thermometer, Droplets, Wind, Gauge } from "lucide-react";

import sunnyIcon from "../../assets/weather_icons/Group (2).svg";
import cloudyIcon from "../../assets/weather_icons/Group.svg";
import stormIcon from "../../assets/weather_icons/Group (1).png";
import partlySunnyIcon from "../../assets/weather_icons/c (1).svg";
import rainIcon from "../../assets/weather_icons/Group.png";

const WeatherDashboard = () => {
  const [city, setCity] = useState("Dubai");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_KEY = "25yr0ykh83yhx785kd13rz0aa11bom27cv8g3ngo";

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const placeRes = await fetch(
        `https://www.meteosource.com/api/v1/free/find_places?text=${encodeURIComponent(
          cityName
        )}&key=${API_KEY}`
      );
      const placeData = await placeRes.json();
      if (!placeData || !placeData[0]) throw new Error("City not found");

      const placeId = placeData[0].place_id;

      const response = await fetch(
        `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=all&timezone=auto&language=en&units=metric&key=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError("⚠️ Unable to load live data. Showing demo forecast.");
      setWeatherData({
        current: {
          summary: "Sunny",
          temperature: 33,
          precipitation: { total: 0 },
          wind: { speed: 3.5 },
          icon: 2,
        },
        hourly: {
          data: [
            { date: "2025-11-07T06:00:00", temperature: 26, icon: 6 },
            { date: "2025-11-07T09:00:00", temperature: 28, icon: 4 },
            { date: "2025-11-07T12:00:00", temperature: 33, icon: 2 },
            { date: "2025-11-07T15:00:00", temperature: 36, icon: 2 },
            { date: "2025-11-07T18:00:00", temperature: 30, icon: 27 },
            { date: "2025-11-07T21:00:00", temperature: 27, icon: 30 },
          ],
        },
        daily: {
          data: [
            { day: "Mon", icon: 2, temperature_max: 36, temperature_min: 22 },
            { day: "Tue", icon: 4, temperature_max: 34, temperature_min: 23 },
            { day: "Wed", icon: 6, temperature_max: 33, temperature_min: 24 },
            { day: "Thu", icon: 11, temperature_max: 32, temperature_min: 22 },
            { day: "Fri", icon: 14, temperature_max: 30, temperature_min: 21 },
            { day: "Sat", icon: 6, temperature_max: 31, temperature_min: 20 },
            { day: "Sun", icon: 2, temperature_max: 35, temperature_min: 22 },
          ],
        },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const resolveIconName = (iconIdentifier) => {
    if (typeof iconIdentifier === "number") {
      const n = iconIdentifier;
      if ([2, 26, 27].includes(n)) return "sunny";
      if ([3, 4, 28].includes(n)) return "partly_sunny";
      if ([5, 6, 7, 29, 30].includes(n)) return "cloudy";
      if ([10, 11, 12, 13, 32].includes(n)) return "rain";
      if ([14, 15, 33].includes(n)) return "storm";
      return "sunny";
    }

    const s = (iconIdentifier || "").toString().toLowerCase();
    if (s.includes("sun") || s.includes("clear")) return "sunny";
    if (s.includes("part") || s.includes("few") || s.includes("mix"))
      return "partly_sunny";
    if (s.includes("cloud")) return "cloudy";
    if (s.includes("rain") || s.includes("drizzle")) return "rain";
    if (s.includes("storm") || s.includes("thunder")) return "storm";
    return "sunny";
  };

  const getIcon = (iconIdentifier) => {
    const name = resolveIconName(iconIdentifier);
    switch (name) {
      case "sunny":
        return <img src={sunnyIcon} alt="Sunny" className="w-8 h-8" />;
      case "cloudy":
        return <img src={cloudyIcon} alt="Cloudy" className="w-8 h-8" />;
      case "partly_sunny":
        return (
          <img src={partlySunnyIcon} alt="Partly Sunny" className="w-8 h-8" />
        );
      case "rain":
        return <img src={rainIcon} alt="Rainy" className="w-8 h-8" />;
      case "storm":
        return <img src={stormIcon} alt="Storm" className="w-8 h-8" />;
      default:
        return <img src={sunnyIcon} alt="Weather" className="w-8 h-8" />;
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading Weather...
      </div>
    );

  const current = weatherData?.current || {};
  const hourly = (weatherData?.hourly?.data || []).slice(0, 6);
  const weekly = weatherData?.daily?.data || [];

  const readTempMax = (d) => d?.temperature_max ?? d?.temp?.max ?? null;
  const readTempMin = (d) => d?.temperature_min ?? d?.temp?.min ?? null;
  const getDayName = (d, idx) => {
    try {
      if (d?.dt) {
        const date = new Date(d.dt * 1000);
        return date.toLocaleDateString("en-US", { weekday: "short" });
      } else {
        const today = new Date();
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + idx);
        return nextDay.toLocaleDateString("en-US", { weekday: "short" });
      }
    } catch {
      return "--";
    }
  };

  return (
    <div className="min-h-screen bg-transparent bg-cover bg-center text-white flex justify-center py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:max-w-[85%] mx-auto px-4">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-2 backdrop-blur-md shadow-lg">
            <input
              type="text"
              placeholder="Search for cities..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>

          {error && <p className="text-yellow-400 text-sm">{error}</p>}

          <div className="bg-transparent rounded-xl p-6 flex justify-between items-start relative">
            <div>
              <h2 className="text-2xl font-semibold tracking-wide">
                {city.toUpperCase()}
              </h2>
              <p className="text-sm text-gray-300 mt-1">
                Chance Of Rain : {current?.precipitation?.total ?? 0}%
              </p>
              <p className="text-7xl font-bold mt-4 drop-shadow-md">
                {current?.temperature ?? "--"}°
              </p>
            </div>
            <div className="absolute right-8 top-8">
              {getIcon(current?.icon ?? current?.summary)}
            </div>
          </div>

          <div className="rounded-xl p-4 shadow-lg border border-white/10">
            <h3 className="text-[rgba(203,190,187,1)] text-sm md:text-[24px] font-bold mb-3 tracking-wide">
              TODAY FORECAST
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
              {hourly.map((item, index) => {
                const dateVal = item?.date || item?.time;
                const dt = new Date(dateVal);
                const timeStr = !isNaN(dt.getTime())
                  ? dt.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      hour12: true,
                    })
                  : "--";
                return (
                  <div
                    key={index}
                    className="bg-transparent rounded-lg py-4 flex flex-col items-center gap-2"
                  >
                    <p className="text-gray-400 text-xs">{timeStr}</p>
                    {getIcon(item.icon)}
                    <p className="text-lg font-semibold">
                      {Math.round(item.temperature ?? 0)}°
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl p-4 relative shadow-lg border border-white/10">
            <h3 className="text-[rgba(203,190,187,1)] text-sm md:text-[24px] font-bold mb-3 tracking-wide">
              AIR CONDITIONS
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Thermometer className="text-green-400" />
                <div>
                  <p className="text-gray-400 text-sm">Real Feel</p>
                  <p className="text-xl font-semibold">
                    {current?.temperature ?? "--"}°
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="text-green-400" />
                <div>
                  <p className="text-gray-400 text-sm">Wind</p>
                  <p className="text-xl font-semibold">
                    {current?.wind?.speed ?? "--"} Km/H
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="text-green-400" />
                <div>
                  <p className="text-gray-400 text-sm">Chance To Rain</p>
                  <p className="text-xl font-semibold">
                    {current?.precipitation?.total ?? 0}%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="text-green-400" />
                <div>
                  <p className="text-gray-400 text-sm">UV Index</p>
                  <p className="text-xl font-semibold">3</p>
                </div>
              </div>
            </div>
            <button className="absolute top-4 right-4 hover:bg-green-600/90 text-white font-bold text-xs md:text-[20px] px-6 py-1 rounded-full bg-green-600 transition">
              See More
            </button>
          </div>
        </div>

        <div className="rounded-xl p-4 shadow-lg border border-white/10">
          <h3 className="text-[rgba(203,190,187,1)] text-sm md:text-[24px] font-bold mb-3 tracking-wide">
            7-DAYS FORECAST
          </h3>
          <div className="flex flex-col gap-2">
            {weekly.map((day, index) => {
              const tMax = readTempMax(day);
              const tMin = readTempMin(day);
              const dayName = getDayName(day, index);

              return (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0 hover:bg-[#0f172a]/50 px-2 rounded-lg transition"
                >
                  <span className="text-gray-300 w-16 text-right font-medium">
                    {dayName}
                  </span>
                  <div className="flex items-center gap-2 flex-grow justify-center">
                    {getIcon(day.icon)}
                    <span className="text-gray-200 text-sm capitalize hidden sm:inline">
                      {String(day.weather ?? day.description ?? "")}
                    </span>
                  </div>
                  {/* <span className="text-gray-100 font-semibold text-sm">
                    {tMax !== null ? Math.round(tMax) : "--"}/
                    {tMin !== null ? Math.round(tMin) : "--"}
                  </span> */}
                  <span className="text-gray-100 font-semibold text-sm">
                    {36}/{22}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
