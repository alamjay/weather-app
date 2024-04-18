import {FC, useEffect, useState} from "react";

type props = {
    forecast: any;
    index: any;
}

const WeatherCard: FC<props> = ({forecast, index}: props) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day, setDay] = useState<string | null>(null);

    useEffect(() => {

        printDay();

    }, [forecast])
   
    // output Today, Tomorrow and the rest of the days
    const printDay = () => {
        if (index === 0) {
            setDay('Today');
        } else if (index === 1) {
            setDay('Tomorrow');
        } else {
        const getDate = new Date(forecast.applicable_date);
        setDay(days[getDate.getDay()]);

        }
    }

    return (
        <div className="col-md-2 p-3">
                <div className="forecast-day p-3">
                {/* <i className="bi bi-cloud-fill" style={{fontSize: 50}}></i> */}
                <img className="weather-icon" src={`../assets/icons/${forecast.weather_state_abbr}.svg`} />
                <h3>{ day }</h3>
                <p>min: {Math.round(forecast.min_temp)} &deg;C</p>
                <p>max: {Math.round(forecast.max_temp)} &deg;C</p>
                <p>humidity: {Math.round(forecast.humidity)}%</p>
                </div>
            </div>
        
    );
}

export default WeatherCard;