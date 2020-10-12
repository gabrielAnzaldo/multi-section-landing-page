import '../css/styles.css';
// get all sections
const sections = document.querySelectorAll('section');
// get ul
const navBar = document.querySelector('#navbar__list');
// build nav
const fragment = document.createDocumentFragment();
for(let index =0; index < sections.length; index++) {
  const navItem = document.createElement('li');
  const currentSectionTitle = sections[index].dataset.nav;
  navItem.innerText = currentSectionTitle;
  fragment.appendChild(navItem);
}
navBar.appendChild(fragment);