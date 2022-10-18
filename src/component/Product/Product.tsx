import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import { fetchProduct, selectProduct } from '../../redux/slices/ProductSlices';
import { selectTodosByFilter } from '../../redux/slices/select';
import { selectUser } from '../../redux/slices/UserSlices';
import { useAppDispatch } from '../../redux/store';
import AddProduct from '../AddProduct/AddProduct';
import ContentProduct from './ComponentProduct/ContentProduct';
import HeaderProduct from './ComponentProduct/HeaderProduct';

const Product = () => {

    const dispatch = useAppDispatch()
    const { userToken } = useSelector(selectUser)
    const product = useSelector(selectTodosByFilter)
    const { loading } = useSelector(selectProduct)
    const getProduct = async () => {
        dispatch(fetchProduct())
    }
    React.useEffect(() => {
        window.scrollTo(0, 0)
        getProduct()
    }, [])
    const products =
        product.map((p: any) => <ContentProduct {...p} key={p.id} userToken={userToken} />)
    return (
        <section className="bg0 p-t-23 p-b-140">
            <div className="container">
                {userToken &&
                    <AddProduct />
                }
                <HeaderProduct />
                <div className="row isotope-grid">
                    {products}
                    <div className="flex-c-m flex-w w-full p-t-45">
                        <div className="flex-c-m">
                            {loading ? <Spinner size={120} visible={true} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;