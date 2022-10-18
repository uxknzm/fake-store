import React from 'react';
import { NavLink } from 'react-router-dom';
import { addItem } from '../../../redux/slices/CartSlice';
import { deleteProduct } from '../../../redux/slices/ProductSlices';
import { useAppDispatch } from '../../../redux/store';
import Modal from '../../Modal/Modal';
import Update from '../../Update/Update';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const ContentProduct = ({ id, title, price, description, category, image, rating, userToken }: any) => {
    const dispatch = useAppDispatch()
    const onClickAdd = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            count: 0
        }
        dispatch(addItem(product))
    }
    const onClickDelete = () => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteProduct(id))
        }
    }
    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = React.useState(false);
    const handleUpdate = () => setUpdate(true)
    const handleUpdateClose = () => setUpdate(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
            <div className="block2">
                <div className="block2-pic hov-img0">
                    <img src={image} alt="IMG-PRODUCT" height='350px' />

                    <button onClick={handleOpen} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                        Quick View
                    </button>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                        <NavLink to={`/product/detail/${id}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            {title}
                        </NavLink>

                        <span className="stext-105 cl3">
                            ${price}
                        </span>

                    </div>
                    <Button onClick={onClickAdd} sx={{ marginTop: 1 }} fullWidth startIcon={<AddShoppingCartIcon />} >Add to cart</Button>
                    {
                        userToken &&
                        <ButtonGroup variant="text" aria-label="large button group" fullWidth>
                            <Button onClick={onClickDelete} color="error" startIcon={<DeleteIcon />}>Delete</Button>
                            <Button onClick={handleUpdate} color="success" startIcon={<SystemUpdateAltIcon />}>Update</Button>
                        </ButtonGroup>
                    }
                </div>
            </div>
            <Modal open={open} handleClose={handleClose} title={title} price={price} description={description} id={id} image={image} />
            <Update update={update} handleUpdateClose={handleUpdateClose} id={id} title={title} price={price} description={description} category={category} image={image} />
        </div>
    );
};

export default ContentProduct;