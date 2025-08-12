import { Route, Routes } from "react-router";
import { PuzzleContextProvider } from "./context/puzzleContext";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";
import Records from "./pages/Records";

function App() {
  return (
    <PuzzleContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Records" element={<Records />} />
        </Route>
      </Routes>
    </PuzzleContextProvider>
  );
}

export default App;
