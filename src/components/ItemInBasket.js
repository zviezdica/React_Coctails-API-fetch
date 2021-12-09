import React from "react";
import { useState } from "react/cjs/react.development";

const ItemInBasket = ({name, imgSrc, price}) =>{
    const [value, setValue] = useState(1);

    const updateValue = (e) =>{
       let newValue = e.target.value;
       setValue(newValue);
    }

    return(
        <div className='item-in-basket'>
            <img src={imgSrc} alt='item' className='img-item-in-basket'/>
            <div className='item-info'>
                <h4 className='item-name'>{name}</h4>
                <h4 className='item-price'>{price} kn</h4>
            </div>
            <input type='number' onChange={updateValue} value={value} className='item-input' min={1} max={10} maxLength={2}/>
            <h4 className='price-item-type'>{price*value} kn</h4>
        </div>
    )
}

export default ItemInBasket;