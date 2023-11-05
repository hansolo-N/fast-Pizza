import React from 'react'
import { useSelector} from 'react-redux/es/hooks/useSelector'

function Nasr() {
  const username = useSelector(state=>state.user.username)

  if(!username) return null

  return (
    <div className='text-sm font-semibold md:block'>{username}</div>
  )
}

export default Nasr