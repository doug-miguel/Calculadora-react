import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '././Main/Calculator'
import Calculator from '././Main/Calculator';

ReactDOM.render(
  <React.Fragment>
    <h1>Calculadora</h1>
    <Calculator />
  </React.Fragment>,
  document.getElementById('root')
);