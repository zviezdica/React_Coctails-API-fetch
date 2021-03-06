import React from "react";

const Search = ({changeInput, input, getRandomCoctail}) =>{
    return(
        <section className='search-section'>
            <label htmlFor='coctail'>Search your favourite coctails: </label>
            <input className='input'
            type='text' 
            name='coctail' 
            id='coctail' 
            onChange={changeInput}
            value={input}
            />
            <span>or</span>
            <button type='button' className='btn random-btn' onClick={getRandomCoctail}>Get me 
            random!</button>
        </section>
    )
}

export default Search;

