
import { useState } from 'react';
import list from '../../data.js';
import ProjectList from '../ProjectList/ProjectList.jsx';
import Toolbar from '../Toolbar/Toolbar.jsx';

const Portfolio = (props) => {
    // Функция состояния для фильтров:
    const [filter, setFilter]= useState();
    // Функция состояния для карточек:
    const [card, setCard] = useState();

    // Формируем список для отображения :

    // Функция , формирующая элементы списка для отрисовки:
    function blockCard(card) {
        return (
            <div className='block'>       
                <img className='image' src={card.img} key={card.id}/>
                <div className='category'>{card.category}</div>
            </div> 
        )             
    }

     // ФИЛЬТРЫ : 

    //  All:

    const cardList = list.map ( card =>
        blockCard(card)    
    )

    // // Фильтр "Websites"

    // const websites = list.filter( card =>
    //     card.category === "Websites"      
    // );

    // const cardList = websites.map ( card =>
    //     blockCard(card)    
    // )

    // // Фильтр "Flayers" 

    //     const flayers = list.filter( card =>
    //         card.category === "Flayers"      
    //     )

    //     const cardList = flayers.map ( card =>
    //         blockCard(card)    
    //     )


    // // Фильтр "Business Cards" 

    // const businessCards = list.filter( card =>
    //     card.category === "Business Cards"      
    // );

    // const cardList = businessCards.map ( card =>
    //     blockCard(card)    
    // )

// ***********************************************
    
    // Oбработчики нажатия на кнопки:
    
    const handlerAll =()=> {
        console.log ('button-all')
        
    }

    const handlerWebsites =()=> {
        console.log ('button-websites');
 
    }

    const handlerFlayers =()=> {
        console.log ('button-flayes')
    }

    const handlerBusinessCards =()=> {
        console.log ('button-business-casrs')
    }


    return (
        // Прорисовываем кнопки 
        <>
        <div className='menu'>
            <button className='button-all' onClick={handlerAll}>All</button>
            <button className='button-websites' onClick={handlerWebsites}>Websites</button>
            <button className='button-flayes' onClick={handlerFlayers}>Flayers</button>
            <button className='button-business-casrs' onClick={handlerBusinessCards}>Business Cards</button>            
        </div>

        <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected="All" 
            onSelectFilter={(filter) => {console.log(filter);}}/>

         < ProjectList projects = {cardList}/>

        </>

    )
}


export default Portfolio