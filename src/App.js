import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import HomeBlock from "./HomeBlock";
import Contact from "./components/Home/Contact";
import Experience from "./components/Home/Experience";

import { WebPageTitle } from "./Text/ConstantText";

export default function App() {
  useEffect(() => {
    document.title = WebPageTitle;
  }, []);

  return (
    <Router>
      <Routes>
        {/* 父路由 */}
        <Route path="/" element={<Home />}>
          {/* 当访问 /parent 时，重定向到 /parent/child */}
          <Route index element={<Navigate to="/home" />} />
          {/* 子路由 */}
          <Route path="home" element={<HomeBlock />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* 其他路由 */}
      </Routes>
    </Router>
  );
}
