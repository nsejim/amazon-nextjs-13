
import { Product } from '@/models/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    items: Product[]
} = {
    items: []
};

const catalogSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, {payload}: {payload: Product[]}) => {
            payload.forEach(product => {
                if (state.items.find(p => p.id !== product.id)) {
                    state.items.push(product)
                }
            })
        }
    }
})


export const { addProducts } =  catalogSlice.actions;
export default catalogSlice.reducer;