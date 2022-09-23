import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

describe('Testing App components', () => {
  test('Rendering the Header component', () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  test('Rendering the App component', () => {
    const component = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  test('Rendering the Footer component', () => {
    const component = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
