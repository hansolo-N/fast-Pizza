import React from 'react'
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import Button from '../ui/Button';


function DeleteItem({pizzaId}) {
    const dispatch = useDispatch()

  return (
    <Button type = "small" handleClick={()=>dispatch(removeItem(pizzaId))}>remove Item</Button>
  )
}

export default DeleteItem