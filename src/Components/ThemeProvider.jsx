import React from 'react';
import { useSelector } from 'react-redux';

function ThemeProvider({ children }) {
   const darkModeClass = useSelector(state => state.theme.darkMode);
   return (<>
      <div className={(darkModeClass ? ' dark' : ' light')}>
         <div className={'min-h-screen bg-gray-100 dark:bg-slate-900 '}>
            {children}
         </div>
      </div>
   </>);
}

export default ThemeProvider;
