import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";
const App = () => {
  return (
    <div>
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route key={route.key} path={route.path} element={route.Element} />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
