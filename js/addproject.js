let blog = [];

function addProject(event){
    event.preventDefault();

    let project = document.getElementById("inputProject").value;
    let startDate = document.getElementById("inputStartDate").value;
    let endDate = document.getElementById("inputEndDate").value;
    let description = document.getElementById("inputDescription").value;
    let image = document.getElementById("inputImage").files;

    const checkSwift = '<img src="image/swift.png">';
    const checkRuby = '<img src="image/ruby.png">';
    const checkPhyton = '<img src="image/phython.png">';
    const checkJavascript = '<img src="image/js.png">';

    let swift = document.getElementById("swift").checked ? checkSwift: "";
    let ruby = document.getElementById("ruby").checked ? checkRuby: "";
    let phyton = document.getElementById("phyton").checked ? checkPhyton: "";
    let javascript = document.getElementById("javascript").checked ? checkJavascript: "";

    if(project == ""){
        alert("Name of your project must be filled in");
        return;
    } else if(startDate == ""){
        alert("Start date your project must be filled in");
        return;
    } else if(endDate == ""){
        alert("End date your project must be filled in");
        return;
    } else if(description == ""){
        alert("Description your project must be filled in");
        return;
    } else if(image == ""){
        alert("Image your project must be filled in");
        return;
    }

    image = URL.createObjectURL(image[0]);
    console.log(image);

    const group = {
        project, 
        startDate, 
        endDate, 
        description, 
        swift, ruby, phyton, javascript, 
        image
    };

    blog.push(group);
    localStorage.setItem('blog', JSON.stringify(blog));
    console.log(blog);

    renderProject();

    document.getElementById("form").reset();
};

function renderProject(){
    document.getElementById("new-page").innerHTML = "";

    for (let i = 0; i < blog.length; i++) {
    document.getElementById("new-page").innerHTML += `
        <div class="card">
            <a href="project.html?id=${i}" target="_blank">
                <img src="${blog[i].image}" alt="">
            </a>
            <h1>${blog[i].project}</h1>
            <p>Durasi</p>
            <p>${blog[i].description}</p>
            <div class="image-card">
                <img src="image/ps.png" alt="">
                <img src="image/android.png" alt="">
                <img src="image/java.png" alt="">
            </div>
            <div class="button-card">
                <button class="edit-card">Edit</button>
                <button class="delete-card">Delete</button>
            </div>
        </div>`;
    } 
};