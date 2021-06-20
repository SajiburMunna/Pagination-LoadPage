import React, { useState } from 'react'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const Shop = () => {
  
    const first10=fakeData.slice(0,20);
    const [items, setItems] = useState(first10);
    const [visible, setVisible] = useState(3);

    const showMoreItems=()=>{
        setVisible((preValue)=>preValue+3);
    }
  
    return (
        <div>
 {
               items.slice(0,visible).map (prd=><Product  
               
                product={prd}> 
                </Product>)

             }

             <button onClick={showMoreItems}> Load More</button>
          
        
        </div>
    )


     
}

export default Shop
