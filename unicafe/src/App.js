import React, { useState } from 'react'

function Button(props) {
  
  return (
      <button  onClick= {props.clickHandler}> {props.text} </button>
  )
}

function Statistics(props) {
  if (props.stat) { 
  return (
      <tr><td> {props.text} {props.stat}</td></tr>
  )
    }
  else if (props.text === "positive") {
    return ( 
    <tr><td> {props.text} {props.stat} %</td></tr>
    )
  }
  else {
    return (
      <tr><td>{props.text}</td></tr>
    )
  }
}
function App() {
  const [good, setGood ] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad ] = useState(0)
  const [all, setAll] = useState(0)
  const [counter, setCounter] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setCounter(counter + 1)
  }
  const handlebad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setCounter(counter - 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  if (all > 0) { 
  return (
    <div>
      <h1> give feedback </h1>
 
      <Button clickHandler= {handleGood} text= "good" />
      <Button clickHandler= {handleNeutral} text= "neutral" />
      <Button clickHandler= {handlebad} text= "bad" />
      <h2> Statistics </h2>

      <table>
        <tbody> 
      <Statistics text="good" stat= {good}/>
      <Statistics text= "neutral" stat={neutral}/>
      <Statistics text= "bad" stat={bad} />
      <Statistics text= "all" stat={all} />
      <Statistics text= "average" stat={counter/all} />
      <Statistics text= "positive" stat={good/all * 100} />
      </tbody> 
           </table>
    </div>
  );
  }
  else {
    return (
      <div>
        <h1> give feedback </h1>   
        <Button clickHandler= {handleGood} text= "good" />
        <Button clickHandler= {handleNeutral} text= "neutral" />
        <Button clickHandler= {handlebad} text= "bad" />
        <table>
          <tbody>
            <Statistics text="No feedback" />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
