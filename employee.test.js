const Employee = require('./employee');
const newEmployee = new Employee('name','id','email');

describe('Engineer',() =>{
    describe("Engineer Constructor", () =>{
        it("should get a name, id, and email ",()=>{
            expect(newEmployee.name).toEqual('name');
            expect(newEmployee.id).toEqual('id');
            expect(newEmployee.email).toEqual('email');
        });
        it("should have a role of Employee",() =>{
            const newRole = "Employee"
            expect(newEmployee.getRole()).toEqual(newRole)
        })
    });

});