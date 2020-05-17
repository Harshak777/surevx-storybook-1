import React from 'react';

import Header from './components/Header/Header'
import Sidemenu from './components/sidemenu/Sidemenu';
import Article from './components/article/Article';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="main-cont">
      <Header />
        <div className="App">
          <Sidemenu />
          <Article />
        </div>
      <Footer />
    </div>
  );
}

export default App;
