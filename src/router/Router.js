import React from 'react'
import Home from '../components/Home/Home';
import Login from "../components/Login/Login";
import Attend from '../components/Attend/Attend';
import DetailMovie from '../components/DetailMovie/DetailMovie';
import { Routes, Route } from 'react-router-dom'
import PrivateRouter from '../utils/PrivateRouter';

function Router() {
     return (
          <div>
               <Routes>
                    <Route element={<PrivateRouter check={['false','true']}/>}>
                         <Route path='/' element={<Home />} />
                         <Route path='/attend' element={<Attend />} />
                         <Route path='/detail/:detailId' element={<DetailMovie />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route>404 Not Found!</Route>
               </Routes>
          </div>
     )
}

export default Router