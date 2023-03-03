import React from 'react'
import Home from '../components/Home/Home';
import Login from "../components/Login/Login";
import Attend from '../components/Attend/Attend';
import DetailMovie from '../components/DetailMovie/DetailMovie';
import DetailNavbar from '../components/DetailMovie/DetailNavbar';
import { Routes, Route } from 'react-router-dom'

function Router() {
     return (
          <div>
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/attend' element={<Attend />} />
                    <Route path='/detailmovie' element={<DetailMovie />}/>
                    <Route path='/detailnavbar' element={<DetailNavbar />}/>
                    <Route>404 Not Found!</Route>
               </Routes>
          </div>
     )
}

export default Router