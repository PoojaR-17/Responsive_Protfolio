# Responsive_Protfolio
 This is a personal portfolio website designed using **HTML**, **CSS**, and **JavaScript**. The website is fully responsive, making it suitable for viewing on both desktop and mobile devices. The project includes sections for home, about, education, projects, internships, and contact information.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Usage](#usage)
- [JavaScript Functionality](#javascript-functionality)
- [Project Sections](#project-sections)
- [Contact Form Integration](#contact-form-integration)
- [License](#license)

## Features

- **Responsive Design**: The layout adapts seamlessly to different screen sizes.
- **Sticky Header**: The header remains fixed at the top during scrolling.
- **Active Navigation Links**: The navigation links highlight based on the current section.
- **Dynamic Menu Icon**: The menu icon changes between hamburger and X styles.
- **Google Sheets Integration**: Form submissions from the contact form are sent to a Google Sheet.

## Technologies

- HTML
- CSS
- JavaScript
- Google Apps Script (for form submissions)

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/PoojaR-17/Personal-Portfolio-Website.git

2.	Navigate to the project directory:
bash
Copy code
cd your-repo-name
3.	Open the index.html file in your browser or use a live server in your code editor to view the project.
File Structure
bash
Copy code
/Personal-Portfolio-Website

├── index.html
├── styles.css
└──index.js
Usage
•	The navbar can be toggled by clicking the menu icon.
•	As you scroll through the sections, the corresponding navigation link becomes active.
•	The header will stick to the top of the page once you scroll down a certain distance.
•	When the page is scrolled, the navbar automatically closes if it was open.
JavaScript Functionality
Menu Toggle
The following code toggles the visibility of the navigation bar when the menu icon is clicked:
javascript
Copy code
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');  // Toggle between the hamburger and X icon
    navbar.classList.toggle('active');    // Toggle the 'active' class to show/hide the navbar
};
Scroll Event Handling
The scroll event updates the active navigation link based on the current section and makes the header sticky:
javascript
Copy code
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the navbar when scrolling
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};
Google Sheets Form Submission
This code sends form submissions from the contact form to a Google Sheets document:
javascript
Copy code
const scriptURL = 'https://script.google.com/macros/s/your-script-url/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
});
Contact Form Integration
The contact form allows users to send messages directly to your Google Sheet. Users can fill out their Name, Email, and Message, and upon submission, their responses will be captured and stored in the specified Google Sheet.
Usage Steps for the Contact Form:
1.	Navigate to the Contact section of the website.
2.	Fill in the required fields: Name, Email, and Message.
3.	Click the Submit button.
4.	Check your Google Sheet to confirm that the submission has been recorded.
Project Sections
•	Home: An introduction to who you are.
•	About: Information about your background.
•	Education: Details of your educational qualifications.
•	Projects: Showcase of your work and projects.
•	Internships: Experience details.
•	Contact: A form to reach you.

