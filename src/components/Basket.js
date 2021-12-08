import React from "react";

const Basket = ({bagItems}) =>{

    return(
        <div className='basket-section'>
            <h2 className='h2-basket'>My bag</h2>
            <div className='products-in-basket'>
                {bagItems.map((bagItem) =>{
                    const {name, imgSrc, price} = bagItem;
                    return(
                        <div className='item-in-basket'>
                            <img src={imgSrc} alt='item' className='img-item-in-basket'/>
                            <div className='item-info'>
                                <h4 className='item-name'>{name}</h4>
                                <h4 className='item-price'>{price} kn</h4>
                            </div>
                            <input type='number' value='1' className='item-input' max={10} maxLength={2}/>
                            <h4 className='price-item-type'>{price} kn</h4>
                        </div>
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