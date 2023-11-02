import React from 'react'

function Button({children,disabled,to,type}) {


  const base = "bg-red-600 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-red-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-600 focus:bg-red-600 focus:ring-offset-2 disabled:cursor-not-allowed"

  const styles = {
    
    primary : base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5'
  }

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>
  
  return (
    <button disabled={disabled}className={styles[type]}>{children}
    </button>
  )
}

export default Button