import Language from "./Language"




function FullCountry(props){
  return (
      <div> 
      <h2> {props.country.name}</h2>
      <p> Capital: {props.country.capital}</p>
      <p> Population: {props.country.population}</p>
      <h3> languages </h3>
      <ul>
      {props.country['languages'].map (language => 
        <Language key={language.name} language={language} />
        )}
      </ul>
      <img src= {props.country.flag} alt="country flag" width="300px" height= "200px"/>

      
      </div>
    )
  }
  
  export default FullCountry