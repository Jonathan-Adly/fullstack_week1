function Filter(props){
    return ( 
    <p> filter shown with: <input value={props.filterInput} onChange={props.handleFilterChange}/> </p>
    )
}

export default Filter