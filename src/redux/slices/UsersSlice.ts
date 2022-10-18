import { RootState } from './../store';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



type Users = {
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

interface UsersSliceState {
    users: Users[]
    loading: Boolean
}

type UserDeleteParams = number

export const deleteUser = createAsyncThunk<any, UserDeleteParams>(
    'users/deleteUser',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }

            dispatch(removeUser({ id }));

        } catch (error) {
            //@ts-ignore
            return rejectWithValue(error.message);
        }
    }
);
export const fetchUser = createAsyncThunk(
    'product/fetchUser',
    async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/users`)
        return data
    })

const initialState: UsersSliceState = {
    users: [],
    loading: false
}

const usersSlices = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.users = []
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.users = []
            state.loading = false
        })
    },
})
const { removeUser } = usersSlices.actions;
export const selectUsers = (state: RootState) => state.users

export default usersSlices.reducer