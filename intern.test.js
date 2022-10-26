const Intern = require('./intern');
const newIntern = new Intern('angela','1','angela@gmail.com','Berkeley');

describe('Intern',() =>{
    describe("Intern Constructor", () =>{
        it("I should get a name, id, email and school info for Intern ",()=>{
            expect(newEngineer.name).toEqual('Angela');
            expect(newEngineer.id).toEqual('1');
            expect(newEngineer.email).toEqual('Angela@gmail.com');
            expect(newEngineer.school).toEqual('Berkeley')
        });
        it("I should have the role of Intern",() =>{
            const newRole = "Intern"
            expect(newIntern.getRole()).toEqual(newRole)
        })
    });

});