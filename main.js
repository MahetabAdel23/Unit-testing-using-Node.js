const db=require('./db');//take "getOrder" fun from db file


const discount= (orderid)=>
{
    const order=db.getOrder(orderid);

    if (order.price >= 10)
        {
            order.price  -= order.price * 0.1;
            db.updatedorderafterdescount(order);

        } 
        return order;//if it apply discount or not

  
}
module.exports={discount};