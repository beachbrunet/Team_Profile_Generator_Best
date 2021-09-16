// create a function html with backtics
function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" />

    <title> Team Profile Management</title>

    <header> The Dream Team </header>

    <main> 
<body>

    <!-- Manager-->

    <div class="container">     
        <div class="row">
            <div class="card-deck">
             <div class="card text-white bg-info mb-3 d-flex justify-content-center" style="max-width: 18rem;">
              <h3 class="card-header">Carla</h3>
             <div class="card-body">
                 <h5 class="card-title"> ${data.managerName} </h5>
                 <li class="list-group-item"> ${data.idNumber}</li>
                <li class="list-group-item">Email: ${data.managerEmail} </li>
                <li class="list-group-item link"> ${data.mangerOfficeNumber} </li>
              </div>
            </div>
        </div>

<!-- Engineer -->
        <div class="card-deck">
         <div class="card text-white bg-info mb-3 d-flex justify-content-center" style="max-width: 18rem;">
          <h3 class="card-header">Turk</h3>
         <div class="card-body">
             <h5 class="card-title">${data.engineerName}</h5>
             <li class="list-group-item"> ID: ${data.idNumber}</li>
            <li class="list-group-item">Email:${data.engineerEmail}</li>
            <li class="list-group-item link link-primary">${data.githubUsername}</li>
          </div>
        </div>
    </div>

    <!-- Intern #1-->
            <div class="card-deck">
             <div class="card text-white bg-info mb-3 d-flex justify-content-center" style="max-width: 18rem;">
              <h3 class="card-header">J.D.</h3>
             <div class="card-body">
                 <h5 class="card-title">${data.internName}</h5>
                 <li class="list-group-item">ID: ${data.idNumber}</li>
                <li class="list-group-item">Email: ${data.internEmail}</li>
                <li class="list-group-item">School: ${data.school}</li>
                </div>
                </div>
            </div>
         </div>
     </main>
    </body>
</html>   
    `;
}

// module.exports = generatePage;
