import React from 'react';

import './message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isCurrent = false;

  const Uname= name.trim().toLowerCase();

  if(user === Uname) {
    isCurrent  = true;
  }

  return (
    isCurrent 
      ? (
        <div className="Mcontainer justifyEnd">
          <p className="sentText pr-10">{Uname}</p>
          <div className="Maincontainer backgroundBlue">
            <p className="Mtext colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="Mcontainer justifyStart">
            <div className="Maincontainer backgroundLight">
              <p className="Mtext  colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;