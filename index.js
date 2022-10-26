//packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const fs = require("fs");

const generateHtml = require("./generateHtml.js");

const teamMembers = [];
//--------manager section---------
const questions = [ 
{
    type: 'input',
    name: 'managerName',
    message: 'what is your team managers name?'
},
{
    type: 'input',
    name: 'managerId',
    message: 'what is your managers id'
},
{
    type: 'input',
    name: 'managersEmail',
    message: 'what is your managers email?',
},
{
    type: 'input',
    name: 'managersOfficeNumber',
    message: 'what is your managers office number?',
},];
//grabs manger inputs 
function managerInfo() {
inquirer.prompt(questions)
.then(answer => {
const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);
teamMembers.push(newManager);
addTeamMember();
})
};
//prompts user to choose a team member or finish the application
function addTeamMember() {
 inquirer.prompt([
    {
        type: 'list',
        name: 'teamMemberAdd',
        message: 'what type of team member would you like to add?',
        choices: ['engineer','intern', 'finish building my team'],
    },
])

//switch case to prompt each inquirer for each selection and adds to addTeamMember
.then(answer => {
    switch(answer.teamMemberAdd){
        case "engineer":
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'what is your engineers name?',
            },
            {
                type: 'input',
                name: 'engineerId',
                meessage: 'what is your engineers id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'what is your engineer email?'
            },
            {
                type: 'input',
                name: 'GitHub',
                message: 'what is your engineer Github username?'
            },
        ])
        .then(answer => {
            const newEngineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGitHub);
            teamMembers.push(newEngineer);
            addTeamMember();
        })
        break;
        case "intern":
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is your interns name?'
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: 'what is your interns ID?'
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'what is your interns email?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'enter interns school'
                }
            ])
            .then(answer => {
                const newIntern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.school);
                teamMembers.push(newIntern);
                addTeamMember();
            })
            break;
            case "finish building my team":
            fs.writeFileSync("newindex.html", generateHtml(teamMembers), "utf-8")
            break;
    }
})
};
//calls manager info function
managerInfo();
