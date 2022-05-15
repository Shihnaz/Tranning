import React from 'react';

import  online from '../images/onlineIcon.png';
import close from '../images/close.png';

import './chatHeader.css';
                
const Header = ({ room }) => (
  <div className="Header">
    <div className="left">
      <img className="online" src={online}  />
      <h3>{room}</h3>
    </div>
    <div className="right">
      <a href="/"><img src={close}  /></a>
    </div>
  </div>
);

export default Header;