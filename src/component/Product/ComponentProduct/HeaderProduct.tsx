import React from 'react';
import { changeFilter } from '../../../redux/slices/CategorySleces';
// import { filterProduct } from '../../../redux/slices/ProductSlices';
import { useAppDispatch } from '../../../redux/store';

const HeaderProduct = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="p-b-10">
                <h3 className="ltext-103 cl5">
                    Product Overview
                </h3>
            </div>

            <div className="flex-w flex-sb-m p-b-52">
                <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => dispatch(changeFilter('all'))}>
                        all
                    </button>
                    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => dispatch(changeFilter("men's clothing"))}>
                        men
                    </button>
                    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => dispatch(changeFilter("women's clothing"))}>
                        women
                    </button>
                    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => dispatch(changeFilter('jewelery'))}>
                        jewelery
                    </button>
                    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => dispatch(changeFilter('electronics'))}>
                        electronics
                    </button>
                </div>

                <div className="flex-w flex-c-m m-tb-10">
                    <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                        <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                        <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                        Search
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderProduct;