import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

function PrivateRouter({check}) {
     let auth = {'token': check[1]}
  return (
    auth.token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter