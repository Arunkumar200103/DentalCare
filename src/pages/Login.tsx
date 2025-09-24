import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { mockUsers, MockUser } from "../data/mockUsers";
import { Stethoscope } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Stethoscope className="h-8 w-8 text-sky-600" />
          <h1 className="text-2xl font-bold text-gray-800">DentalCare</h1>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
          Sign in to your account
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
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500 p-2"
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
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500 p-2"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition-colors font-medium"
          >
            Login
          </button>
        </form>

        {/* Demo accounts */}
        <div className="mt-8 bg-sky-50 rounded-lg p-4">
          <p className="text-sm text-gray-700 font-semibold mb-2">
            Demo Accounts
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              <span className="font-medium">User</span> – alice@demo.com / 123
            </li>
            <li>
              <span className="font-medium">Nurse</span> – nurse@demo.com / 123
            </li>
            <li>
              <span className="font-medium">Doctor</span> – doc@demo.com / 123
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
