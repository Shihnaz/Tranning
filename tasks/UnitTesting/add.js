// function add(num,num2,num3){
//     return (num||0) +(num2|| null)+(num3||null);
// }
function add(...num){
    return num.reduce((pv,cv)=>pv+cv,0);
}
module.exports=add;