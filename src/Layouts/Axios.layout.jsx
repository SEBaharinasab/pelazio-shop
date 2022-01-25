import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import routes from '../Router/Axios.routes';

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
