function Filter(props){
    return ( 
    <p> find countries: <input value={props.filterInput} onChange={props.handleFilterChange}/> </p>
    )
}

export default Filter