import { createSlice } from "@reduxjs/toolkit"

const initialState = 'all'

const сategoriesSlices = createSlice({
    name: 'сategories',
    initialState,
    reducers: {
        changeFilter: (_, action) => action.payload,
    },
})
export const { changeFilter } = сategoriesSlices.actions;

export default сategoriesSlices.reducer