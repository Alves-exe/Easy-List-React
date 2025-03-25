import { useSearchParams } from "react-router-dom";

function Forgot_Password() {
  const [SearchParams] = useSearchParams();
  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-white">Page</h1>
    </div>
  );
}

export default Forgot_Password;
