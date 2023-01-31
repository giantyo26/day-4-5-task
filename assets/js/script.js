//Contact form function
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


// global array
const myProject = [];

// add project function
function addProject(event) {
    event.preventDefault();




    // Declaration Variable DOM Selection
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
        
        // Duration (endDate - startDate)
        // let duration = ;

        let projectProperties = {
            projectName,
            startDate,
            endDate,
            // duration,
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

        renderProject();

    }


    // function to show list Myprojects
    function renderProject() {
        document.getElementById("projects-list").innerHTML;
        for (let i = 0; i < myProject.length; i++) {
        document.getElementById("projects-list").innerHTML += `
        <a href="project-detail.html">
        <div id="project-card">
                <img src="${myProject[i].thumbnail}"/>
            <a id="project-title" href="/project-detail.html"><h2>${myProject[i].projectName}</h2></a>
            <div> Durasi: ${myProject[i.duration]} minggu</div
                <p>${myProject[i].description}</p>
            <div id = "technologies-icon">
                ${myProject[i].technologies.javascript ? `<i class="devicon-javascript-plain colored"></i>` : ""}
                ${myProject[i].technologies.go ? `<i class="devicon-go-original-wordmark colored"></i>` : ""}
                ${myProject[i].technologies.python ? `<i class="devicon-python-plain-wordmark colored"></i>` : ""}
                ${myProject[i].technologies.c ? `<i class="devicon-c-plain-wordmark colored"></i>` : ""}
                ${myProject[i].technologies.react ? `<i class="devicon-react-original-wordmark colored"></i>` : ""}
                ${myProject[i].technologies.postgresql ? `<i class="devicon-postgresql-plain-wordmark colored"></i>` : ""}
            </div>
            <div id:"project-option">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        `;
        }
    }
}