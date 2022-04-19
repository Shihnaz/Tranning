const sort=require("./sort");
describe("testing with invaild parameter",()=>{
    test  ("testing with no parameter ",()=>{
  
    expect(sort()).toBe(0);
    })
    test("with empty array",()=>{
        var arr=[];
        expect(sort(arr)).toBeUndefined();
    })
    test("invaild string",()=>{
        expect  (sort([1," ddd",4])).toBeUndefined();
        
    })

})
describe("testing with vaild parameter",()=>{
    test  ("testing with  results numbers ",()=>{
      expect(sort([1,4,5,6])).toHaveLength(4);
        expect(sort([1,3,2])).toEqual(expect.arrayContaining([1,2,3]));
      expect(sort([1,4,3,5])).toEqual([1,3,4,5]);
      
    })

     

})


