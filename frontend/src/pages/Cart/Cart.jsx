import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cartItemsTitle cartItemsItem">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div>{cartItems[item._id]}</div>
                <p>${item.price*cartItems[item._id]}</p>
                <p className='cartItemsRemoveIcon' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cartBottom">
        <div className="cartTotal">
          <h2>Cart Totals</h2>
          <div>
            <div className="cartTotalDetails"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cartTotalDetails"><p>Delivery Fee</p><p>${getTotalCartAmount()===0?0:5}</p></div>
            <hr />
            <div className="cartTotalDetails"><b>Total</b><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartPromocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartPromocodeInput'>
              <input type="text" placeholder='Promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
