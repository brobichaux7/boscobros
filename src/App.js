import { Routes, Route, Navigate } from "react-router-dom";
import BrandDisplay from "./views/BrandDisplay";
import Home from "./views/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<BrandDisplay />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
