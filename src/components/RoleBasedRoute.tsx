import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UserDashboard from "../pages/UserDashboard";
import NurseDashboard from "../pages/NurseDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";

const RoleBasedRoute: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
    case "user":
      return <UserDashboard />;
    case "nurse":
      return <NurseDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    default:
      return <Navigate to="/login" />;
  }
};

export default RoleBasedRoute;
