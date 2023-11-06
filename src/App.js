import React from 'react';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material'

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
<Box width="400px" sx={{ width: { xl: '1488'}}} m='auto'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail />}></Route>
    </Routes>
    <Footer></Footer>
</Box>
  )
}

export default App