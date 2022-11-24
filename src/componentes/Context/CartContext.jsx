import React from 'react'
import {createContext} from 'react'
import { useState } from 'react'
export const cartContext = createContext()
export function CartContextProvider({children}){
  const [cart, setCart] = useState([])
  function addToCart(product,count){
    let newCart = cart.map(item => item)
    product.count = count
      newCart.push(product)
      setCart(newCart)
  }
  return (<cartContext.Provider value={{ cart, addToCart}}>{children}</cartContext.Provider>)
}
