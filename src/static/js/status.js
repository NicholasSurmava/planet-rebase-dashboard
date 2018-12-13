// const file = require('./db/projects/projects.json');
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
                <div class="collection">
                    <a href="" class="collection-item">Project Name: ${project.project_name}</a>
                    <a href="" class="collection-item">Author: ${project.name}</a>
                    <a href="" class="collection-item">Status: ${project.status}</a>
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

fetchProjects();
setInterval(fetchProjects, interval);


function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,100);
}

pageScroll();


// Scroll back to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

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

// when the bottom is hit, auto scroll to top after a delay
