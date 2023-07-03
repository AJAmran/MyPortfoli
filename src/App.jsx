import Bannar from "./components/Bannar/Bannar";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/features/Features";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./contract/Contact";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-6">
        <div className="container mx-auto">
          <Navbar />
          <Bannar />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
