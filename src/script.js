//show Navbar mobile

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
};


showMenu('nav-toggle', 'nav-menu');

