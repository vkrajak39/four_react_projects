import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from  "./Navbar";


// creating uniqueList
const uniqueList = [... new Set (Menu.map( (curElem) =>{
      return curElem.category;
    }
  )  ),"all"]


console.log(uniqueList);




const Resturant = () => {


  const [menuData , setMenuData] = useState(Menu);

  // for navbar
  const [newMenuItem , setNewMenuItem] = useState(uniqueList);







  const filterCard = (categ) => {
    const updatedList = Menu.filter((curElem) =>{
      if(categ === 'all')
      {
        return true;
      }

      else{
        return curElem.category ===categ;
      }
    });
    setMenuData(updatedList);

  }



  return ( 
      <>
          <Navbar filterCard={filterCard} newMenuItem={newMenuItem} />
          <MenuCard menuData = {menuData}/>
  
          
      </>
  )
  }
  
  export default Resturant;