import React from "react";

const Coctails = ({coctails, getDetails, coctailsActive}) =>{
    return (
        <section className={coctailsActive? 'coctails-section': 'invisible'}>
            <ul>
                {coctails.map((coctail)=>{
                    const {idDrink, strDrink} = coctail;
                    return <li key={idDrink} onClick={()=>getDetails(idDrink)}> {strDrink} </li>
                })}
            </ul>
        </section>
        )
}

export default Coctails;