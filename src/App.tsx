import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="blogs" element={<p>blogs</p>} />
        <Route path="contact" element={<p>contact</p>} />
        <Route path="*" element={<p>no found page</p>} />
      </Route>
    </Routes>

  </BrowserRouter>
  );
}

export default App;
