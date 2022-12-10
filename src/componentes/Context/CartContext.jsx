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
  function itemsincart() {
    let total = 0
    cart.forEach(itemincart => total = total + itemincart.count)
    return total
  }
  function clearItem(){
     let newCart = []
    setCart(newCart)
  }
  function priceInCart(){
    const precioTotal = cart.reduce((acumulador,producto)=> acumulador + producto.price*producto.count, 0)
    return precioTotal
  }
  function removeItem(idToRemove){
    let newCart = cart.filter(itemInCart => (itemInCart.id !== idToRemove))
     setCart(newCart);
    }
  // function removeItem(idremove){
  //   const eliminarDelCarrito = cart.findIndex((borrar) => borrar.id === idremove)
  //   let newCart = cart.splice(eliminarDelCarrito, 1)
  //   setCart(newCart)
  //   console.log(newCart)
  //   console.log(eliminarDelCarrito)
  // }
  

  return (<cartContext.Provider value={{ cart, addToCart, itemsincart, clearItem, removeItem, priceInCart}}>{children}</cartContext.Provider>)
}
