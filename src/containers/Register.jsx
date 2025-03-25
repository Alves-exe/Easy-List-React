import { useNavigate } from "react-router-dom";
import Input_Login from "../components/Input-Login";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Fill in all fields");
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords don't match");
      return;
    }
    setError("");
    navigate("/");
    alert("Registered successfully");
  };
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-start mb-6 space-x-4">
          <img src="/Logo.png" alt="Easy List Logo" className="w-28 h-28" />
          <h1 className="text-green-500 text-2xl font-bold">Register</h1>
        </div>
        <label className="text-white text-sm">Name</label>

        <Input_Login
          type="text"
          placeholder="Insert your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="text-white text-sm">E-mail</label>

        <Input_Login
          type="email"
          placeholder="Insert your e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="text-white text-sm">Password</label>

        <Input_Login
          type="password"
          placeholder="Insert your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <label className="text-white text-sm">Confirm your password</label>

        <Input_Login
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mt-3"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
