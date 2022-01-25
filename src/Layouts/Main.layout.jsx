import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../Router/Main.routes';

function Layout() {
   return (
      <>
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
      </>
   );
}

export default Layout;
