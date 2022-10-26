const Employee = require('./employee');
const newEmployee = new Employee('name','id','email');

describe('Engineer',() =>{
    describe("Engineer Constructor", () =>{
        it("should get a name, id, and email ",()=>{
            expect(newEngineer.name).toEqual('name');
            expect(newEngineer.id).toEqual('id');
            expect(newEngineer.email).toEqual('email');
        });
        it("should have a role of Employee",() =>{
            const newRole = "Employee"
            expect(newEmployee.getRole()).toEqual(newRole)
        })
    });

});