import '../css/styles.css';
// get all sections
const sections = document.querySelectorAll('section');
// get ul
const navBar = document.querySelector('#navbar__list');
// get back to top
const backToTop = document.getElementById('back-to-top');
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

function resetActiveStyles() {
  for(let index = 0; index < navBar.children.length; index++) {
    navBar.children[index].classList.remove('active-item');
  }
}

// functions
// add event to parent for event delegation
navBar.addEventListener('click', function(event) {
  // remove active elements from all items
  resetActiveStyles();
  event.target.classList.add('active-item');

  const relatedSectionId = event.target.dataset.relatedSection;
  const respectiveSection = document.getElementById(relatedSectionId);
  respectiveSection.scrollIntoView();
});

backToTop.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
