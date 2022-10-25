// TODO: Create a function to generate markdown for README
function generateHtml(data) {
    
    return `${data.title}
    ${data.managerName}
    ${data.}
    ${data.description}
    ${data.installation}
    ${data.Usage}
    ${data.getLicense}
    ${data.license}
    ${data.contributing}
    [${data.GitHub}](https://github.com/${data.GitHub})
    ${data.email}
  `;
  }
  
  module.exports = generateHtml;
  