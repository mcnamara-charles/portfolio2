import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';


const AppWithRouterAccess = () => {
  return (
  <>
    <header className='site-header'>  
    </header>
    <Routes>
      <Route path="/" exact element={<LandingPage/>}/>
    </Routes>
  </>
  )
}

export default AppWithRouterAccess;
