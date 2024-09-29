
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Container } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <Container sx={{bgcolor:'#FAFBFF'}}>
    <App /> 
    </Container>
     
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

