import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import './scss/main.scss';
import './scss/custom.scss';
import 'react-tippy/dist/tippy.css';
import 'react-image-lightbox/style.css';

const darkModeClass = localStorage.getItem('dark-mode') ?? '';

ReactDOM.render(
  <React.StrictMode>
    <App darkMode={darkModeClass} />
  </React.StrictMode>,
  document.getElementById('alphabet')
);


// reportWebVitals((props: any) => {
//   console.log(props);
//   // const { id, name, value } = props;
//   // ga('send', 'event', {
//   //   eventCategory: 'Web Vitals',
//   //   eventAction: name,
//   //   eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//   //   eventLabel: id, // id unique to current page load
//   //   nonInteraction: true, // avoids affecting bounce rate
//   // });
// });
