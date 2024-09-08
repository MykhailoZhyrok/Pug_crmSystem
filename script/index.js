const navItems = document.querySelectorAll('.nav-item');
console.log('SCRIPT')
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    console.log('CLICK')
    item.classList.add('active');
  });
});

const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById('nav-links');
const logo = document.getElementById('logo');
const sidebar = document.getElementById('sidebar');


burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  console.log('burger')
  sidebar.classList.toggle('active');
  logo.classList.toggle('active');
  navLinks.classList.toggle('active');
  
});
