import {useState} from 'react'
import FullCountry from "./FullCountry"

function Country(props) {
    const [ view, setView ] = useState(false)
  
    const handleClick = () => { setView(true)}
  
      return (
        <div>
        { view ?  
        <FullCountry country={props.country} /> :
        <p> {props.country.name} - <button onClick={handleClick}> show </button></p>
      }
        </div>
      )
    }

export default Country