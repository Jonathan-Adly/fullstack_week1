import { useEffect, useState } from "react"
import axios from 'axios'
import Filter from "./components/Filter"
import Country from "./components/Country"
import FullCountry from "./components/FullCountry"

function App() {

  const [countries, setCountries ] = useState([])
  const [ filterInput, setNewFilter] = useState('')

const hook = () => axios
.get("https://restcountries.eu/rest/v2/all")
.then (response => {
  setCountries(response.data)
})


useEffect(hook, [])

const handleFilterChange = event => {
  setNewFilter(event.target.value)
}

let CountriesToShow = countries.filter(country => country.name.toLowerCase().includes(filterInput.toLowerCase()))

  return (
    <div>
    <Filter filterInput={filterInput} handleFilterChange={handleFilterChange}/> 
    {CountriesToShow.length > 10 ? <p> Too many countries, add another filter </p> 
    : CountriesToShow.length === 1 ? <FullCountry country={CountriesToShow[0]} />
    : CountriesToShow.map (country =>
    <Country key= {country.name} country={country}/>) }
    </div>
  )
}
export default App;
