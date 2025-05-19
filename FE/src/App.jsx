import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";
import Basket from "./Pages/Basket";
import Add from "./Pages/Add";
import Admin from "./Pages/Admin";
import Whislist from "./Pages/Whislist";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="basket" element={<Basket />} />
          <Route path="addadmin" element={<Add />} />
          <Route path="admin" element={<Admin />} />
          <Route path="whislist" element={<Whislist />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
