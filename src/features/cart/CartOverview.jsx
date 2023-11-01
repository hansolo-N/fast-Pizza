import { Link } from "react-router-dom";


function CartOverview() {
  return (
    <div className='bg-red-700'>
      <p className=" text-neutral-50 font-semibold uppercase">
        <span >23 pizzas</span>
        <span >$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
