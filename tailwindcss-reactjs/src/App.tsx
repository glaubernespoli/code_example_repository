import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="h-screen text-white bg-black bg-opacity-90 text-opacity-90">
      <Navbar />
      <Hero />
    </div>
  );
}
export default App;
