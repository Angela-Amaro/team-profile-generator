// generates Html layout and formats input
function generateHtml(data) {
    const getManager = (Manager) =>{
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${Manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    <br/>`
        ;
    };
const getEngineer = (Engineer) =>{
        return  `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${Engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${Engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>
    <br/> `
    ;
    };
const getIntern = (intern) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    <br/>`
    ;
    };
let htmlCards = [];


htmlCards.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => getManager(manager))
  );
  htmlCards.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => getEngineer(engineer))
      .join("")
  );
  htmlCards.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => getIntern(intern))
      .join("")
  );

  return htmlCards.join("");
};

module.exports = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
      <title>My Team</title>
    </head>
  
    <body>
      
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading bg-info">
                  <h1 class="text-center text-white">My Team</h1>
              </div>
          </div>
      </div>
  
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
              <br/>
              ${generateHtml(data)}
              <br/>
          </div>
      </div>
  </div>
</body>
</html>`
  ;

};