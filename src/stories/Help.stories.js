import React from 'react';
import './style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
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
  <div class="help">
      <Header />
      <div class="content">
        <Sidemenu />
        <Article />
      </div>
      <Footer />
   </div>   
);