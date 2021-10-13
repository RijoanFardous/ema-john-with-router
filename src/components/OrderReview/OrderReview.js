import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveItem = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItems key={product.key} product={product} handleRemove={handleRemoveItem}></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;