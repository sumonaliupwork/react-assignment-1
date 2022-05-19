import React from 'react';
import './Poet.css';

const Poet = (props) => {
    const { name, id, salary, age, img, works } = props.poet;
    return (
        <div className='poet-container'>
            <img src={img} alt="" />
            <h2 className='poet-name'>{name}</h2>
            <h4 className='poet-id'>ID: {id}</h4>
            <h3 className='poet-depertment'>Deperment: {works}</h3>
            <h4 className='poet-age'>Age: {age}</h4>
            <h2 className='poet-salary'>Salary: {salary}</h2>
            <button
                onClick={() => props.handleAddToCart(props.poet)}
                className='addToCart'
            >Add To Cart</button>
        </div>
    );
};

export default Poet;