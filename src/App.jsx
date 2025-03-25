import { CirclePlus, CircleCheck } from "lucide-react";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src="/Logo.png"
          alt="Logo pagina principal"
          className="w-28 h-28"
        />
        <h1 className="text-green-500 text-2xl font-bold mt-4">
          Shopping List
        </h1>
        <div className="flex items-center justify-center p-20 mt-20 space-x-20">
          <CirclePlus className="text-green-500 size-12" />
          <CircleCheck className="text-green-500 size-12" />
        </div>
      </div>
    </div>
  );
}
export default App;
