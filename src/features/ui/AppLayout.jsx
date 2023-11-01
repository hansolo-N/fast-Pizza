import React from 'react'
import Header from './Header'
import CartOverview from '../cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

function AppLayout() {

    const navigation = useNavigation()
    const isLoading = navigation.state ==='loading'
  return (
    
    <div className='grid grid-rows-[auto_1fr_auto]  grid-gap-4 h-screen'>
        {isLoading && <Loader/>}
        <Header/>
        <main className='overflow-scroll'>
            <Outlet/>
        </main>
        <CartOverview/>
    </div>

  )
}

export default AppLayout