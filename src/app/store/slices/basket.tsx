import { Product } from "@/models/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, {payload}: {payload: Product}) => {
            state.push(payload);
        },
        removeFromBasket: (state, {payload}: {payload: {id: number}}) => {
            const idx = state.findIndex(product => product.id === payload.id)
            return state.filter((product, id) => id !== idx)
        } 
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;