import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom';

import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Navbar } from "./components/navbar/navbar";
import CaseStudy1 from './components/CaseStudy/CaseStudy1';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/casestudy" element={<CaseStudy1 />} />
      </Routes>
    </div>
  );
}

export default App;
