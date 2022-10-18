import { RootState } from './../store';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



type Product = {
    id: number
    title: string
    price: number
    description: string
    image: string
    category: string
    rating: {
        rate: number
        count: number
    }
}

interface ProductSliceState {
    product: Product[]
    loading: Boolean
}

type SearchPizzaParams = number

type AddProduct = {
    title: string
    price: number
    description: string
    image: string
    category: string
}

type UpdateProduct = {
    id: number
    product: {
        title: string
        price: number
        description: string
        image: string
        category: string
    }
}


export const updateProduct = createAsyncThunk<any, UpdateProduct>(
    'product/updateProduct',
    async function ({ id, product }, { rejectWithValue, dispatch }) {
        try {

            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            debugger

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(update(data));

        } catch (error) {
            //@ts-ignore
            return rejectWithValue(error.message);
        }
    }
);

export const addNewProduct = createAsyncThunk<any, AddProduct>(
    'product/addNewProduct',
    async function (product, { rejectWithValue, dispatch }) {
        try {

            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(addProduct(data));

        } catch (error) {
            //@ts-ignore
            return rejectWithValue(error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk<any, SearchPizzaParams>(
    'product/deleteProduct',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }

            dispatch(removeTodo({ id }));

        } catch (error) {
            //@ts-ignore
            return rejectWithValue(error.message);
        }
    }
);

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products?sort=desc`)
        return data
    })

const initialState: ProductSliceState = {
    product: [],
    loading: false
}

const productSlices = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.product.unshift(action.payload);
        },
        removeTodo(state, action) {
            state.product = state.product.filter(product => product.id !== action.payload.id);
        },
        update(state, action) {
            const toggledTodo = state.product.find(p => p.id === action.payload.id);
            if (toggledTodo) {
                toggledTodo.title = action.payload.title
                toggledTodo.category = action.payload.category
                toggledTodo.description = action.payload.description
                toggledTodo.image = action.payload.image               
                toggledTodo.price = action.payload.price               
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.product = []
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
            state.loading = false
        })
        builder.addCase(fetchProduct.rejected, (state) => {
            state.product = []
            state.loading = false
        })
    },
})
const { addProduct, removeTodo, update } = productSlices.actions;
export const selectProduct = (state: RootState) => state.product

export default productSlices.reducer