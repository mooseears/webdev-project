let app = document.querySelector('#content');
createHome();

const projects = [
  {
    name: 'Laundromat',
    description: 'projects/laundromat/description.txt',
    thumbnail: 'projects/laundromat/thumbnail.png',
    anim: 'projects/laundormat/anim.gif',
  },
  {
    name: 'Adoption Rush',
    description: 'projects/adoption_rush/description.txt',
    thumbnail: 'projects/adoption_rush/thumbnail.png',
    anim: 'projects/adoption_rush/anim.gif',
  }
]

function cleanUp() {
  while (app.lastChild) {
    app.removeChild(app.lastChild);
  }
};

function createPage(pageTitle, pageText, pageImage) {
  cleanUp();
  let element = document.createElement('div');
  let header = document.createElement('h1');
  let image = document.createElement('img');
  let text = document.createElement('p');

  element.className = "info-box";
  header.textContent = pageTitle;

  if (pageImage != undefined) {
    image.src = pageImage;
    element.append(image);
  }
  if (pageText != undefined) {
    text.textContent = pageText;
    element.append(text);
  }
  
  app.append(header);
  app.append(element);
}

function createHome() {
  title = "Home";
  image = "images/me.png";
  text = "Hello and welcome to my portfolio site, created for CS410P Intro to Web Development.";

  createPage(title, text, image);
}

function createAbout() {
  title= "About Me";
  image= "images/me.png";
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
  createPage(title, text, image);
}

function createProjects() {
  title = "Projects";
  createPage(title);

  projects.forEach((project) => {
    let element = document.createElement('div');
    let title = document.createElement('h3');
    let image = document.createElement('img');
    let projDesc = document.createElement('p');

    title.textContent = project.title;
    image.src = project.thumbnail;
    //readProjDesc(project, projDesc.textContent);
    projDesc = project.description;

    element.className = "project-box";

    element.append(image);
    element.append(projDesc);
    app.append(title);
    app.append(element);
    app.append(document.createElement('hr'))
  })
}

function readProjDesc(project, projDesc) {
  var xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open('GET', project.description, false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState===4 && xhr.status===200) {
      projDesc = xhr.responseText; 
    }
  }
  xhr.send();
}