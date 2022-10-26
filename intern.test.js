const Intern = require('./intern');
const newIntern = new Intern('Angela','1','Angela@gmail.com','Berkeley');

describe('Intern',() =>{
    describe("Intern Constructor", () =>{
        it("I should get a name, id, email and school info for Intern ",()=>{
            expect(newIntern.name).toEqual('Angela');
            expect(newIntern.id).toEqual('1');
            expect(newIntern.email).toEqual('Angela@gmail.com');
            expect(newIntern.school).toEqual('Berkeley')
        });
        it("I should have the role of Intern",() =>{
            const newRole = "Intern"
            expect(newIntern.getRole()).toEqual(newRole)
        })
    });

});