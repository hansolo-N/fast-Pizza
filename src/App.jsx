import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './features/ui/Home'

createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path:''
  }
])

function App() {

  // const test = 12

  return (
<h1>test</h1>
  )
}

export default App
