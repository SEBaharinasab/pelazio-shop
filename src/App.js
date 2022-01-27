import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "./Components/ThemeProvider";
import routes from "./Router/Web.routes";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<h5>loading...</h5>}>
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
        </Suspense>
      </Router>
    </ThemeProvider>

  );
}

export default App;
