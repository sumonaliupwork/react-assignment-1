import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStore } from '../Fakes/Fakes';
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
    useEffect(() => {
        if (poets.length) {
            const saveStorage = getStore();
            let storeCarts = [];
            for (const key in saveStorage) {
                const addPoet = poets.find(poet => poet.key === key)
                if (addPoet) {
                    const quantity = saveStorage[key];
                    addPoet.quantity = quantity;
                    storeCarts.push(addPoet);
                }
            }
            setCart(storeCarts);
        }
    }, [poets])
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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