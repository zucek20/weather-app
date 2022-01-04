import React from 'react';

const Form = props => {
   return ( 
      <form
      onSubmit={props.submit}
      >
         <label htmlFor="input">Enter city name:</label>
         <br />
         <input 
            id="input"
            type="text" 
            placeholder="ex. London"
            value={props.value} 
            onChange={props.change}/>
         <button>Search</button>
      </form>   
   );
}
 
export default Form;