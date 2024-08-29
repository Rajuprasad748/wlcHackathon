import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import TeamPage from "./views/TeamPage";
import ContactUsPage from "./views/ContactUsPage";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Dashboard from './views/Dashboard';
import { Toaster } from 'react-hot-toast';
import UserProfile from "./views/UserProfile";
import Analysis from "./views/Analysis";
import UserChat from "./views/UserChat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/members" element={<TeamPage />} />
          <Route exact path="/contactUs" element={<ContactUsPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/user/profile" element={<UserProfile />} />
          <Route exact path="/user/analysis" element={<Analysis />} />
          <Route exact path="/user/chat" element={<UserChat />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
