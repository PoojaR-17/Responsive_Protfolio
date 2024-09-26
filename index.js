// Select the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');  
    navbar.classList.toggle('active'); 
}


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

   
    menuIcon.classList.remove('fa-x'); 
    navbar.classList.remove('active');  
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbwOPJTkedbybkgZnqmQAK1k8Llx6OBE5PXThvljbBokoapMDLkFy4aBF5qOeLxNFASJ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })