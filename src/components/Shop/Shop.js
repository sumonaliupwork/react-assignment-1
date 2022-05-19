import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Poet from '../Poet/Poet';
import './Shop.css';

const Shop = () => {
    const [poets, setPoets] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`./poit.JSON`)
            .then(res => res.json())
            .then(data => setPoets(data))
    }, [])
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container container'>
            <div className="product-container">
                {
                    poets.map(poet => <Poet
                        key={poet.id}
                        poet={poet}
                        handleAddToCart={handleAddToCart}
                    ></Poet>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;