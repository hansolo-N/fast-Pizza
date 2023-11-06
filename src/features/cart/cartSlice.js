import { createSlice } from "@reduxjs/toolkit"


const initialState = {
cart:[

]
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers:{
        addItem(state,action){
            //payload = newItem
            state.cart.push(action.payload)
        },
        removeItem(state,action){
            //payload = itemId
            state.cart = state.cart.filter((item)=>item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state,action){
            const item = state.cart.find((item)=> item.id === action.payload)
            item.quantity++;
            item.totalPrice = item.unitPrice * item.quantity
        },
        decreaseItemQuantity(state,action){
            const item = state.cart.find((item)=> item.id === action.payload)
            item.quantity--;
            item.totalPrice = item.unitPrice * item.quantity
        },
        clearCart(state){
            state.cart = []
        },

    }
})

export default cartSlice.reducer

export const {addItem,removeItem,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions

export const getTotalQuantity=(state)=>state.cart.cart.reduce((sum,item)=>sum + item.quantity,0)

export const getTotalCartPrice=(state)=>state.cart.cart.reduce((sum,item)=>sum + item.totalPrice,0)

export const getCart=(state)=>state.cart.cart
