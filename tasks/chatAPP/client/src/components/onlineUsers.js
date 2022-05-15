import React from 'react';

import  online from '../images/onlineIcon.png';

import './list.css';

const ListUsers = ({ users }) => (
  <div className="textC">
   
    {
      users
        ? (
          <div className='listu'>
            <h1>Online Users <i class='fas fa-users'></i>

            </h1>
            <div className="activeC">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img  src={online}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default ListUsers;