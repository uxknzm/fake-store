import React from 'react';
import ProductDet from '../component/ProductDet/ProductDet';
import { useParams } from 'react-router';
import Spinner from 'react-spinner-material';
import { useAppDispatch } from '../redux/store';
import { fetchProductById, selectProductId } from '../redux/slices/FetchByIdSlice';
import { useSelector } from 'react-redux';


const ProductDetail = () => {
    const { id } = useParams()

    const dispatch = useAppDispatch()
    const { loading, product } = useSelector(selectProductId)
    React.useEffect(() => { 
        window.scrollTo(0, 0)
            if (id) {
                dispatch(fetchProductById({id}))
            }
    }, [id])

    return (
        <>
            {loading ? <Spinner style={{margin: '500px 900px'}} size={120} visible={true} /> : <ProductDet product={product} />}
        </>
    );
};

export default ProductDetail;