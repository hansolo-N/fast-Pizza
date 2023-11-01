import { Link } from "react-router-dom";


function CartOverview() {
  return (
    <div className='bg-red-700 text-stone-50 p-4 uppercase md:text-base sm:px-6'>
      <p className=" text-neutral-50 font-semibold uppercase space-x-4 sm:space-x-6 ">
        <span >23 pizzas</span>
        <span >$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
