import { useSearchParams } from "react-router-dom";

function Register() {
  const [SearchParams] = useSearchParams();
  return (
    <div className="bg-black min-h-screen">
      <h1>Register Page</h1>
    </div>
  );
}

export default Register;
