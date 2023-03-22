// Global array
const myProject = [];

// Function to returns an element with a specified id
let getId = (id) => document.getElementById(id);

// Add project function
function addProject(e) {
    e.preventDefault()

    // Get value from form
    let projectName = getId("project-name").value;
    let startDate = getId('start-date').value;
    let endDate = getId("end-date").value;
    let description = getId("description").value;
    let thumbnail = getId("thumbnail").files;

    // Get every checkbox value (boolean) and insert it to an array
    const technologies = ["javascript", "python", "c", "go", "react", "postgresql"]
    const technologiesVal = []
    for (let i = 0; i < technologies.length; i++) {
        technologiesVal.push(id(technologies[i]).checked);
    }

    // Conditional alert if any of the field is empty
    if (projectName == "") {
        alert("Please input the project name!");
    } else if (startDate == "") {
        alert("Input the start date of your project!");
    } else if (endDate == "") {
        alert("Input the end date of your project!");
    } else if (description == "") {
        alert("Fill out the project description!");
    } else if (!javascript && !python && !go && !c && !react && !postgresql) {
        alert("Check the technologies you use for the project!");
    } else if (thumbnail.length == 0) {
        alert("Upload the thumbnail");
    } else {
        // Creates a string containing a URL to blob object
        thumbnail = URL.createObjectURL(thumbnail[0])

        const projectProperties = {
            projectName,
            startDate,
            endDate,
            description,
            technologiesVal,
            thumbnail,
        }
        myProject.push(projectProperties);

        showProjects();
        getId("project-form").reset()
    }
}

// Function to render projects card 
function showProjects() {
    id("projects-list").innerHTML = ""
    for (let element of myProject) {
        id("projects-list").innerHTML += `
        <a href="project-detail.html">
        <div id="project-card">
            <img src="${element.thumbnail}"/>
            <a id="project-title" href="/project-detail.html"><h2>${element.projectName}</h2>
        </a>
            <p id="project-duration">Duration: ${getDuration(element.startDate, element.endDate)}</p>
            <p id="project-description">${element.description}</p>

            <div id = "technologies-icon">
                ${element.technologiesVal[0] ? `<i class="devicon-javascript-plain"></i>` : ""}
                ${element.technologiesVal[1] ? `<i class="devicon-python-plain"></i>` : ""}
                ${element.technologiesVal[2] ? `<i class="devicon-c-plain-wordmark"></i>` : ""}
                ${element.technologiesVal[3] ? `<i class="devicon-go-original-wordmark"></i>` : ""}
                ${element.technologiesVal[4] ? `<i class="devicon-react-original"></i>` : ""}
                ${element.technologiesVal[5] ? `<i class="devicon-postgresql-plain"></i>` : ""}
            </div>

            <div id="project-option">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        `;
    }
}

// Function to count the duration
const getDuration = (startDate, endDate) => {
    let difference = new Date(endDate) - new Date(startDate);
    
    let month = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    let week = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
    let day = Math.floor(difference / (1000 * 60 * 60 * 24));

    switch(true) {
        case month > 0:
            return `${month} Bulan`;
        case week > 0:
            return `${week} Minggu`;
        case day > 0:
            return `${day} Hari`;
        case month, week, day < 0:
            return `Operation error (Make sure the end date is after start date)`
        default:
            return `Within a day`;
    }
}




