import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() { 
  const totalCartQuantity = useSelector(getTotalQuantity)

  const totalCartPrice = useSelector(getTotalCartPrice)

  if(!totalCartQuantity) return null

  return (
    <div className='bg-red-700 text-stone-50 p-4 uppercase md:text-base sm:px-6 flex items-center justify-between'>
      <p className=" text-neutral-50 font-semibold uppercase space-x-4 sm:space-x-6 ">
        <span >{totalCartQuantity} pizzas</span>
        <span >R{totalCartPrice}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
