import React from 'react';
import { addItem } from '../../redux/slices/CartSlice';
import { useAppDispatch } from '../../redux/store';

const ProductDetail = ({ product }: any) => {
    const dispatch = useAppDispatch()
    const onClickAdd = () => {
        dispatch(addItem(product))
    }
    return (
        <section style={{ marginTop: '100px' }} className="sec-product-detail bg0 p-t-65 p-b-60">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-7 p-b-30">
                        <div className="p-l-25 p-r-30 p-lr-0-lg">
                            <div className="wrap-slick3 flex-sb flex-w">
                                <div className="wrap-slick3-dots"></div>
                                <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                <div className="slick3 gallery-lb">
                                    <div className="item-slick3">
                                        <div className="wrap-pic-w pos-relative">
                                            <img style={{width: '400px'}} src={product.image} alt={product.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 p-b-30">
                        <div className="p-r-50 p-t-5 p-lr-0-lg">
                            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                {product.title}
                            </h4>

                            <span className="mtext-106 cl2">
                               Price: ${product.price} 
                            </span>

                            <p className="stext-102 cl3 p-t-23">
                                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                            </p>
                            <div className="p-t-33">
                                <div className="flex-w flex-r-m p-b-10">
                                    <button onClick={onClickAdd} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bor10 m-t-50 p-t-43 p-b-40">
                    <div className="tab01">
                        <ul className="nav nav-tabs">
                            <li className="nav-item p-b-10">
                                <p className="nav-link active">Description</p>
                            </li>
                        </ul>
                        <div className="tab-content p-t-43">
                            <div className="tab-pane fade show active">
                                <div className="how-pos2 p-lr-15-md">
                                    <p className="stext-102 cl6">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default ProductDetail;