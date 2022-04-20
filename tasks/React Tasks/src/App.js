import logo from './logo.svg';
import './App.css';
import  {Great} from './components/First'
import  {Message} from './components/First'
import{Parent}from'./components/Parent '

import {Car} from './components/First'
import{Example}from './components/First'
import{Header}from'./components/header'

function App() {
  return (
    <div className="App">
{/* <Great name=" Shihnaz" lastname="Nasser" />
<Great name="ad"  lastname="Ahmad"/>
<Great name="Iyad"  lastname="KH" >
  <p style={mystyle}>this is some texts with inline styling</p>
  </Great>
  <Message></Message>
  <Parent/>
<Car /> */}
<Header></Header>

  
    </div>
  );
}
 let mystyle={
   display:"flex",
   margin:"auto",
   color:"blue",
   fontSize:"16px",


 }

export default App;
