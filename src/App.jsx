import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./Contexts/ThemeContext";
import { useContext } from "react";

function App() {

  const {isDark} = useContext(ThemeContext);

  return (
      <div className={`app light}`}>
        <Navbar />
        <main >
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default App;

