let app = document.querySelector('#content');
createHome();

const projects = [
  {
    name: 'Laundromat',
    //description: 'projects/laundromat/description.txt',
    description: 'This project is a simple laundromat scene created for a class I took at PCC. Our assignment was to build a space in Unity using what we had learned at the time. I chose to make a laundromat because I thought it an interesting space with good options for including sound effects.',
    thumbnail: 'projects/laundromat/thumbnail.png',
    alt: 'Screenshot of laundromat project'
  },
  {
    name: 'Adoption Rush',
    //description: 'projects/adoption_rush/description.txt',
    description: 'My final project for a gamedev class I took was a puzzle game called Adoption Rush, made in an old version of Game Maker. Our assignment was to make a game related to a non-profit of our choosing and I chose the Oregon Humane Society. The Oregon Humane Society had a yearly goal of 10,000 adoptions, so I made a game geared toward that.',
    thumbnail: 'projects/adoption_rush/thumbnail.png',
    alt: 'Screenshot of Adoption Rush',
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
  text = "Welcome to my portfolio site, created for CS410P - Intro to Web Development.";

  createPage(title, text);
}

function createAbout() {
  title= "About Me";
  image= "images/me.png";
  text = "Hello, I am Jacob. I like making things and playing games. I've been in school for too long and am very much looking forward to graduating.";
  
  createPage(title, text, image);
}

function createProjects() {
  cleanUp();
  let header = document.createElement('h1');
  header.textContent = "Projects";
  app.append(header);

  projects.forEach((project) => {
    let element = document.createElement('div');
    let projTitle = document.createElement('h3');
    let projImage = document.createElement('img');
    let projDesc = document.createElement('p');

    projTitle.textContent = project.name;
    projImage.src = project.thumbnail;
    projImage.alt = project.alt;
    projDesc.textContent = project.description;

    element.className = "info-box";

    element.append(projImage);
    element.append(projTitle);
    projTitle.append(projDesc);
    app.append(element);
  })
}

function createContact() {
  cleanUp();
  let element = document.createElement('form');
  let header = document.createElement('h1');
  header.textContent = "Contact";
  
  let fnameGroup = document.createElement('div');
  let fnameLabel = document.createElement('label');
  let fnameInput = document.createElement('input');
  fnameGroup.className = 'form-group';
  fnameLabel.htmlFor = 'firstNameInput';
  fnameLabel.textContent = 'First name';
  fnameInput.type = 'text';
  fnameInput.className = 'form-control';
  fnameInput.id = 'firstNameInput';
  fnameInput.placeholder = 'Enter first name';
  fnameGroup.append(fnameLabel);
  fnameGroup.append(fnameInput);
  
  let lnameGroup = document.createElement('div');
  let lnameLabel = document.createElement('label');
  let lnameInput = document.createElement('input');
  lnameGroup.className = 'form-group';
  lnameLabel.htmlFor = 'lastNameInput';
  lnameLabel.textContent = 'Last name';
  lnameInput.type = 'text';
  lnameInput.className = 'form-control';
  lnameInput.id = 'lastNameInput';
  lnameInput.placeholder = 'Enter last name';
  lnameGroup.append(lnameLabel);
  lnameGroup.append(lnameInput);
  
  let emailGroup = document.createElement('div');
  let emailLabel = document.createElement('label');
  let emailInput = document.createElement('input');
  emailGroup.className = 'form-group';
  emailLabel.htmlFor = 'emailInput';
  emailLabel.textContent = 'Email address';
  emailInput.type = 'email';
  emailInput.className = 'form-control';
  emailInput.id = 'emailInput';
  emailInput.placeholder = 'Enter email';
  emailGroup.append(emailLabel);
  emailGroup.append(emailInput);

  let messageGroup = document.createElement('div');
  let messageLabel = document.createElement('labal');
  let messageInput = document.createElement('textarea');
  messageGroup.className = 'form-group';
  messageLabel.htmlFor = 'messageInput';
  messageLabel.textContent = 'Message';
  messageInput.className = 'form-control';
  messageInput.id = 'messageInput';
  messageInput.placeholder = 'Enter your message';
  messageGroup.append(messageLabel);
  messageGroup.append(messageInput);

  let submitButton = document.createElement('button');
  submitButton.className = 'btn btn-primary mb-2';
  submitButton.textContent = 'Submit';

  app.append(header);
  app.append(fnameGroup);
  app.append(lnameGroup);
  app.append(emailGroup);
  app.append(messageGroup);
  app.append(submitButton);
}