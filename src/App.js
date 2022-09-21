import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
