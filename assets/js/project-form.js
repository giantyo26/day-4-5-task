// Global array
const myProject = [];

// Add project function
function addProject(e) {
    e.preventDefault()

    // Get DOM value from form and initialized it to a variable
    let projectName = document.getElementById("project-name").value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let thumbnail = document.getElementById("thumbnail").files;
   
    // Get every checkbox value (boolean) and insert it to an array
    const technologies = ["javascript", "python", "c", "go", "react", "postgresql"]
    const technologiesVal = []
    for (let i = 0; i < technologies.length; i++) {
        technologiesVal.push(document.getElementById(technologies[i]).checked);
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

        // Assign variables (inputted value) to an object
        const projectProperties = {
            projectName,
            startDate,
            endDate,
            description,
            technologiesVal,
            thumbnail,
        }

        // Add projectProperties properties to myProject array
        myProject.push(projectProperties);

        // Call showProject function
        showProjects();

        // Form reset
        document.getElementById("project-form").reset()
    }
}

// Function to render projects card 
function showProjects() {
    document.getElementById("projects-list").innerHTML = ""
    for (let element of myProject) {
        document.getElementById("projects-list").innerHTML += `
        <a href="project-detail.html">
        <div id="project-card">
            <img src="${element.thumbnail}"/>
            <a id="project-title" href="/project-detail.html"><h2>${element.projectName}</h2>
        </a>
            <p id="project-duration">Duration: ${getDuration(element.startDate, element.endDate)}</p>
            <p id="project-description">${element.description}</p>

            <div id = "technologies-icon">
                ${element.technologiesVal[0] ? `<i class="devicon-javascript-plain"></i>` : ""}
                ${element.technologiesVal[1] ? `<i class="devicon-go-original-wordmark"></i>` : ""}
                ${element.technologiesVal[2] ? `<i class="devicon-python-plain"></i>` : ""}
                ${element.technologiesVal[3] ? `<i class="devicon-c-plain-wordmark"></i>` : ""}
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

// const getTimePosted = (timePosted) => {
//     let difference = new Date() - timePosted
    
//     const monthsDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
//     const weeksDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
//     const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hoursDifference = Math.floor(difference / (1000 * 60 * 60));
//     const minutesDifference = Math.floor(difference / (1000 * 60))
//     const secondsDifference = Math.floor(difference / (1000));

//     switch (true) {
//         case monthsDifference > 1:
//             return `${monthsDifference} months ago`
//         case monthsDifference > 0:
//             return `${monthsDifference} month ago`

//         case weeksDifference > 1:
//             return `${daysDifference} weeks ago`
//         case weeksDifference > 0:
//             return `${weeksDifference} week ago`

//         case daysDifference > 1:
//             return `${monthsDifference} days ago`
//         case daysDifference == 1:
//             return `${daysDifference} day ago`

//         case hoursDifference > 1:
//             return `${hoursDifference} hours ago`
//         case hoursDifference > 0:
//             return `${hoursDifference} hour ago`

//         case minutesDifference > 1:
//             return `${minutesDifference} minutes ago`
//         case minutesDifference == 1:
//             return `${minutesDifference} minute ago`

//         case secondsDifference > 1:
//             return `${secondsDifference} seconds ago`
//         case secondsDifference == 1:
//             return `${secondsDifference} second ago`
//         default:
//             return `just now`
//     }
// }

// setInterval(showProjects, 1000)






