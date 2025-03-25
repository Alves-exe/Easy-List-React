import { useState } from "react";
import Input_Login from "../components/Input-Login";
import { useNavigate } from "react-router-dom";

function Forgot_Password() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgot = () => {
    if (email.trim() === "") {
      setError("Fill the field");
      return;
    }
    setError("");
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-start mb-6 space-x-4">
          <img
            src="./public/Logo.png"
            alt="Easy List Logo"
            className="w-28 h-28"
          />
          <h1 className="text-green-500 text-2xl font-bold">Reset Password</h1>
        </div>
        <label type="text" className="text-white text-sm">
          E-mail
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Input_Login
          type="email"
          placeholder="Insert your e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          onClick={handleForgot}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mt-3"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Forgot_Password;
