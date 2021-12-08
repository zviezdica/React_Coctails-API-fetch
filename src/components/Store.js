import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import StoreItem from "./StoreItem";

const Store = ({apiRoot, listIngredientsPath}) =>{
    const [products, setProducts] = useState([]);

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

    return(
        <section className='store-section'>
            <article className='products-container'>
            {products.map((product,index)=>{
                console.log(product);
                const imgSrc = `https://www.thecocktaildb.com/images/ingredients/${product}-Medium.png`;
                return(
                <StoreItem product={product} index={index} imgSrc={imgSrc}/>
            )})}
            </article>
        </section>
    )
}

export default Store;