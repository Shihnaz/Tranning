import {Child  } from  './Child'

export  const Parent=()=>{
 const greatP=(name)=>{
     alert("hello  from  your child " +`${name}`);
     console.log("hello parent");


 }
 return (
 <div>
<Child greetHandler={greatP}  />
 
 </div>
 
 );
 

}