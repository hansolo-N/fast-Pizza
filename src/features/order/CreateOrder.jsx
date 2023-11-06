
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from "react";
import { createOrder } from "../services/apiRestaurant";
import {formatCurrency} from '../utilities/helpers'
import { clearCart, getCart, getTotalCartPrice,} from "../cart/cartSlice";
import Button from "../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


  function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((store)=>store.user.username)
  const navigation = useNavigation()
  const isSubmitting = navigation.state ==='submitting'

  const formErrors = useActionData()


  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice)
  const priorityPrice = withPriority? totalCartPrice * (0.2) :0
  const totalPrice = totalCartPrice + priorityPrice

  if(cart.length===0) return <EmptyCart/>

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>
      {/* Form method="POST" action="" */}
      <Form method="POST" action="">

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 ">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required  className="input w-full"/>
          </div>
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-red-600 text-stone-950"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button type = 'primary' disabled={isSubmitting} 
          >
            {
              isSubmitting?`Placing Order`: `Order now from ${formatCurrency(totalPrice)}`
            }
            </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
  const formData = await request.formData()

  const data = Object.fromEntries(formData)

  console.log(data)

  const order = {...data,cart:JSON.parse(data.cart),priority:data.priority ==="true"}

  const errors = {}

  if(!isValidPhone(order.phone)) errors.phone = "please submit a valid phone number in case we need to contact you";

  if(Object.keys(errors).length >0) return errors

  //if there are no errors in form create the order and redirect
  const newOrder = await createOrder(order)

    store.dispatch(clearCart())


return redirect(`/order/${newOrder.id}`)
}



export default CreateOrder;
