import React from 'react'
import Button from '../ui/Button'
import { increaseItemQuantity,decreaseItemQuantity } from './cartSlice'
import { useDispatch } from 'react-redux'

function UpdateItemQuantity({pizzaId,currentQuantity}) {
    const dispatch = useDispatch()
  return (
        <div className=' flex gap-1 items-center md:gap-3'>
        <Button type="round" handleClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <p className='text-sm font-medium'>{currentQuantity}</p>
        <Button type= "round" handleClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
  )
}

export default UpdateItemQuantity