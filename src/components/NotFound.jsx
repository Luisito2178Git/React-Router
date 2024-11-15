import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const Navigate = useNavigate();

  return (
    <div>
      <h2>404 | Page not found</h2>
      <br />
      <button onClick={()=>{Navigate('/')}}>Go to Homepage</button>
    </div>
  )
}

export default NotFound