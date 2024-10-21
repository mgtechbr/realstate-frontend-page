import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Body from "../components/Layout/Body";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
