import React from 'react';
import { useSelector } from 'react-redux';

function ThemeProvider({ children }) {
   const darkModeClass = useSelector(state => state.theme.darkMode);
   return (<>
      <div className={darkModeClass ? 'dark' : 'light'}>
         {children}
      </div>
   </>);
}

export default ThemeProvider;
