import { useState } from "react"

const WeatherBox = ({current, location, condition, handleSearch}) => {
    const [temp, setTemp] = useState('');
    const [value, setValue] = useState('');

    const changeTemp = ()=>{
        if(temp){
            setTemp(false);
        }else{
            setTemp(true)
        }
    }
    return (
        <div className="card-body">
            <div className="header">
                <h1>Weather APP</h1>
                <input className="input" placeholder="introduce un pais o ciudad..." onChange={(e)=>{setValue(e.target.value)}} value={value}/>
                <button className="search-btn" onClick={()=>{handleSearch(value)}}>Search</button>
            </div>
            <div className="card-temp">
                <img src={condition.icon} alt={'condition.icon'} className="icon"></img>
                <p>{location.country}</p>
                <p>{location.region}</p>
                <p>{location.name}</p>
                {temp?<p>{current.temp_c}ºC</p>:<p>{current.temp_f}ºF</p>}
                <button className="boton" onClick={changeTemp}>{temp?'Cambiar a farenheit':'Cambiar a centigrados'}</button>
            </div>
            <div className="card-data">
                <h2 className="conditions-title">Conditions</h2>
                <p>{condition.text}</p>
                <p>Wind speed kph: {current.wind_mph}</p>
                <p>Clouds: {current.cloud}%</p>
                <p>Precipitation: {current.precip_mm} mm%</p>
                <p>Pressure (mb): {current.pressure_in}</p>
            </div>
            {/* <div></div> */}
        </div>
    )
}

export default WeatherBox
