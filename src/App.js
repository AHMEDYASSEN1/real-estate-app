import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp"
import Properties from "./pages/Properties/Properties";
import Property from "./pages/Property/Property";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/properties">
            <Route index element={<Properties/>}></Route>
            <Route path="/properties/:porpertyId" element={<Property/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
