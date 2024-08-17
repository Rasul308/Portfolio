import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ArrowButton from './components/ArrowButton';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Subscribe from './pages/Subscribe';
import Skills from './pages/Skills';
import Lang from './components/Lang';

const App = () => {

  return (
      <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/" element={<ArrowButton />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/lang" element={<Lang />} />
            </Routes>
          <Footer />
      </Router>
  );
};

export default App;
