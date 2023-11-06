import React from 'react'
import { Link } from 'react-router-dom';

function Button({children,disabled,to,type,handleClick}) {


  const base = "bg-red-600 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-red-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-600 focus:bg-red-600 focus:ring-offset-2 disabled:cursor-not-allowed"

  
  const styles = {
    
    primary : base + ' px-4 py-3 md:px-6 md:py-4',
    secondary: "border-2 border-stone-300 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-600 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: base + ' px-4 py-2 md:px-5 md:py-2.5'
  }

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>

  if(handleClick){
    return (
      <button disabled={disabled}className={styles[type]} onClick={handleClick}>{children}</button>
    )
  }

  
  return (
    <button disabled={disabled}className={styles[type]}>{children}
    </button>
  )
}

export default Button