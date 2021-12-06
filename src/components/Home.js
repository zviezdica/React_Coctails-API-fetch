import React from "react";

const Home = ({goToShop, goToContact}) =>{
    return(
        <div className='home-section'>
            <h1 className='h1-home'>Welcome to<span className='span-liquor'>Liquor store!</span></h1>
            <p className='about'>
                The knowledgeable staff at our liquor store will be able to guide you through our 
                hand-picked selection of spirits, beers and wines. We also stock specialist and 
                difficult-to-get-hold-of industry products including professional equipment, syrups 
                and other niche items.
            </p>
            <p className='about'>
                You will soon be able to explore our entire range in our online liquor store. 
                Whether you’re an enthusiastic novice or seasoned connoisseur, our supporting 
                content will help you find exactly what you’re looking for. In the meantime you
                 can still purchase class and tasting vouchers as well as cocktail kits via the online shop.
            </p>
            <h2 className='h2-home'>Opening hours</h2>
            <ul className='home-ul'>
                <li><b>Monday: </b>11am-8pm</li>
                <li><b>Tuesday-Saturday: </b>11am-11pm</li>
                <li><b>Sunday: </b>closed</li>
            </ul>
            <div className='btn-container'>
                <button className='btn' onClick={goToShop}>Shop now</button>
                <button className='btn' onClick={goToContact}>contact us</button>
            </div>
            

        </div>
    )
}

export default Home;