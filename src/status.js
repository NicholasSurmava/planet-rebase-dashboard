const file = require('./db/projects/projects.json');

let interval = '5000';

var myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
    method: 'GET',
    headers: myHeaders,
};

function fetchProjects() {
    fetch(file, myInit)
        .then(res => res.json())
        .then(data => {
            let str = JSON.stringify(data);
            document.getElementById('output').textContent = str;
            console.log("Working!");
        })
        .catch(err => {
            let nm = err.name;
            let msg = err.message;
            document.getElementById('output').textContent = `
            Uh oh... Something's borked.
            `;
            console.log(`CATCH: ${nm} ${msg}`);
        });
}


setInterval(fetchProjects, interval);