import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to="/">Nasr's Pizza Co.</Link>
        <p>Nasr</p>
    </header>
  )
}

export default Header