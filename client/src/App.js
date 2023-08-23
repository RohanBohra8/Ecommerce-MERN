import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Rotues/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="" element={<Dashboard></Dashboard>} />
        </Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/policy" element={<Policy></Policy>} />
        <Route path="/*" element={<Pagenotfound></Pagenotfound>} />
      </Routes>
    </>
  );
}

export default App;
