import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSate } from "react";
import "./App.css";
import HomePage from "./views/HomePage";
import TeamPage from "./views/TeamPage";
import ContactUsPage from "./views/ContactUsPage";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Dashboard from "./views/Dashboard";
import { Toaster } from "react-hot-toast";
import UserProfile from "./views/UserProfile";
import Analysis from "./views/Analysis";
import UserChat from "./views/UserChat";
import UserLogout from "./views/UserLogout";
import Shop from "./views/Shop";
import AdminDashboard from "./views/AdminDashboard";
import { useAuth } from "./context/AuthProvider";
import AdminProduct from "./views/AdminProduct";
import AdminChat from "./views/AdminChat";
import AdminPostGeneration from "./views/AdminPostGeneration";
import AdminLogout from "./views/AdminLogout";
import AdminProfile from "./views/AdminProfile";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/members" element={<TeamPage />} />
          <Route exact path="/contactUs" element={<ContactUsPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/chat" element={<AdminChat />} />
          <Route exact path="/admin/addproduct" element={<AdminProduct />} />
          <Route exact path="/admin/addpost" element={<AdminPostGeneration />} />
          <Route exact path="/admin/profile" element={<AdminProfile />} />
          <Route exact path="/admin/logout" element={<AdminLogout />} />
          <Route
            exact
            path="/dashboard"
            element={<Dashboard /> }
          />
          <Route
            exact
            path="/user/profile"
            element={ <UserProfile /> }
          />
          <Route
            exact
            path="/user/analysis"
            element={ <Analysis authUser={authUser} />}
          />
          <Route
            exact
            path="/user/chat"
            element={ <UserChat /> }
          />
          <Route
            exact
            path="/user/logout"
            element={ <UserLogout /> }
          />
          <Route
            exact
            path="/user/shop"
            element={ <Shop /> }
          />
          <Route
            exact
            path="/admin/dashboard"
            element={ <AdminDashboard /> }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
