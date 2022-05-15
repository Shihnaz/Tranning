import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
      <div >
          <h1 className='head2'>HAPPY WORLD:)</h1>
    <div className="main">
       
      <div className="inner">
        <h1 className="head">Chat With Us  </h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput " type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join  In</button>
        </Link>
      </div>
    </div>
    </div>
  )
}