const Manager = require('./manager');
const newManager = new Manager('angela','1','angela@gmail.com', '1');

describe('Manager',() =>{
    describe("Manager Constructor", () =>{
        it("I should get a name, id, email, and office number for a manager ",()=>{
            expect(newEngineer.name).toEqual('Angela');
            expect(newEngineer.id).toEqual('1');
            expect(newEngineer.email).toEqual('Angela@gmail.com');
            expect(newEngineer.officeNumber).toEqual('1')
        });
        it("should have the role of Manager",() =>{
            const newRole = "Manager"
            expect(newManager.getRole()).toEqual(newRole)
        })
    });

});
