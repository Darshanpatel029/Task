import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:id" element={<UserDetail />}></Route>
    </Routes>
  );
}

export default App;
