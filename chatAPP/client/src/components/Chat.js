import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Header from "./chatHeader";
import Messages from "./messages";
import Input from "./inputf";
import ListUsers from "./onlineUsers";
import './chat.css';
let socket;
const Chat =({location})=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ip = 'https://reactcha.herokuapp.com/';
    // const ip="http://localhost:5000/"
    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ip);
    
        setRoom(room);
        setName(name);
        console.log(socket);
        console.log(name,room);
    
        socket.emit('join', { name:name,room:room}, (error) => {
          if(error) {
            alert(error);
          }
        });
        return ()=>{
          socket.emit("disconnect");
          socket.off();
        }
      }, [ip,location.search]);
      useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);
    const sendMessage = (event) => {
      event.preventDefault();
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
       
      }
    }
    console.log(message,messages);
    return (
        <div className="chat" >
        < div className="container">
        <Header room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
          <ListUsers users={users}/>
        </div>
        
    )
}
export default Chat;