import React from "react";
import NavItem from "./NavItem";

const navItems = ['Home', 'Store', 'Coctail Ideas', 'Contact'];

const NavBar = ({navSelect}) =>{
    return(
        <nav className='navbar'>
            <section className='logo nav-section'>
                Liquor Store
            </section>
            <section className='nav-container nav-section' onClick={navSelect}>
        {navItems.map((navItem,index)=>{
            return(
                
                    < NavItem name={navItem} index={index} id={index}/>
               
            )
        })}
         </section>
        </nav>
    )
}

export default NavBar;