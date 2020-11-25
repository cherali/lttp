import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='text-right'>
      <Link to='/category'>مشاهده دسته بندی</Link>
    </div>
  )
}

export default Home
