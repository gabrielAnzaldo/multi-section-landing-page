import '../css/styles.css';
// get all sections
const sections = document.querySelectorAll('section');
// get ul
const navBar = document.querySelector('#navbar__list');
// build nav
const fragment = document.createDocumentFragment();
for(let index =0; index < sections.length; index++) {
  const navItem = document.createElement('li');
  const currentSection = sections[index];
  navItem.setAttribute('data-related-section', currentSection.id);
  const currentSectionTitle = currentSection.dataset.nav;
  navItem.innerText = currentSectionTitle;
  fragment.appendChild(navItem);
}
navBar.appendChild(fragment);

// functions
// add event to parent for event delegation
navBar.addEventListener('click', function(event) {
  const relatedSectionId = event.target.dataset.relatedSection;
  const respectiveSection = document.getElementById(relatedSectionId);
  respectiveSection.scrollIntoView();
});