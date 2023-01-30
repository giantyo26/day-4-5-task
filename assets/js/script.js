//Contact form function
function getData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(name == "") {
        alert("Type out your name!")
    } else if(email == "") {
        alert("Input your email!")
    } else if(phone == "") {
        alert("Type your phone number!")
    } else if(subject == "") {
        alert("Choose the subject")
    } else if(message == "") {
        alert("Fill out the message")
    } else {
        const defaultEmail = "giantyoard@gmail.com";

        let mailto = document.createElement("a");
        mailto.href = `mailto: ${defaultEmail}?subject= ${subject}&body = Hello, my name is ${name},
                      ${message}, you can contact me on this number:${phone}`;
        mailto.click();
    }

}

// add project function
// global array
const myProject = [];
function addProject(e) {
    e.preventDefault();

    // Delaclaration Variable DOM Selection
    let name = document.getElementById("project-name").value;
    let startDate = new Date(document.getElementById('start-date').value);
    let endDate = new Date(document.getElementById("end-date").value);
    let description = document.getElementById("description").value;

    // check technology checkbox
    let javascript = document.getElementById("javascript").checked;
    let python = document.getElementById("python").checked;
    let go = document.getElementById("go").checked;
    let react = document.getElementById("react").checked; 
    let thumbnail = document.getElementById("thumbnail").files;

    if (name == "") {
        alert("Please Input Name");
    } else if (startDate == "") {
        alert("Please Input Start Date");
    } else if (endDate == "") {
        alert("Please Input End Date");
    } else if (description == "") {
        alert("Please Input Description");
    } else if (!javascript && !go && !python && !react) {
        alert("Please Checklist Technologies");
    } else if (thumbnail.length == 0) {
        alert("Please Input Image");
    } else {
        // Convert image to blob object
        thumbnail = URL.createObjectURL(thumbnail[0]);


        let myProjectData = {
            name,
            startDate,
            endDate,
            description,
            javascript,
            python,
            go,
            react,
            thumbnail
        };

        myProject.push(myProjectData);
        console.log(myProject)
        showProject();
    }

}
// function to show list Myprojects
function showProject() {
    document.getElementById("project-list").innerHTML = "";
    console.log(myProject.length)
    for (let i = 0; i < myProject.length; i++) {
        document.getElementById("project-list").innerHTML += `
        <div id="project-list">
        <img src="${myProject.thumbnail}"/>
            <a href="/assets/js/project-detail.html"><h2>${myProject.projectName}</h2></a>
            <div>Durasi: ${project.duration} bulan</div>
      <p>
        ${myProject.description}
      </p>
      <div>
        ${myProject.javascript  ? `<i class="fa-brands fa-js"></i>` : ""}
        ${myProject.go ? `<i class="fa-brands fa-golang"></i>` : ""}
        ${myProjec.python  ? `<i class="fa-brands fa-python"></i>` : ""}
        ${myProject.react  ? `<i class="fa-brands fa-react"></i>` : ""}
      </div>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>`;
    }
}