const add=require("../add");
beforeAll(()=>{
    console.log("initalizing database ");
})
afterAll(()=>{
    console.log("Clearing database ");
})

beforeEach(() => {
    console.log("initializing values done successfully");
  });
  afterEach (()=>{
    console.log("closing  db done successfully");
  })
describe("checking total sum",()=>{
    test ("this is for testing ",()=>{
        expect(add(10)).toBe(10);
    })
    describe.only("if there is more than one number",()=>{
        test ("this is for testing if adding two numbers ",()=>{
            expect(add(10,5)).toBe(15);
            

        })
        test ("this is for testing if adding  three numbers ",()=>{
            expect(add(10,5,2)).toBe(17);
        })
    })
   
    it("ther is no value ",()=>{
        expect(add()).toBe(0);
    })

})
it("checkingMY MATCH",()=>{
    expect(10).TobeBetween(9,16);
})
it("checking closeto",()=>{
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
})
 expect.extend({
     TobeBetween(received,start,end){
         const pass= received >start && received<end;

         if(pass){
             return{
                 message: ()=>`Expected ${received} to Be smaller than ${end} and larger than ${start}`,
                 pass:true
             };
         }
         else{
            return{
                message:()=> `Expected ${received} to Be smaller than ${end} and larger than ${start}`,
                pass:false
            };
         }
     } 
 
    }

 )

