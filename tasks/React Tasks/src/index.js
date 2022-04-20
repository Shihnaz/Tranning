import React from 'react';
// import ReactDOM from 'react-dom';
import{createRoot}from'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(<App />, document.getElementById('root'));

const container =document.getElementById('root');
const root =createRoot(container);
const container2 =document.getElementById('header');
const root2 =createRoot(container);
root.render(<App/>)
reportWebVitals();
