import React from 'react';
// images
import skyImg from '../assets/img/sky.png'
import tempImg from '../assets/img/temp.png'
import windImg from '../assets/img/wind.png'

const Result = props => {
   // destructuring
   const { city, date, wind, temp, sky } = props.weather



   return ( 
      <React.Fragment>
         <div className="result">
            <h3>Results for: <span className="green">{city}</span></h3>
            <p className="date">updated: {date}</p>
            <section>
               <div className="sky">
                  <img src={skyImg} alt="sky icon" />
                  <div>
                     <h2>Conditions</h2>
                     <p>{sky}</p>
                  </div>
               </div>
               <div className="temp">
                  <img src={tempImg} alt="temp icon" />
                  <div>
                     <h2>Temp</h2>
                     <p>{temp} °C</p>
                  </div>
               </div>
               <div className="wind">
                  <img src={windImg} alt="wind icon" />
                  <div>
                     <h2>Wind</h2>
                     <p>{wind} m/s</p>
                  </div>
               </div>
            </section>
         </div>
      </React.Fragment>
   );
}
 
export default Result;