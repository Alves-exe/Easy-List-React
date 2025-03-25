import { useNavigate } from "react-router-dom";
import Input_Login from "../components/Input-Login";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email || !password.trim()) {
      setError(true);
      return;
    }
    setError(false);
    navigate("/main");
  };

  const navigate = useNavigate();

  function ForgotPasswordPage() {
    navigate("/forgot-password");
  }
  function RegisterPage() {
    navigate(`/register-page`);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-start mb-6 space-x-4">
          <img src="/Logo.png" alt="Easy List Logo" className="w-28 h-28" />
          <h1 className="text-green-500 text-2xl font-bold">Login</h1>
        </div>

        <label className="text-white text-sm">E-mail</label>
        <Input_Login
          type="email"
          placeholder="Insert your e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {error && !email && (
          <p className="text-red-500 text-xs">Fill all in fields</p>
        )}

        <label className="text-white text-sm mt-2">Password</label>
        <Input_Login
          type="password"
          placeholder="Insert your password"
          value={password.trim()}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && !password && (
          <p className="text-red-500 text-xs">Fill all in fields</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mt-3"
        >
          Login
        </button>

        <div className="flex justify-between text-sm mt-4">
          <button
            onClick={() => ForgotPasswordPage()}
            className="text-gray-400 hover:text-white"
          >
            Forgot password
          </button>
          <button
            onClick={() => RegisterPage()}
            className="text-blue-400 hover:text-blue-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
