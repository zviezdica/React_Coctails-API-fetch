import React from "react";

const NavItem = ({index, name}) =>{
    console.log(index)
    return(
        <div className='nav-item' key={index} id={index} >
            {name}
        </div>
    )
}

export default NavItem;