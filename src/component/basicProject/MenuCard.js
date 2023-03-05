import React from 'react'

const MenuCard = (currElem) => {    


return (
    <>
        
        <section className='main-card--cointainer'>

        {currElem.map(() => {
            return (
                <>
            <div className="card-conatiner">
                <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>1</span>
                    <span className='card-author subtle'  >Breakfast</span>
                    <h2 className='card-title'>Maggi</h2>
                    <span className='card-description subtle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, quisquam optio! Vel impedit saepe dolorum iusto obcaecati consequatur totam est nulla voluptatum! Non distinctio consectetur ex exercitationem minima tempora velit.
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="imagaae" className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
                </div>
            </div>
            </>
            );
        })}

        
        </section>
    </>
)
}

export default MenuCard