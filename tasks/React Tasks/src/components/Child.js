export  const Child=(props)=>{

   return(
       <div>
           <button  onClick={()=>props.greetHandler("Shihnaz")}>
               Great Parents
           </button>
       </div>
   )
   }