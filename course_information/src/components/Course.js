function Header(props) {
    return (
    <div>
      <h2> {props.name} </h2>
    </div>
    )
  }
  
  function Part (props) {
    return (
        <li> {props.value} </li>
    )
  }

  function Content(props){  
    const names = props.parts
    return (
      <ul>
          {names.map ((item) => 
            <Part key= {item.id} value={item['name'] + " " + item['exercises']} /> 
            )}
    
      </ul>
    )
  }
  
function Total(props) {
    const exercises = []
    props.parts.forEach( part => exercises.push(part['exercises'])
    )
    const total = exercises.reduce((x,y) => x+ y)
    return (
      <div>
        <p> <b> Number of exercises {total} </b> </p>
      </div>
    )
  }

function Course(props) {
    const data = props.course;
    return (
    <div>
      <Header name={data.name} />
      <Content parts= {data.parts} />
      <Total parts={data.parts} /> 
    </div>
    )
}

export default  Course