import React, { useState } from 'react';
import './style.css';
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard"


const resturant = () => {

const [menuData , setMenuData] = useState(Menu);
// const menuData=Menu;

return ( 
    <>
        <MenuCard menuData = {menuData}/>

        
    </>
)
}

export default resturant;