import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ key, path, Element }) => {
          return <Route path={path} key={key} element={<Element />} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
