import React from 'react'
import {createContext} from 'react'
import { useState } from 'react'
export const cartContext = createContext()
export function CartContextProvider({children}){
  const [cart, setCart] = useState([])
  function addToCart(products,count){
    console.log(products, count)
    let itemAlreadyInCart = cart.findIndex(itemInCart=>itemInCart.id=== products.id)
    let newCart = [...cart]
    if(itemAlreadyInCart !== -1){
      newCart[itemAlreadyInCart ].count += count;
      setCart(newCart)
    }
    else{
  
    products.count = count
      newCart.push(products)
      setCart(newCart)
      console.log(cart)}
  }
  function itemsincart(cart){
    let total= 0
    cart.forEach(itemincart => total= total + itemincart.count)
    return total
  }
  function clearItem(){
     let newCart = []
    setCart(newCart)
    console.log(cart)
  }
  

  return (<cartContext.Provider value={{ cart, addToCart, itemsincart, clearItem}}>{children}</cartContext.Provider>)
}
