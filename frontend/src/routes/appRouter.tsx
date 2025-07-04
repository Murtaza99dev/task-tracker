import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../auth/authprovider";
import Login from "../pages/login";
import Register from "@/pages/register";
import Dashboard from "@/pages/dashboard";
import HomePage from "@/pages/home";


export default function AppRoutes() {
  const { token } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
}
