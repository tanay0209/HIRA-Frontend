import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload
            const product = state.cartItems.findIndex(currProduct => currProduct.id === productToAdd.id)
            if (product !== -1) {
                console.log("Already exists");
                return
            }
            state.cartItems.push(action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            if (item) {
                item.quantity++
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity--
            } else if (item && item.quantity === 1) {
                state.cartItems = state.cartItems.filter(product => product.id !== action.payload)
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },

    }
})

export const { addToCart, removeFromCart, setCartItems, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
