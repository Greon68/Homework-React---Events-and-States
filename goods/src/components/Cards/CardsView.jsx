import S from './CardsView.module.css'

export const CardsView = ({products}) => {

    // const productList = products.map ( (product)=>
    //     <div className= {S.block}> 
    //         <div className={S.name} >{product.name}</div>  
    //         <div className={S.color} >{product.color}</div>   
    //         <img className={S.image} src={product.img}  key={product.id}/>
    //         <div className={S.price} >${product.price}</div> 
    //         <button className={S.button} >ADD TO CAR</button>                
    //     </div>   
    // )

    // return (
    //     <div className={S.container} >                
    //         {productList}
    //     </div>   
    // )

    return (
        <div className={S.container} >                
           { products.map ( (product)=>
                <div className= {S.block}> 
                    <div className={S.name} >{product.name}</div>  
                    <div className={S.color} >{product.color}</div>   
                    <img className={S.image} src={product.img}  key={product.id}/>
                    <div className={S.price} >${product.price}</div> 
                    <button className={S.button} >ADD TO CAR</button>                
                </div>   
            )
           }
        </div>   
    )
}