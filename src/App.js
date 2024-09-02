import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlaskBottle from "./pages/FlaskBottle";
import BoxSphere from "./pages/BoxSphere";
import LogoSphere from "./pages/LogoSphere";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<FlaskBottle/>}/>
          <Route path="/flask-bottle" element={<FlaskBottle/>}/>
          <Route path="/box-sphere" element={<BoxSphere/>}/>
          <Route path="/logo-sphere" element={<LogoSphere/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
