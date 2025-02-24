import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    payableAmount: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const {id,name,price} = action.payload;
            const existingItem = state.items.find(item=>item.id===id);

            if(existingItem){
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            }
            else{
                state.items.push({
                    id,name,price,
                    quantity:1,
                    totalPrice:price
                });
            }
            state.payableAmount = state.items.reduce((total,item)=>total+item.totalPrice,0);
        },

        removeFromCart(state,action){
            const itemId = action.payload;
            const itemToRemove = state.items.find(item=>item.id===itemId);

            if(itemToRemove){
                state.items = state.items.filter(item=>item.id!==itemId);
                state.payableAmount -= itemToRemove.totalPrice;
            }
        },

        updateQuantity(state,action){
            const {id,quantity} = action.payload;
            const itemToUpdate = state.items.find(item=>item.id===id)

            if(itemToUpdate){
                itemToUpdate.quantity = quantity;
                itemToUpdate.totalPrice = quantity*itemToUpdate.price
                state.payableAmount = state.items.reduce((total,item)=>total+item.totalPrice,0)
            }
        },

        clearCart(state){
            state.items=[]
            state.payableAmount=0
        }
    }
})

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer