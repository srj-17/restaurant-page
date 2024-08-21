import resImg from "./assets/img/restro-pic.jpg";
let content = document.querySelector('#content');

// create top level nodes (meaning nodes which can be appended directly on demand) and append all the nodes to them
// left content
let contentLeft = document.createElement('div');
contentLeft.classList.toggle('content-left');

// for restaurant name
let restroNameContainer = document.createElement('div');
restroNameContainer.classList.toggle('restaurant-name-container');
let restroName = document.createElement('div');
restroName.classList.toggle('restaurant-name');
restroName.textContent = 'My Restro';
restroNameContainer.appendChild(restroName);
contentLeft.appendChild(restroNameContainer);

// for restaurant guests content
let guests = document.createElement('div');
// guests title
guests.classList.toggle('guests');
let guestsTitle = document.createElement('div');
guestsTitle.classList.toggle('guests-title');
guestsTitle.textContent = "Welcome to our exclusive club of famous guests";
guests.appendChild(guestsTitle);
// restro-pic
let restroPic = document.createElement('div');
restroPic.classList.toggle('restro-pic');
let image = document.createElement('img');
image.src = resImg;
image.alt = "Image of the restaurant";
image.style.cssText = "width: 200; height: auto";
restroPic.appendChild(image);
guests.appendChild(restroPic);

// description
let description = document.createElement('div');
description.classList.toggle('description');
description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae dignissimos officia aliquam! Sit, temporibus illum. Error voluptatibus deserunt dolorem!'
guests.appendChild(description);
contentLeft.appendChild(guests);

// middle-line
let middleLine = document.createElement('div');
middleLine.classList.toggle('middle-line');

// right content
let contentRight = document.createElement('div');
contentRight.classList.toggle('content-right');

// services
let services = document.createElement('div');
services.classList.toggle('services');

// service-header
let serviceHeader = document.createElement('div');
serviceHeader.classList.toggle('service-header');
serviceHeader.textContent = 'Our Services';
services.appendChild(serviceHeader);

// service-description
let serviceDescription = document.createElement('div');
serviceDescription.classList.toggle('service-description');
serviceDescription.textContent = 'We provide mouth-watering (pun-intended) services, so come at your own risk.';
services.appendChild(serviceDescription);

// service-list
let serviceList = document.createElement('ul');
serviceList.classList.toggle('service-list');
// for items on list
let listItems = [
    'Sleeping Services',
    'Sauna',
    'Bathing',
    'Eating',
    'Swmming-pool',
    'Bar',
    'Lounge',
    'Pirate Area',
]

for (let item of listItems) {
    let listItem = document.createElement('li');
    listItem.classList.toggle('class-list');
    listItem.textContent = item;
    serviceList.appendChild(listItem);
}
services.appendChild(serviceList);
contentRight.appendChild(services);

// extra
let extra = document.createElement('div');
extra.classList.toggle('extra');

// extra-header
let extraHeader = document.createElement('div');
extraHeader.classList.toggle('extra-header');
extraHeader.textContent = 'Extra';
extra.appendChild(extraHeader);

// extra-content
let extraContent = document.createElement('div');
extraContent.classList.toggle('extra-content');
extraContent.textContent = "We all love extra content, don't we? But I don't have much to offer right now in terms of how much guff I can give you. Thus, here's a lorem text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident atque accusantium debitis expedita reprehenderit optio temporibus aliquam, officiis suscipit perspiciatis consequatur vero repellendus amet aut laboriosam quaerat eveniet error corrupti. Quas enim nemo eum! Pariatur doloribus in non quibusdam quaerat sit, iure et libero. Ex aperiam quod voluptas impedit."
extra.appendChild(extraContent);
contentRight.appendChild(extra);

// function to append these things to the document (content, specifically)
function showHome() {
    content.appendChild(contentLeft);
    content.appendChild(middleLine);
    content.appendChild(contentRight);
}

export default showHome;