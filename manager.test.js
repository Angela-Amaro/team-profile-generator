const Manager = require('./manager');
const newManager = new Manager('Angela','1','Angela@gmail.com', '1');

describe('Manager',() =>{
    describe("Manager Constructor", () =>{
        it("I should get a name, id, email, and office number for a manager ",()=>{
            expect(newManager.name).toEqual('Angela');
            expect(newManager.id).toEqual('1');
            expect(newManager.email).toEqual('Angela@gmail.com');
            expect(newManager.officeNumber).toEqual('1')
        });
        it("should have the role of Manager",() =>{
            const newRole = "Manager"
            expect(newManager.getRole()).toEqual(newRole)
        })
    });

});
