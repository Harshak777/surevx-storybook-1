import React from 'react';
import './style.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidemenu from '../components/sidemenu/Sidemenu';
import Article from '../components/article/Article';

export default {
    title: 'SureVX Help',
    component: Article,
    Header,
    Footer,
    Sidemenu
  };

export const SureVXHelp = () => (
  <div className="body-cont">
    <Header />
  <div className="main">
        <div className="sidemenu">
          <Sidemenu />
        </div>
        <div className="article">
            <Article />
        </div>
   </div>
   </div>   
);