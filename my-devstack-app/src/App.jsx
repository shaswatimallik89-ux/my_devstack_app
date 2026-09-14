import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  const handleAddTechnology = (technology) => {
    const alreadyAdded = selectedStack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setSelectedStack([...selectedStack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemoveTechnology = (id) => {
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack(
      selectedStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies
          technologies={technologies}
          selectedStack={selectedStack}
          loading={loading}
          onAddTechnology={handleAddTechnology}
          onRemoveTechnology={handleRemoveTechnology}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;