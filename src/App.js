import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Router/Web.routes";

function App() {
  return (
    <>
      <h1>Pelazio Shop!</h1>
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
    </>

  );
}

export default App;
