import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../order/SearchOrder'
import Username from '../user/Username'

function Header() {
  return (
    <header className='flex items-center justify-between bg-red-700 px-4 py-3 uppercase border-b-8 border-stone-950 sm:px-6'>
        <Link to="/" className='tracking-[.5rem]'>Nasr's Pizza Co.</Link>
        <SearchOrder/>
        <Username/>
    </header>
  )
}

export default Header