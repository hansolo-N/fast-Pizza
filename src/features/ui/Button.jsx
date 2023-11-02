import React from 'react'

function Button({children,disabled,to}) {

  const className = "bg-red-600 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-red-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-600 focus:bg-red-600 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"



  if(to) return <Link to={to} className={className}>{children}</Link>
  
  return (
    <button disabled={disabled}className={className}>{children}
    </button>
  )
}

export default Button