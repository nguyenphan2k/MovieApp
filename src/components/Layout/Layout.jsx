import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../router/Router'

function Layout() {
  return (
    <div className='relative'>
      <Header />
      <div>
        <Router />
      </div >
      <Footer />
    </div>
  )
}

export default Layout