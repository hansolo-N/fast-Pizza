import { createSlice } from "@reduxjs/toolkit"


const initialState = {
cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers:{

    }
})

export default cartSlice.reducer

export {} from cartSlice.actions