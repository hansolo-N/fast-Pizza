import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../order/SearchOrder'

function Header() {
  return (
    <header>
        <Link to="/">Nasr's Pizza Co.</Link>
        <SearchOrder/>
        <p>Nasr</p>
    </header>
  )
}

export default Header