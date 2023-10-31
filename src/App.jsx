import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/ui/Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from './features/ui/AppLayout'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element : <Home/>,
      },
      {
        path:'/menu',
        element: <Menu/>
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
            element: <Order/>
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
