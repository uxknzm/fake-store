import * as React from 'react';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';


const Modale = ({ open, handleClose, title, price, description, image, id, category }: any) => {
    return (
        <>
            <Modal
                sx={{ marginTop: '50px' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="container">
                    <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                        <button onClick={handleClose} className="how-pos3 hov3 trans-04">
                            <img src="images/icons/icon-close.png" alt="CLOSE" />
                        </button>

                        <div className="row">
                            <div className="col-md-6 col-lg-7 p-b-30">
                                <div className="p-l-25 p-r-30 p-lr-0-lg">
                                    <div className="wrap-slick3 flex-sb flex-w">
                                        <div className="wrap-slick3-dots"></div>
                                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                        <div className="slick3 gallery-lb">
                                            <div className="item-slick3">
                                                <div className="wrap-pic-w pos-relative">
                                                    <img style={{width: '500px'}} src={image} alt="IMG-PRODUCT" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5 p-b-30">
                                <div className="p-r-50 p-t-5 p-lr-0-lg">
                                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                        {title}
                                    </h4>

                                    <span className="mtext-106 cl2">
                                        ${price}
                                    </span>

                                    <p className="stext-102 cl3 p-t-23">
                                        {description}
                                    </p>
                                    <div className="p-t-33">
                                        <div className="flex-w flex-r-m p-b-10">
                                                <NavLink to={`/product/detail/${id}`} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                    View
                                                </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Modale;