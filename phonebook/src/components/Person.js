function Person(props) {
    return (
      <li> {props.name}: {props.num} - <button onClick= {props.handleDelete}> Delete </button> </li> 
    )
  }

export default Person