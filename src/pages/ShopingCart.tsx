import React from 'react';
import ShopCart from '../component/ShopCart/ShopCart';

const ShopingCart = () => {
    return (
        <form className="bg0 p-t-75 p-b-85">
            <div className="container" style={{ marginTop: '100px' }}>
                <ShopCart />
            </div>
        </form>
    );
};

export default ShopingCart;