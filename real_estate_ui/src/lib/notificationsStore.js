import { create } from 'zustand'
import apiRequest from './apiRequest'

export const useNotficationsStore = create((set) => ({
  number: 0,
  fetch: async()=> {
    const res=await apiRequest("/users/notification"+number);
    set({number:res.data})
  },
  decrease:()=>{
    set((prev)=>({number:prev.number-1}))
  },
  reset:()=>{
    set({number:0})
  }
  
}))