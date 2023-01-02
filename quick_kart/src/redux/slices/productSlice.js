import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { json } from 'react-router-dom';
import products from './products.json';

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    product:[],
    carts:[],
    totalprice:0

  },
  reducers: {
    setProducts:(state,action)=>{
      state.product=action.payload
    },
    set_carts:(state,action)=>{
      state.carts=action.payload
      console.log(state.carts);
    },
    remove_carts:(state,action)=>{
        let a=state.carts.splice(action.payload,1)
        state.carts=a
    },
    setTotalPrice:(state,action)=>{
      state.totalprice=action.payload
    },
  },
})
export const add_kart=(item,id)=>async(dispatch)=>{
    console.log("emailid",id);
    const response=await axios.post('http://localhost:5000/add_kart',JSON.stringify({karts:item,email:id}))
    console.log(response);

}
export const {set_carts, remove_carts, setTotalPrice, setProducts } = productSlice.actions

export default productSlice.reducer