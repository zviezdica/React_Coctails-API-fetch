import React from "react";

const StoreItem = ({product, index, imgSrc}) =>{
    console.log(product);
    console.log(imgSrc);
    return(
        <div key={index} className='store-item'>
            <img src={imgSrc} alt='product' className='product-img'></img>
            <h1 className='product-name'>{product}</h1>
            <h2 className='price'>Price: {60 + Math.floor(Math.random()*40)} kn</h2>
            <button className='btn shop-product-btn'>Add to bag</button>
        </div>
    )
}

export default StoreItem;