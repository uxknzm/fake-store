import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store"

interface UserSliceState {
    loading: boolean
    userToken: {} | null
}
export type AuthUserParams = {
    login: string
    password: string
}

export const userLogin = createAsyncThunk<UserSliceState, AuthUserParams>(
    'user/login',
    async ({ login, password }) => {
            const { data } = await axios.post(
                'https://fakestoreapi.com/auth/login',
                { username: login, password: password },
            )
            localStorage.setItem('userToken', data.token)
            return data
    })

const initialState: UserSliceState = {
    loading: false,
    userToken: localStorage.getItem('userToken') ?? null,
}

const userSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
        exit: (state) => {
            localStorage.removeItem('userToken')
            state.userToken = null
          },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false
                state.userToken = action.payload
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.loading = false
        })
    },
})

export const selectUser= (state: RootState) => state.user

export const { exit } = userSlices.actions

export default userSlices.reducer