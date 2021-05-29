import React, { useState } from 'react'

function Heading(props) {
  return ( 
    <div>
      <h1> {props.text} </h1>
    </div>
  )
}

function Button (props) {
  return (
    <button onClick= {props.clickHandler}> {props.text}</button>
  )
}
function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState ([0,0,0,0,0,0])
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomQuote = () => {
    const num = getRandomInt(6)
    setSelected(num)
  }

  const voting = (selected) => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
  }
  

  return (
    <div>
      <Heading text= "Anecdote of the day"/>
      {anecdotes[selected]}
      <p> has {votes[selected]}</p>
      <Button text="next anecdotes" clickHandler={randomQuote} />
      <Button text="vote" clickHandler={() => voting(selected)} />
      <Heading text= "Anecdote with most votes" />
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <p> has {Math.max(...votes)}</p>
    </div>
  )
};

export default App;
