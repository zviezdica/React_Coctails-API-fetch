import React from "react";
import { useState } from "react/cjs/react.development";
import ItemInBasket from "./ItemInBasket";

const Basket = ({bagItems}) =>{

    return(
        <div className='basket-section'>
            <h2 className='h2-basket'>My bag</h2>
            <div className='products-in-basket'>
                {bagItems.map((bagItem) =>{
                    const {name, imgSrc, price} = bagItem;
                    return(
                        <ItemInBasket name={name} imgSrc={imgSrc} price={price}/>
                    )
                })}
            </div>
            <div className='total-div'>
                <h3 className='total-text'>Total:</h3>
                <h3 className='total-price'>0 kn</h3>
            </div>
        </div>
    )
}

export default Basket;