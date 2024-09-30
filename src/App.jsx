import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Projects from "./components/projects";
import Learn from "./components/learn";
import Contact from "./components/contact";
import Spinner from "./components/Spinner"; // Adjust the path as necessary

function App() {
  const [loading, setLoading] = useState(true); // State to control loading

  useEffect(() => {
    // Simulate a data fetching operation or some delay
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setLoading(false); // Set loading to false when done
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner /> // Show the spinner while loading
      ) : (
        <>
          <Navigation />
          <Home />
          <About />
          <Work />
          <Projects />
          <Learn />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
