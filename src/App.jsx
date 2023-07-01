import Bannar from "./components/Bannar/Bannar";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/features/Features";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-6">
        <div className="container mx-auto">
          <Navbar />
          <Bannar />
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
