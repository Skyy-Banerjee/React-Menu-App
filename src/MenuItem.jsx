 import React from 'react'
 
// MenuItem Component
function MenuItem({ img, title, price, desc }) {
    return (
        <article className='menu-item'>
            <img src={img} alt={title} className='img' />
            <div className="item-info">
                <header> {/* Use header tag here, not head */}
                    <h5>{title}</h5>
                    <span className='item-price'>${price}</span>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </article>
    )
}

export default MenuItem
