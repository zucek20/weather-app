import React from 'react';
import '../css/App.css';
import Form from './Form'
import Result from './Result'
// assets
import sun from '../assets/img/sun.png';

class App extends React.Component {
   state = {
      value: "",
      date: '',
      city: '',
      sky: '',
      temp: '',
      wind: '',
      err: false,
   }

   handleInputChange = (e) => {
      this.setState({
         value: e.target.value
      })
   }

   handleCitySubmit = (e) => {
      e.preventDefault()
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=50b72a6f09af2bdd7379d9f6a36916d2&units=metric
      `;

      fetch(API)
      .then(response => {
         if (response.ok) {
            return response
         }
         throw Error('błąd')
      })
      .then(response => response.json())
      .then(data => {
         const time = new Date().toLocaleString()
         this.setState({
            err: false,
            date: time,
            city: data.name,
            sky: data.weather[0].description,
            temp: data.main.temp,
            wind: data.wind.speed,
         })
         // this.renderResult()
      })
      .catch(err => {
         console.log(err)
         this.setState({
            err: true
         })
      })
   }

   renderResult = () => {
      if (this.state.city) {
         if (this.state.value && !this.state.err) {
            return <Result weather={this.state}/>

         } else if (this.state.value && this.state.err) {
            return <p className="error">Cant found city: {this.state.value}</p>
         }
      } else if(this.state.value && this.state.err) {
         return <p className="error">Cant found city: {this.state.value}</p>
      }  else {
         return <p className="nothing">Search city above...</p>
      }
   }

   render() {
      return (
         <>
            <div className="wrap">
               <header>
                  <h1>Just a Weather App</h1>
                  <img src={sun} alt="sun icon"/>
               </header>

               <Form 
               value={this.state.value}
               change={this.handleInputChange}
               submit={this.handleCitySubmit}
               />
               
               {this.renderResult()}
               <p className="footer">&copy; Paweł Izdebski 2021</p>
            </div>
         </>
      )
   }
}

export default App;
