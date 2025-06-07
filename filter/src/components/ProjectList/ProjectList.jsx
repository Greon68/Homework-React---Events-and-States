import './ProjectList.css'

const ProjectList = ({projects})=>{
    console.log ('ProjectList -',projects)

     // Функция , формирующая элементы списка для отрисовки:
    // function blockCard(card) {
    //     return (
    //     <div className='block'>       
    //         <img className='image' src={card.img} key={card.id}/>
    //         <div className='category'>{card.category}</div>
    //     </div>  )             
    // }

    // const cardList = cards.map ( card =>       
    //     <img className='image' src={card.img} key={card.id}/>                
    // )

    // const cardList = list.map ( card =>
    //         blockCard(card)    
    // )

    // console.log(list)  ;  
    // console.log(cardList)   

    return (        
    <div className='container' >
        {projects}
    </div>       
    )
}

export default ProjectList