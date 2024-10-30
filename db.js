const getOrder=(orderid) =>{
return {id:orderid,price:100};
};
const updatedorderafterdescount=(order)=>{
    console.log(order);//this function takes objects(id,price) prameters &print them
}
module.exports={getOrder,updatedorderafterdescount};