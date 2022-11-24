import React from 'react'
import {createContext} from 'react'
import { useState } from 'react'
export const cartContext = createContext()
export function CartContextProvider({children}){
  const [cart, setCart] = useState([])
  function addToCart(product,count){

  }
  return (<cartContext.Provider value={{ cart, addToCart}}>{children}</cartContext.Provider>)
}
