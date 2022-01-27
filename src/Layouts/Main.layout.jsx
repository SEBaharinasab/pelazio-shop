import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import routes from '../Router/Main.routes';

function Layout() {
   return (
      <>
         <Navbar />
         <div className={"container mx-auto px-2"}>
         <Routes>
            {
               routes.map(({ path, exact, Component }, index) => (
                  <Route
                     key={index}
                     path={path + "/*"}
                     exact={exact}
                     element={<Component />}
                  />
               ))
            }
         </Routes>
         </div>
      </>
   );
}

export default Layout;
