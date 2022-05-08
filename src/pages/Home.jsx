import React from 'react'
import Category from '../comp/Category'
import Slide from '../comp/Slide'
import Topbar from '../comp/Topbar'

const Home = () => {
  return (
    <div className='Home'>
      <Topbar/>
      <Category/>
      <Slide/>
    </div>

  )
}

export default Home