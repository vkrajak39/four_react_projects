import React from 'react'




const Navbar = ({filterCard ,newMenuItem}) => {
    return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
        
        {newMenuItem.map((curElem)=> {
            return(
                <button className='btn-group__item' onClick={() => filterCard(curElem)}>{curElem}</button>
            )
        })}
        
        {/* <button className='btn-group__item' onClick={() => filterCard("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={() => filterCard("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={()=> filterCard("evening")}>Evening</button>
        <button className='btn-group__item' onClick={() => filterCard("dinner")}>Dinner</button>
        <button className='btn-group__item'onClick={() => filterCard("all")}>All</button> */}

        </div>

    </nav>
    </>
    )
}

export default Navbar