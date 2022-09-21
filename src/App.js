import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
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
}

export default App;
