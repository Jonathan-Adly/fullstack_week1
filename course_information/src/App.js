function Header(props) {
  return (
  <div>
    <h1> {props.course} </h1>
  </div>
  )
}

function Part (props) {
  return (
    <div>
      <p> {props.value} </p>
    </div>
  )
}
function Content(props){  
  const names = props.parts.map (value => value['name'] + " " + value['exercises'])
  return (
    <div>
      <Part value= {names[0]} />
      <Part value= {names[1]} />
      <Part value= {names[2]} />
    </div>
  )
}

function Total(props) {
  const exercises = []
  props.parts.forEach( part => exercises.push(part['exercises'])
  )
  const total = exercises.reduce((x,y) => x+ y)
  return (
    <div>
      <p> Number of exercises {total} </p>
    </div>
  )
}

function App() {

const course = {
name: "Half Stack application development",
parts: [
  {
  name: "Fundmentals of React",
  exercises: 10
}
,
{ 
  name: "Using props to pass data",
  exercises : 7
}
,
{
name: "State of a component",
exercises : 14
}
  ]
}
  return (
    <div>
      <Header course={course.name} />
      <Content parts= {course.parts} />
      <Total parts={course.parts} /> 
    </div>
  );
}

export default App;
