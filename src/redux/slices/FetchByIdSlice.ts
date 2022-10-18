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

export type SearchPizzaParams = {
    id: string
}


export const fetchProductById = createAsyncThunk<ProductSliceState, SearchPizzaParams>(
    'product/fetchProductById',
    async (params) => {
        const {id} = params
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return data
    })

const initialState: ProductSliceState = {
    product: [],
    loading: false
}

const productIdSlices = createSlice({
    name: 'productId',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductById.pending, (state) => {
            state.product = []
            state.loading = true
        })
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            //@ts-ignore
            state.product = action.payload
            state.loading = false
        })
        builder.addCase(fetchProductById.rejected, (state) => {
            state.product = []
            state.loading = false
        })
    },
})

export const selectProductId = (state: RootState) => state.productId

export default productIdSlices.reducer