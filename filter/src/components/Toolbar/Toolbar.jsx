const Toolbar = ({filters, selected , onSelectFilter}) => {
  
    console.log('Выбрана и передана в Toolbar категория -', selected)
      
    return (  
        <ul className="filter-button">

            { filters.map( (filter) =>
              <li key={filter}> 
                  <button className={selected === filter ? 'active': ""}
                    onClick= {()=>onSelectFilter(filter)}>
                        {filter}
                  </button> 
              </li>
              )
            }

        </ul>
    )


}

export default Toolbar

