
import { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList.jsx';
import Toolbar from '../Toolbar/Toolbar.jsx';
import { list , filters } from '../../data.js';


 
const Portfolio = () => {
    // Функция состояния для фильтров:
    const [filterState, setFilter]= useState(list);
    const [selected, setSelected]= useState(filters[0])

    console.log ('Текущее значение фильтра -', filterState)
    
    const onSelectFilter = (filter) => {
  
        setSelected(filter);
        setFilter (
          filter === filters[0] ?
            list :
            list.filter( item => item.category === filter)
        )

    }
 
    return (   
        <>
        <Toolbar
            filters={filters}
            selected={selected }
            onSelectFilter={onSelectFilter}/>
            
         < ProjectList projects = {filterState}/>
        </>
    )
}


export default Portfolio