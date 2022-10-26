const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
        this.role = "Engineer";
    }
    getGitHub(){
        return this.GitHub;
    }
}
module.exports = Engineer;