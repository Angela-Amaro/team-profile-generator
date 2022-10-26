const Engineer = require('./engineer');
const newEngineer = new Engineer('angela','1','angela@gmail.com','Angela-Amaro');

describe('Engineer',() =>{
    describe("Engineer Constructor", () =>{
        it("I should get a name, id, email and github info for engineer ",()=>{
            expect(newEngineer.name).toEqual('Angela');
            expect(newEngineer.id).toEqual('1');
            expect(newEngineer.email).toEqual('Angela@gmail.com');
            expect(newEngineer.github).toEqual('Angela-Amaro')
        });
        it("I should get the Engineers GitHub from using getGitHub()",() =>{
            expect(newEngineer.getGitHub()).toEqual('Angela-Amaro');
        });
        it("should have the role of Engineer",() =>{
            const newRole = "Engineer"
            expect(newEngineer.getRole()).toEqual(newRole)
        })
    });

});