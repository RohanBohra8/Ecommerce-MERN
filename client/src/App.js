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
import AdminRoute from "./components/Rotues/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/product/:slug" element={<ProductDetails></ProductDetails>} />
        <Route path="/categories" element={<Categories></Categories>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="/category/:slug" element={<CategoryProduct></CategoryProduct>} />
        <Route path="/search" element={<Search></Search>} />
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>} />
          <Route path="user/orders" element={<Orders></Orders>} />
          <Route path="user/profile" element={<Profile></Profile>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route path="admin" element={<AdminDashboard></AdminDashboard>} />
          <Route path="admin/create-category" element={<CreateCategory></CreateCategory>} />
          <Route path="admin/create-product" element={<CreateProduct></CreateProduct>} />
          <Route path="admin/product/:slug" element={<UpdateProduct></UpdateProduct>} />
          <Route path="admin/products" element={<Products></Products>} />
          <Route path="admin/users" element={<Users></Users>} />
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
