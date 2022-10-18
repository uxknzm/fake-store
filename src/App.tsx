import React from 'react';
import './style.css'
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import AppRouter from './component/AppRouter/AppRouter';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
