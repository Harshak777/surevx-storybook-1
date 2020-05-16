import React from 'react';
//import { action } from '@storybook/addon-actions';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

//import '../components/style.css';

export default {
  title: 'SureVX Screen',
  component: Header,
  Footer
};

export const SureVXHeader = () => <Header />;

export const SureVXFooter = () => <Footer />;

export const SureVXScreen = () => (
  <div class="MainScreen">
    <Header />
    <Footer />
  </div>
);
