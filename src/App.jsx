import { Route, Routes } from "react-router";
import { PuzzleContextProvider } from "./context/PuzzleContext";
import { Home, Contact, Records } from "./pages";
import MainLayout from "./layouts/MainLayout";

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
