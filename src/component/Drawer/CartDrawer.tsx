import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeItem, selectCart } from '../../redux/slices/CartSlice';
import { useAppDispatch } from '../../redux/store';

const CartDrawer = ({close}: any) => {
    const dispatch = useAppDispatch()
    const { items, totalPrice } = useSelector(selectCart)
    const onClickRemove = (id: any) => {
        if (window.confirm('Are you sure?')) {
            dispatch(removeItem(id))
        }
    }
    return (
        <>
            <div className="s-full js-hide-cart"></div>

            <div className="header-cart flex-col-l p-l-65 p-r-25">
                <div className="header-cart-title flex-w flex-sb-m p-b-8">
                    <span className="mtext-103 cl2">
                        Your Cart
                    </span>

                    <div onClick={close} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04">
                        <i className="zmdi zmdi-close"></i>
                    </div>
                </div>

                <div className="header-cart-content flex-w js-pscroll">
                    <ul className="header-cart-wrapitem w-full">
                        {items.map((product) => <li className="header-cart-item flex-w flex-t m-b-12">
                            <div onClick={() => onClickRemove(product.id)} className="header-cart-item-img">
                                <img src={product.image} alt={product.title} />
                            </div>

                            <div className="header-cart-item-txt p-t-8">
                                <NavLink to={`/product/detail/${product.id}`} className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                    {product.title}
                                </NavLink>

                                <span className="header-cart-item-info">
                                    {product.count} x ${product.price}
                                </span>
                            </div>
                        </li>)}
                    </ul>

                    <div className="w-full">
                        <div className="header-cart-total w-full p-tb-40">
                            Total: $ {totalPrice}
                        </div>
                            <NavLink to='/shop' onClick={close} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                View Cart
                            </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;