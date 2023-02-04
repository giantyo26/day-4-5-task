// Contact form function
function getData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("Type out your name!")
    } else if (email == "") {
        alert("Input your email!")
    } else if (phone == "") {
        alert("Type your phone number!")
    } else if (subject == "") {
        alert("Choose the subject")
    } else if (message == "") {
        alert("Fill out the message")
    } else {
        const defaultEmail = "giantyoard@gmail.com";

        let mailto = document.createElement("a");
        mailto.href = `mailto: ${defaultEmail}?subject= ${subject}&body = Hello, my name is ${name},
                      ${message}, you can contact me on this number:${phone}`;
        mailto.click();
    }

}

// Global array
const myProject = [];

// Add project function
function addProject(e) {
    e.preventDefault()

    // Declaring selected DOM to a variable
    let projectName = document.getElementById("project-name").value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;

    let javascript = document.getElementById("javascript").checked;
    let python = document.getElementById("python").checked;
    let c = document.getElementById("c").checked;
    let go = document.getElementById("go").checked;
    let react = document.getElementById("react").checked;
    let postgresql = document.getElementById("postgresql").checked;
    let thumbnail = document.getElementById("thumbnail").files;

    // Conditional alert if any the field is empty
    if (projectName == "") {
        alert("Please input the project name!");
    } else if (startDate == "") {
        alert("Input the start date of your project!");
    } else if (endDate == "") {
        alert("Input the end date of your project!");
    } else if (description == "") {
        alert("Fill out the project description!");
    } else if (!javascript && !python && !go && !react && !postgresql) {
        alert("Check the technologies you use for the project!");
    } else if (thumbnail.length == 0) {
        alert("Upload the thumbnail")
    } else {
        // Convert image to blob object
        thumbnail = URL.createObjectURL(thumbnail[0]);

        let projectProperties = {
            projectName,
            startDate,
            endDate,
            description,
            technologies: {
                javascript,
                go,
                python,
                c,
                react,
                postgresql,
            },
            thumbnail
        };

        myProject.push(projectProperties);
        showProjects();
        // Form reset
        document.getElementById("project-form").reset()
        }
    
    }
  
    

// Function to render html 
function showProjects() {
    document.getElementById("projects-list").innerHTML = ""
    for (i of myProject) {
        document.getElementById("projects-list").innerHTML += `
        <a href="project-detail.html">
        <div id="project-card">
                <img src="${i.thumbnail}"/>
            <a id="project-title" href="/project-detail.html"><h2>${i.projectName}</h2></a>
            <p id="project-duration">Duration: ${duration(i.startDate, i.endDate)}</p>
            <p id="project-description">${i.description}</p>

            <div id = "technologies-icon">
                ${i.technologies.javascript ? `<i class="devicon-javascript-plain"></i>` : ""}
                ${i.technologies.go ? `<i class="devicon-go-original-wordmark"></i>` : ""}
                ${i.technologies.python ? `<i class="devicon-python-plain"></i>` : ""}
                ${i.technologies.c ? `<i class="devicon-c-plain-wordmark"></i>` : ""}
                ${i.technologies.react ? `<i class="devicon-react-original"></i>` : ""}
                ${i.technologies.postgresql ? `<i class="devicon-postgresql-plain"></i>` : ""}
            </div>
            <div id="project-option">
                <button>edit</button>
                <button>delete</button>
            </div>
            <div id="posted-time">
            <div>
        </div>
        `;
    }
}

// Function to count the duration
const duration = (startDate, endDate) => {
    let difference = new Date(endDate) - new Date(startDate);

    let month = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    let day = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (month > 0) {
        return `${month} Bulan`;
    } else {
        return `${day} Hari`;
    }
};





