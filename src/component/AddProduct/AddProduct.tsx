import React from 'react';
import { useForm } from 'react-hook-form';
import { addNewProduct } from '../../redux/slices/ProductSlices';
import { useAppDispatch } from '../../redux/store';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import AddCardIcon from '@mui/icons-material/AddCard';

const AddProduct = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset, formState } = useForm();
    const submitForm = (product: any) => {
        console.log(product)
        dispatch(addNewProduct(product))
    }
    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset]);
    return (
        <Box
            sx={{
                padding: '100px',
                textAlign: 'center',
                marginTop: '100px',
                marginBottom: '100px',
                '& .MuiTextField-root': { m: 2, width: '40ch' },
                // backgroundColor: 'gray'
            }}
        >
            <Typography variant="h5" gutterBottom>
                ADD NEW PRODUCT
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
                <Button type="submit" sx={{ width: '600px', margin: '30px', padding: '15px' }} variant="contained" color="secondary" startIcon={<AddCardIcon />}>
                    <Typography variant="subtitle1">
                        add
                    </Typography>
                </Button>
            </form>
        </Box>
        // <form onSubmit={handleSubmit(submitForm)}>
        //     <div classNameName='login'>
        //         <h1>Add product</h1>
        //         <div classNameName='login-inputs'>
        //             <input classNameName='input-login' id="title" placeholder='title' type='text' {...register('title', {
        //                 required: true
        //             })} />
        //             <input classNameName='input-login' id="price" placeholder='price' type='number' {...register('price', {
        //                 required: true,
        //             })} />
        //             <input className='input-login' id="description" placeholder='description' type='text' {...register('description', {
        //                 required: true
        //             })} />
        //             <input className='input-login' id="image" placeholder='image' type='text' {...register('image', {
        //                 required: true,
        //             })} />
        //             <select {...register("category")}>
        //                 <option value="men's clothing">men's</option>
        //                 <option value="women's clothing">women's</option>
        //                 <option value="jewelery">jewelery</option>
        //                 <option value="electronics">electronics</option>
        //             </select>
        //             <button className='btn-login' type="submit" >Add</button>
        //         </div>
        //     </div>
        // </form>
    );
};

export default AddProduct;