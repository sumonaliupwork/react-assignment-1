import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let names = '';
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
        names = names + product.name;
    }
    return (
        <div>
            <h3>Add Player: {props.cart.length} </h3>
            <h3>Total Cost: {total}</h3>
            <ul className='names'>
                <li>{names}</li>
            </ul>
            Md.ahsan ullah
        </div>
    );
};

export default Cart;