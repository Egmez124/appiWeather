import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/weatherbox';
import axios from 'axios';

function App() {
  const [current, setCurrent] = useState([]);
  const [location, setLocation] = useState([]);
  const [condition, setCondition] = useState([]);

  useEffect(()=>{
      const getData = async()=>{
        const resIp = await fetch(`https://api.ipify.org?format=json`).then(res=>res.json());
        const ip = resIp.ip
        const url = `https://api.weatherapi.com/v1/current.json?key=640ff40b447a40a38ae163312210507&q=${ip}`
        const response = await axios.get(url);
        console.log(response.data);
        setCurrent(response.data.current);
        setLocation(response.data.location);
        setCondition(response.data.current.condition);
      }
      getData();
    
  },[])
  
  const handleSearch = async (country)=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=640ff40b447a40a38ae163312210507&q=${country}&aqi=no`;
    const response = await axios.get(url);
    console.log(response);
    setCurrent(response.data.current);
    setLocation(response.data.location);
    setCondition(response.data.current.condition);
  }
  
  return (
    <div className="App">
        <WeatherBox 
        current={current}
        location={location}
        condition={condition}
        handleSearch={handleSearch}
        />
    </div>
  );
}

export default App;
