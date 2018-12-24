// const file = require('../../db/projects/projects.json');
const file = 'db/projects/projects.json';

let interval = '5000';

const myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

const headerConfig = {
    method: 'GET',
    headers: myHeaders,
};

function fetchProjects() {
    fetch(file, headerConfig)
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(function (project) {
                output +=
                    `
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content black-text">
                                <div class="card-image right">
                                    <!-- <img class="materialboxed" src="static/imgs/test-photo.jpg" alt="img"> -->
                                    <div class="img-ph"></div>
                                    <span class="card-title">${project.project_name}</span>
                                    <!-- <div class="card-status">
                                        <div class="status-circle-small"><p>${project.status}</p></div>
                                    </div> -->
                                    <a class="btn-floating btn-1 halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
                                    <a class="btn-floating btn-2 halfway-fab waves-effect waves-light blue"><i class="material-icons">history</i></a>
                                </div>
                                <div class="row">
                                    <p class="col s2">Status: ${project.status}</p>
                                    <p class="col s2">Developer: ${project.name}</p>
                                    <p class="col s2">Requester: ${project.requester}</p>
                                    <blockquote class="col s12">${project.status_note}</blockquote>
                                </div>
                            </div>
                            <div class="card-action">
                                <a href="${project.link_main}">Automation Page</a>
                                <a href="${project.link_dev_doc}">Dev Docs</a>
                                <a href="${project.link_user_doc}">User Docs</a>
                            </div>
                        </div>
                    </div>
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
// setInterval(fetchProjects, interval);
// start_scroll_down();

// Scroll the page every 100 miliseconds
function start_scroll_down() {
    console.log('Start Auto-Scroll');
    window.scrollBy(0, 1);
    scrollDelay = setTimeout(start_scroll_down, 100);
}

function stop_scroll_down() {
    clearInterval(scrollDelay);
    console.log('Stop Auto-Scroll');
}

document.getElementById('start_scroll').addEventListener('click', start_scroll_down);
document.getElementById('stop_scroll').addEventListener('click', stop_scroll_down);


// Scroll back to top click event
document.getElementById("btn-small").addEventListener('click', topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

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

// Hide on page click