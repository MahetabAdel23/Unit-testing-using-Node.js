const {discount}=require('./main');

const db=require('./db');//we call db in this way /*not as {db} and writte it down db.getorder*/as db is a module ,not a function

describe('discount',()=>{
    it('make discount by using mock function where apply discount 10% for oder price 10',()=> {
     db.getOrder=function(orderid)
      {
        return{id:orderid, price:10};
      }; //here we are over writting  getorder  function that  in db file
     expect(discount(1)).toEqual({id:1,price:9});

    });

    it('make discount by using jest mock function where apply discount 10% for oder price 10',()=> {
        db.getOrder=jest.fn().mockReturnValue({id:1,price:10});//over writting on  db.getorder
        
       expect(discount(1)).toEqual({id:1,price:9});
       console.log( db.getOrder.mock);//to print jest_mock fun proportes
       db.getOrder.mockReset();//return value of db.getorder as it was 
    });
    it('make discount by using jest mock function where apply discount 10% for oder price 10',()=> {
      db.getOrder=jest.fn().mockReturnValue({id:1,price:10});//over writting on  db.getorder
      
     expect(discount(1)).toEqual({id:1,price:9});
     expect(db.getOrder.mock.calls[0][0]).toBe(1);
     db.getOrder.mockReset();//return value of db.getorder as it was 
  });

  it('make discount by using jest mock function where apply discount 10% for oder price 10',()=> {
    db.getOrder=jest.fn().mockReturnValue({id:1,price:10});//over writting on  db.getorder
    db.updatedorderafterdescount=jest.fn();//this mock fun doesnt return value so we will not writte "=jest.fn().mockReturnValue"
   expect(discount(1)).toEqual({id:1,price:9});//chek that the returened value of discount(1) will be {id:1,price:9}      ,,,,,,,we chould writte this instraction before "  expect(db.updatedorderafterdescount.mock.calls[0][0]).toEqual({id:1,price:9})" as update function is called in discount function
   console.log(db.updatedorderafterdescount.mock);//this will print the values that pass to  this mock fun which depend on another mock function
  expect(db.updatedorderafterdescount.mock.calls[0][0]).toEqual({id:1,price:9});//this paremeters are object
  expect(db.updatedorderafterdescount).toHaveBeenCalled();
   db.getOrder.mockReset();//return value of db.getorder as it was 
});
it('make discount by using jest mock function by implement mock function where apply discount 10% for oder price 10',()=> {
  db.getOrder=jest.fn().mockImplementation((id) => {
    if (id<5)
      {
      return {id,price:10};
    }
    return {id,price:100};
  })//implement moch fun of db.getorder fun 
 expect(discount(4)).toEqual({id:4,price:9});
 db.getOrder.mockReset();//return value of db.getorder as it was 
});

it('make discount by using jest mock function by implement mock function where apply discount 10% for oder price 10',()=> {
  db.getOrder=jest.fn().mockImplementation((id) => {
    if (id<5)
      {
      return {id,price:10};
    }
    return {id,price:100};
  })//implement moch fun of db.getorder fun 
  db.updatedorderafterdescount=jest.fn();

 expect(discount(4)).toEqual({id:4,price:9});
 expect(db.updatedorderafterdescount.mock.calls[0][0]).toEqual({id:4,price:9});

 db.getOrder.mockReset();//return value of db.getorder as it was 

});


});


