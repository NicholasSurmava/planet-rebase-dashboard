// const file = require('../../db/projects/projects.json');
const file = 'db/projects/projects.json';

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
            let output = '';
            data.forEach(function(project) {
                output += 
                `
                <div class="card-panel">
                    <ul class="collection">
                        <div><a href="#!" class="secondary-content"><i class="material-icons">history</i></a></div>
                        <a href="#!" class="collection-item">Project Name: ${project.project_name}</a>
                        <li class="collection-item">Author: ${project.name}</li>
                        <li class="collection-item">Status: ${project.status}</li>
                        <li class="collection-item">Status Note: ${project.status_note}</li>
                        <li class="collection-item">Requester: ${project.requester}</li>
                        <li class="collection-item">Goal: 
                            <p>${project.goal}</p>
                        </li>
                    </ul>
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
            console.log("Working!");
        })
        .catch(err => {
            let nm = err.name;
            let msg = err.message;
            document.getElementById('output').innerHTML = `
            <p>Uh oh... Something's borked.<p>
            <p>Please Contact: <a href="mailto:nicholas.surmava@gmail.com">Nicholas Surmava</a></p>
            `;
            console.log(`CATCH: ${nm} ${msg}`);
        });
}

// Fetch the projects on page load, then fetch based on the time interval set
fetchProjects();
setInterval(fetchProjects, interval);

// Scroll the page every 100 miliseconds
function pageScroll() {
    console.log('Start Auto-Scroll');
    window.scrollBy(0,1);
    scrollDelay = setTimeout(pageScroll,100);
}

function stop_scroll_down() {
    clearInterval(scrollDelay);
    console.log('Stop Auto-Scroll');
}

document.getElementById('start_scroll').addEventListener('click', pageScroll);
document.getElementById('stop_scroll').addEventListener('click', stop_scroll_down);


// Scroll back to top click event
document.getElementById("btn-small").addEventListener('click', topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("btn-small").style.display = "block";
  } else {
    document.getElementById("btn-small").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Reveal config menu
document.getElementById('config-btn').addEventListener('click', revealConfig);

function revealConfig() {
    let menu = document.getElementById('config-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}