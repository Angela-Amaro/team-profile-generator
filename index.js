//packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require('util');

const generateReadme = require("./utils/generateHtml");
const writeFileAsync = util.promisify(fs.writeFile);

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
    message: 'what is your managers office number',
},
{
    type: 'list',
    name: 'teamMemberAdd',
    message: 'what type of team member would you like to add?',
    choices: ['engineer','intern', 'finish building my team'],
},
//present questions below based off selection above

//-------engineer section------------
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
    name: 'engineerGitHub',
    message: 'what is your engineer Github username?'
},
//----------intern section--------------
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
},];

//function to write index.html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateHtml(data), function(err) {
      if (err) {
          return console.log(err);
      }
  });
  
  }
//uses inquirer to fill in answers to new html
function init() {
inquirer
    .prompt(questions)
    .then((answers) => {
    writeToFile("newindex.html", answers);
});
}
// Function call
init();
