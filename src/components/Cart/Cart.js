import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let names = '';
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.salary * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        names = names + product.name;
    }
    return (
        <div>
            <h3>Add Player: {totalQuantity} </h3>
            <h3>Total Cost: {total}</h3>
            <ul className='names'>
                <li>{names}</li>
            </ul>
        </div>
    );
};

export default Cart;