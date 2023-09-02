import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home,Room} from '../pages';

export const RoutesApp: React.FC = () => {
  return (
        <Routes>
            <Route element={<Home />} path='/'  />
            <Route element={<Room />} path='/room/:sala_uuid'  />
           
            <Route element={<Home />} path='*'  />
        </Routes>
  )
}