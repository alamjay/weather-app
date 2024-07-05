import {FC, useEffect} from "react";
import WeatherCard from "./Forecast";

type props = {
    weather: any;
    display: any;
}

const DisplayForecast: FC<props> = ({weather, display}: props) => {

  useEffect(() => {
    
  }, [weather])
  

    return (
        <div className="weather-forecast p-5" style={{display: display ? 'block' : 'none'}}>

        <div className="container" >
          <div className="row">
{/* 
            {display &&

              // Loop through 5 day forecast
              weather.map((forecast: any, index: any) => {
                return <WeatherCard forecast={forecast} /> 
              })
            }  */}
          </div>
        </div>
      </div>
    );

}

export default DisplayForecast;