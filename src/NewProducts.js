import {Link,useParams } from "react-router-dom";
import {data} from './Data';
import './NewProducts.css'



  export const NewProducts = (props)=>{

 const {productid}=useParams();
 const product = data.find((product)=>product.id === +productid )
 

 return (
    <div className="newProductAll" >
      <div className="divImg">
        <img  className="img" src={'/'+ product.img} alt='name' />
      </div>
      <div className="container">
        <h2 >{product.name}</h2>
        <h2 className="h" >Դ {product.price}</h2>
        <p className="p">
          <h4>Նկարագիր`</h4>
          {product.description}
          </p>
          <button className="button" onClick={props.y} >Ավելացնել զամբյուղ</button>
      </div>
        
       
        
    </div>
 )

}