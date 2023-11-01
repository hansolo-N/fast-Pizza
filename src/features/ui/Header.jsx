import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../order/SearchOrder'
import Username from '../user/Username'

function Header() {
  return (
    <header className='bg-red-700'>
        <Link to="/" className='tracking-[.5rem]'>Nasr's Pizza Co.</Link>
        <SearchOrder/>
        <Username/>
    </header>
  )
}

export default Header