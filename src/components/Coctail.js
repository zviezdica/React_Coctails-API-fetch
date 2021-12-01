import React from "react";

const Coctail = ({coctail, coctailActive}) =>{
    const {strDrink, strAlcoholic, strDrinkThumb, strInstructions} = coctail;
    return <div className={coctailActive? 'coctail-container' : 'invisible'}>
        <h1 className='info-h1'>{strDrink}</h1>
        <h3 className='info-h2'>Alcoholic: {strAlcoholic}</h3>
        <img src={strDrinkThumb} alt='coctail' className='coctail-img'/>
        <p className='description'>{strInstructions}</p>
    </div>
}
export default Coctail;