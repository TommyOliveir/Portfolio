import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../layout/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<p>Projects</p>} />
          <Route path="skills" element={<p>skills</p>} />
          <Route path="contact" element={<p>contact</p>} />
          <Route path="*" element={<p>no found page</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
