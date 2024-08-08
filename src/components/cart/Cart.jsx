import React from 'react'
import './cart.css'

const Cart = () => {  
    return (       
       <>
        <div className="cart-Container">
            <h1 className="heading d-flex">
                <span>My</span>Cart            
            </h1>
            <div className='cart-items'>
                <div className='items'>
                    <label htmlFor="">Food</label>
                    <div>
                        <img src="" alt="" />
                        <span className='items-value'>Dal</span>
                    </div>
                </div>
                <div className='items'>
                    <label htmlFor="">Quantity</label>
                    <input className='items-value' type="number" name="" id="" min={1} />
                </div>
                <div className='items'><label htmlFor="">price</label>
                    <span className='items-value'>20 Rs</span>
                </div>
                <div className='items' id='delete-btn'>
                    <label htmlFor="">Delete</label>
                    <span className='items-value'>Delete</span>
                </div>
            </div>
            <div className="cart-footer">
                <div className='items'>
                    <label htmlFor="">Total</label>
                    <span className='items-value'>200 Rs</span>
                </div>
                <button className='btn'>Confirm Order</button>
            </div>
        </div>
       </>
    )
}

export default Cart