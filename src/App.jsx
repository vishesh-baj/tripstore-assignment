import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";
const App = () => {
  return (
    <div>
      <Routes>
        {ROUTES.map(({ key, path, Element }) => {
          return <Route key={key} path={path} element={Element} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
