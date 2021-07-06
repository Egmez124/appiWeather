import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/weatherbox';

function App() {
  const [img, setImg] = useState(0)
  const [location, setLocation] = useState('')
  const [condition, setCondition] = useState('')
  const [wind, setWind] = useState('')
  const [clouds, setClouds] = useState('')
  const [pressure, setPressure] = useState('')
  const [temp, setTemp] = useState('')
  const [tempF, setTempF] = useState('')
  useEffect(()=>{
    const getData = async()=>{
      const resIp = await fetch(`https://api.ipify.org?format=json`).then(res => res.json())
      const ip = resIp.ip
      const url = `http://api.weatherapi.com/v1/current.json?key=640ff40b447a40a38ae163312210507&q=${ip}`
      const response = await fetch(url).then(res => res.json())
      const data = response.current
      setImg(data.condition.icon)
      setLocation(response.location.tz_id)
      setCondition(data.condition.text)
      setWind(data.wind_kph)
      setClouds(data.cloud)
      setPressure(data.pressure_mb)
      setTemp(data.temp_c)
      setTempF(data.temp_f)
    }
    getData()
  }, [])

  const changeTemp = () => {
    if (temp) {
      setTemp(tempF)
    }
  }
  return (
    <div className="App">
       <WeatherBox img={img} location={location} condition={condition} wind={wind} clouds={clouds} pressure={pressure} temp={temp} changeTemp={changeTemp}/>
    </div>
  );
}

export default App;
