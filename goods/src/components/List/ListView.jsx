import S from './ListView.module.css'

export const ListView = ({products}) => {


    return (
     
        <div className={S.container} >  
          {products.map ( (product)=>

            <div className={S.block} key={product.id}>
                <img className={S.image} src={product.img}  /> 
                <p className={S.name} >{product.name}</p>  
                <p className= {S.color} >{product.color}</p>         
                <p className={S.price} >${product.price}</p> 
                <button className= {S.button} >ADD TO CAR</button>           
            </div>    
                         
          )}
        </div>   

        
    )
}