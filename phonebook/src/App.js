import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Person from "./components/Person"
import Notification from "./components/Notification"
import personServices from "./services/persons"

function App() {
  
  const [ persons, setPersons ] = useState ([])

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ showAll, setShowAll ] = useState (true)
  const [ filterInput, setNewFilter] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ error, setError ] = useState(false)

  const hook = () => {
    personServices.getAll()
    .then (data => {
      setPersons(data)
    })
  }

  useEffect(hook, [])
  
  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumChange = event => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = event => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }  
const namesThatMatch = showAll? persons : persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase()))
    
  const handleFormSubmit = event => {
    event.preventDefault()
    const namesToCompare = persons.map (person => person.name.toLowerCase())
    const personObject = {
      name: newName,
      number: newNum
    }
    
    const found = namesToCompare.indexOf(newName.toLowerCase()) 
    
  found === -1 ? handleCreate(personObject) : handleUpdate(found, newNum)
    setNewNum("")
    setNewName("")
  }

  const handleCreate = (personObject) => {
    personServices.create(personObject).then(data => setPersons(persons.concat(data)))
    setNotification(`added ${personObject.name}`)
    setTimeout(() => setNotification(null), 5000)  
  }
  const handleDelete= (id) => {
    const deletedPerson = persons.find(element => element.id === id)
    if (window.confirm(`Do you really want to delete this ${deletedPerson.name}?`)) { 
    personServices.del(id)
    const newPersons = persons.filter( n => n.id !== id)
     setPersons (newPersons)
     setNotification(`deleted ${deletedPerson.name} successfully`)
     setTimeout(() => setNotification(null), 5000) 
    }
  }
  
  const handleUpdate = (index, newNum) => {
    const personToUpdate = persons[index]
    const changedPerson = {...personToUpdate, number: newNum} 
    if (window.confirm (`${personToUpdate.name} is already added to the phonebook, update the number?`)) {
      personServices.update(changedPerson.id, changedPerson).then (data => { 
        setPersons (persons.map (person => person.id !== changedPerson.id ? person : data))
        setNotification(`${changedPerson.name} number was updated`)
        setTimeout(() => setNotification(null), 5000) 
      })
      .catch (error => {
        setError(true)
        setPersons (persons.filter(person => person.id !== changedPerson.id))
        setNotification(`information of ${changedPerson.name} was already deleted from the server`)
        setTimeout(() => {
          setNotification(null)
          setError(false) 
        }, 5000) 
        
      })
        
    }
  }
  return (
    <div>
      <h2> PhoneBook </h2>
      <Notification message={notification} error={error}/>
      <Filter filterInput={filterInput} handleFilterChange={handleFilterChange}/>
      <h3> Add a new contact</h3>
      <PersonForm 
      newNum={newNum} 
      newName={newName} 
      handleNameChange={handleNameChange} 
      handleNumChange={handleNumChange} 
      handleFormSubmit= {handleFormSubmit}
      />
       <h3> Numbers </h3> 
       <ul> 
       {namesThatMatch.map(person => 
       <Person 
       key={person.id} 
       name={person.name} 
       num={person.number} 
       handleDelete={() => handleDelete(person.id)} /> )}
       </ul> 
    </div>
  );
}

export default App;
