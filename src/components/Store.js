import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import StoreItem from "./StoreItem";
import Basket from "./Basket";

const Store = ({apiRoot, listIngredientsPath}) =>{
    const [products, setProducts] = useState([]);
    const [bagItems, setBagItems] = useState([]);

    useEffect(() =>{
    const fetchIngredients = async()=>{
        const url = apiRoot + listIngredientsPath;
        const response = await fetch(url);
        const list = await response.json();
        const ingredients = list.drinks;
        const newIngredients = [];
        ingredients.forEach(ingredient => {
            
            newIngredients.push(ingredient.strIngredient1);
        })
        setProducts(newIngredients);
    }
    fetchIngredients();
    },[])

    const handleAddToBag = (itemInBag, imgSrc, price) =>{
        products.map((product)=>{
            if(product===itemInBag){
                setBagItems([...bagItems,
                {name: itemInBag,
                imgSrc: imgSrc,
                price: price
                }])
            }
        })
        console.log(bagItems);
    }

    return(
        <section className='store-section'>
            <article className='products-container'>
            {products.map((product,index)=>{
                const imgSrc = `https://www.thecocktaildb.com/images/ingredients/${product}-Medium.png`;
                return(
                <StoreItem product={product} index={index} imgSrc={imgSrc} addToBag={handleAddToBag}/>
            )})}
            </article>
            <article className='basket-container'>
                    <Basket bagItems={bagItems}/>
            </article>
        </section>
    )
}

export default Store;