import { PinDropSharp } from '@material-ui/icons'
import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({id, img ,price , title, rating}) {

    const [ {basket} , dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                price : price,
                id : id,
                rating : rating,
                img : img,
                title : title,
            },
        });
    }
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className ="product__price"><small>$</small><strong>{price}</strong></p>
                <div className="product__rating">
                {Array(rating).fill().map((_,i)=>
                (<p>⭐</p>)
                )}
                
                </div>
            </div>
            <img className="" src={img} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product


