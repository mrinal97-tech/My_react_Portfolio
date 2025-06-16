import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import {Experience} from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero"; 
import {About} from "./components/About/About";// ✅ Add this

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;

