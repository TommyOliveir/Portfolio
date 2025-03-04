import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<p>About</p>} />
          <Route path="skills" element={<p>Skills</p>} />
          <Route path="contact" element={<p>contact</p>} />
          <Route path="*" element={<p>no found page</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
