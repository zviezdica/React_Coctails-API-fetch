import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
   
const StoreItem = ({product, index, imgSrc, addToBag}) =>{
    const [price, setPrice] = useState(0)
 
useEffect(()=>{
    setPrice( 60 + Math.floor(Math.random()*40));
},[])

    return(
        <div key={index} className='store-item'>
            <img src={imgSrc} alt='product' className='product-img'></img>
            <h1 className='product-name'>{product}</h1>
            <h2 className='price'>Price: {price} kn</h2>
            <button id={index} onClick={()=>addToBag(product, imgSrc, price)} className='btn shop-product-btn'>Add to bag</button>
        </div>
    )
}

export default StoreItem;