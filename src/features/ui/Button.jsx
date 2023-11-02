import React from 'react'

function Button({children,disabled}) {
  return (
    <button disabled={disabled} className="bg-red-600 
    uppercase font-semibold
     text-stone-800 py-3 px-4 inline-block tracking-wide 
     rounded-full hover:bg-red-400 
     transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-600 focus:bg-red-600 focus:ring-offset-2
     disabled:cursor-not-allowed">
        {children}
    </button>
  )
}

export default Button