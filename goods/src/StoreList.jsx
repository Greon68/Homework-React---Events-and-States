import './StoreList.css';
import products from "./data";

const StoreList = ()=>{
 
    const productList = products.map ( (product)=>
        // < img className="image" src={product.img}  key={product.id}/>
        <div className='block-list'>
            <img className='image-list' src={product.img}  /> 
            <p className="name-list" >{product.name}</p>  
            <p className="color-list" >{product.color}</p>         
            <p className="price-list" >${product.price}</p> 
            <div className="button-list" >ADD TO CAR</div>
            
        </div>   

    )



    return (      
        <div className='container-list' >                
            {productList}
        </div>   
    )
}


export default StoreList