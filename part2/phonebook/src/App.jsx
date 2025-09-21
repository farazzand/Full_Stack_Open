import { useState } from 'react'

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}
                />
                </div>
                <div>
                number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}
                />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

const Filter = ({showAll, handleFilterChange}) => {
    return(
        <div>
            filter shown with <input
            value={showAll}
            onChange={handleFilterChange}
            />
        </div>
    )
}

const Persons = ({personsToShow}) => {
  return(
    <ul>
        {personsToShow.map(person => 
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      id: String(persons.length+1),
      number: newNumber
    }
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else if (newName ==='' || newNumber ===''){
      alert(`All the fields must be filled`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (event) => {
    console.log('new name: ', event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('new number: ', event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value)
    setShowAll(event.target.value)

  }
  
  const personsToShow = showAll === ''
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        showAll = {showAll}
        handleFilterChange = {handleFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons 
      personsToShow={personsToShow}
      />
    </div>
  )
}

export default App