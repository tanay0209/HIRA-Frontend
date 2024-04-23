import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistedItems: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const product = state.wishlistedItems.findIndex(currProduct => currProduct.id === action.payload.id)
            if (product !== -1) {
                state.wishlistedItems = state.wishlistedItems.filter(product => product.id !== action.payload.id)
                localStorage.setItem('wishlisted', JSON.stringify(state.wishlistedItems));
                return
            }
            state.wishlistedItems.push(action.payload)
            localStorage.setItem('wishlisted', JSON.stringify(state.wishlistedItems));
        },
        setWishlistedItems: (state, action) => {
            state.wishlistedItems = action.payload
        },
    }
})

export const { addToWishlist, removeFromWishlist, setWishlistedItems } = wishlistSlice.actions

export default wishlistSlice.reducer