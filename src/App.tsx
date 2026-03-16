import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
      <Box sx={{ background: "#0b0f19", minHeight: "100vh" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
  );
}

export default App;