import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItems = (props) => {
    const { handleRemove, product } = props;
    const { key, name, img, price, quantity } = product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <h5>Price: {price}</h5>
                <h5>Quantity: {quantity}</h5>
                <button
                    onClick={() => handleRemove(key)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faTrashAlt} /> Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItems;