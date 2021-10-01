import React, { Fragment }  from 'react'
import './Subtotal.css'
import CurrencyFormat  from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketPrice } from './reducer';


function Subtotal() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) =>(
                    <React.Fragment>
                        <p>
                            TotalItems({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift.
                        </small>
                  </React.Fragment>
                )}
                decimalScale={2}
                value={getBasketPrice(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to CheckOut.</button>
        </div>
    )
}

export default Subtotal;
