import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/ui/Home'
import Menu,{loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order,{loader as orderLoader} from './features/order/Order'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from './features/ui/AppLayout'
import Error from './features/ui/Error'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path: '/',
        element : <Home/>,
      },
      {
        path:'/menu',
        element: <Menu/>,
        errorElement:<Error/>,
        loader: menuLoader
      },
      {
        path:'/cart',
        element :<Cart/>
      },
      {
        path: '/order',
        children: [
          {
            path: 'new',
            element: <CreateOrder/>
          },
          {
            path: ':orderId',
            element: <Order/>,
            loader: orderLoader
          }
        ]
      }

    ]
  }

])

function App() {

  // const test = 12

  return (
    <RouterProvider router={router}/>
  )
}

export default App
