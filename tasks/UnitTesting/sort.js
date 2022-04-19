function bubblesort(value){
   if(  value==undefined) return 0;
   if(value.length ==0)return undefined;
    for (let i=0;i<value.length;i++){
        if(isNaN(value[i])) return undefined;
        for(let j=0;j<value.length;j++){
            if(value[j]>value[j+1]){
                let  temp = value[j];
                value[j] = value[j + 1]
                value[j+1] = temp;
            }
        }
       
    }
   console.log(value);  
     
    return value;
}

bubblesort([1,7,5,2]);
module.exports=bubblesort;