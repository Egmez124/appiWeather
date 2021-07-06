const WeatherBox = ({img, location, condition, wind, clouds, pressure, temp, changeTemp}) => {
    return (
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">Weathe APP</h3>
                        <img src={img} alt={location}></img>
                        <p class="card-text">{location}</p>
                        <p class="card-text">Temperatura: {temp}</p>
                        <p class="card-text"><small class="text-muted">{condition}</small></p>
                        <p class="card-text"><small class="text-muted">Wind speed kph: {wind} </small></p>
                        <p class="card-text"><small class="text-muted">Clouds: {clouds}%</small></p>
                        <p class="card-text"><small class="text-muted">Pressure (mb): {pressure} </small></p>
                        <button type="button" class="btn btn-warning" onClick={changeTemp}>Cambiar a grados Fahrenheit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherBox
