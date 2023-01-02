import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
  name: 'userslice',
  initialState: {
    login:false,
    userinfo:{
      
    },
    candidate_data:{

    },
    // carts:[]
  },
  reducers: {
    setlogin:(state)=>{
      state.login=true
    },
    logout:(state)=>{
      state.login=false
      localStorage.setItem("flip_kart_login",false)
      localStorage.removeItem("flipUser")
    },
    setuserinfo:(state,action)=>{
      state.userinfo=action.payload
      console.log(state.userinfo);
    },
    setCandidateInfo:(state,action)=>{
      state.candidate_data=action.payload
      console.log("m",state.candidate_data);
    },
    // set_carts:(state,action)=>{
    //   state.carts=action.payload
    // }
  },
})
export const log=(userData)=>async (dispatch)=>{
  const {data} = await axios.post('http://localhost:5000/login',JSON.stringify(userData))
        console.log(data);
        if(data.sta=='sucks'){
          dispatch(setlogin())
          dispatch(setCandidateInfo(data))
          // dispatch(set_carts(JSON.parse(data.karts)))
            localStorage.setItem("flip_kart_login",true)
            localStorage.setItem("flipUser",JSON.stringify(data))
            dispatch(setCandidateInfo(JSON.parse(localStorage.getItem("flipUser"))))

        }
        else{
          alert("please enter correct data")
        }
}
export const register=async (reg)=>{
  try{
  const {data} = await axios.post('http://localhost:5000/create_account',JSON.stringify(reg))
  console.log(data);
  alert("Registration Success! Click to login");}
  catch(error){
    alert(error.message)
  }
}
export const place_orders=async (address,carts)=>{
  try{
    const {data} = await axios.post('http://localhost:5000/create_account',JSON.stringify())
    console.log(data);}
    catch(error){
      alert(error.message)
    }
}
export const { setlogin,logout, setuserinfo, setCandidateInfo, set_carts} = userSlice.actions

export default userSlice.reducer