import { Box, MenuItem, TextField, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { updateProduct } from '../../redux/slices/ProductSlices';
import { useAppDispatch } from '../../redux/store';
import AddCardIcon from '@mui/icons-material/AddCard';

const Update = ({ id, title, price, description, category, image, update, handleUpdateClose }: any) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '60%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
        '& .MuiTextField-root': { m: 2, width: '40ch' },
    };
    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: {
            title: title,
            price: price,
            description: description,
            image: image,
            category: category
        }
    });
    const submitForm = (product: any) => {
        const params = {
            id,
            product
        }
        dispatch(updateProduct(params))
    }
    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
            handleUpdateClose()
        }
    }, [formState, reset]);


    return (
        <>
            <Modal
                sx={{ marginTop: '50px' }}
                open={update}
                onClose={handleUpdateClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" gutterBottom>
                        UPDATE PRODUCT
                    </Typography>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div>
                            <TextField
                                id="title"
                                {...register('title', { required: true })}
                                label="TITLE"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                            <TextField
                                inputProps={{
                                    step: 0.01,
                                }}
                                type='number'
                                id="price"
                                {...register('price', { required: true })}
                                label="PRICE"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="description"
                                {...register('description', { required: true })}
                                label="DESCRIPTION"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                            <TextField
                                id="image"
                                {...register('image', { required: true })}
                                label="IMAGE"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                select
                                id="category"
                                {...register('category', { required: true })}
                                label="CATEGORY"
                                helperText="Incorrect entry."
                                variant="filled"
                            >
                                <MenuItem value="men's clothing">MEN</MenuItem>
                                <MenuItem value="women's clothing">WOMEN</MenuItem>
                                <MenuItem value="jewelery">JEWELERY</MenuItem>
                                <MenuItem value="electronics">ELECTRONICS</MenuItem>
                            </TextField>
                        </div>
                        <Button type="submit" sx={{ width: '600px', margin: '30px', padding: '15px' }} variant="contained" color="success" startIcon={<AddCardIcon />} >
                            <Typography variant="subtitle1">
                                update
                            </Typography>
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default Update;