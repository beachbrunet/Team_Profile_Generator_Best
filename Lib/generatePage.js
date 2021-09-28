// create a function html with backtics
function generateHTML(data) {
  let content = data.map((employee) => employee.render()).join();
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

    <title> Team Profile Management</title>
<style type="text/css">
:root {
    --light-color: rgb(245, 229, 215);
    --dark-color: rgb(70, 70, 70);
    --main-font: "PT Serif", serif;
  }
  
  body {
    background-image: url("https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80");
  }
  
  header {
    color: var(--light-color);
    font: var(--font);
    font-size: 80px;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.583);
    text-shadow: 4px 4px var(--dark-color);
  }
  
  h3 {
    color: var(--light-color);
    text-shadow: 1px 3px var(--dark-color);
  }
  
  h3,
  h5 {
    font-family: var(--main-font);
  }
  
  h5 {
    color: var(--dark-color);
    text-shadow: 1px 1px var(--light-color);
  }
  







</style>
    <header> The Dream Team </header>

    </head> 
<body>
${content}




    </body>
</html>   
    `;
}

module.exports = generateHTML;
