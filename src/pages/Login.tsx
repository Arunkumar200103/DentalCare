import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { mockUsers, MockUser } from "../data/mockUsers";
import { Brain } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser: MockUser | undefined = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      login(foundUser);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-6">
          <Brain className="h-10 w-10 text-indigo-600 animate-pulse" />
          <h1 className="text-2xl font-bold text-gray-800">DS Clinic</h1>
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Neuropsychiatry & De-addiction</span>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
          Sign in to Clinical System
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-2"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Demo accounts */}
        <div className="mt-8 bg-indigo-50 rounded-lg p-4 border border-indigo-100">
          <p className="text-sm text-indigo-900 font-semibold mb-2">
            Clinical Portal - Demo Credentials
          </p>
          <ul className="text-xs text-indigo-700 space-y-1.5">
            <li>
              <span className="font-semibold">Patient (User):</span> alice@demo.com / 123
            </li>
            <li>
              <span className="font-semibold">Counselor (Nurse):</span> nurse@demo.com / 123
            </li>
            <li>
              <span className="font-semibold">Chief Psychiatrist (Doctor):</span> doc@demo.com / 123
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
