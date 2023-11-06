
import LinkButton from '../ui/LinkButton';
import Button from '../ui/Button';
import CartItem from './CartItem'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { getCart } from './cartSlice';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart'


function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((store)=>store.user.username)
  const dispatch = useDispatch()

  console.log(cart)

  if(!cart.length){
    return <EmptyCart/>
  }

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" className='text-sm text-blue-500 hover:text-blue-700 hover:underline'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart,{username}</h2>
      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map(item=><CartItem item={item} key={item.pizzaId}/>)}
      </ul>
      
      <div className='mt-7 space-x-2'>
        <Button to="/order/new" type='primary'>Order pizzas</Button>
        <Button type='secondary' handleClick={()=>dispatch(clearCart())}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
