import React from 'react';
import Product from '../component/Product/Product';
import Slider from '../component/Slider/Slider';
import Modal from '../component/Modal/Modal';

const Home = () => {
    return (
        <>
            <Slider />
            <Modal />
            <Product />
        </>
    );
};

export default Home;