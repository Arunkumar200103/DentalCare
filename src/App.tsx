import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import Nurses from "./pages/Nurses";
import Patients from "./pages/Patients";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import RoleBasedRoute from "./components/RoleBasedRoute";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/nurses" element={<Nurses />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="/contact" element={<Contact />} />

              {/* Auth routes */}
              <Route path="/login" element={<Login />} />
              {/* RoleBasedRoute decides between User/Nurse/Doctor dashboards */}
              <Route path="/dashboard" element={<RoleBasedRoute />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
