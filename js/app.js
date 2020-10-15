import '../css/styles.css';
// get all sections
const sections = document.querySelectorAll('section');
// get ul
const navBar = document.querySelector('#navbar__list');
// get back to top
const backToTop = document.getElementById('back-to-top');
// section position data
const sectionsPositionData = [];
// build nav
const fragment = document.createDocumentFragment();
for(let index =0; index < sections.length; index++) {
  const navItem = document.createElement('li');
  const currentSection = sections[index];
  sectionsPositionData.push({
    id: currentSection.id,
    top: currentSection.offsetTop,
    height: currentSection.offsetHeight
  });
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

function getSectionOnViewport() {
  let foundSection = false;
  let sectionId = '';
  for(let index = 0; index < sectionsPositionData.length && !foundSection; index++) {
    const item = sectionsPositionData[index];
    if((window.scrollY + 400) > item.top && (window.scrollY + 400) < (item.height + item.top)) {
      foundSection = true;
      sectionId = item.id;
    }
  }

  return sectionId;
}

function resetActiveSectionStyle() {
  for(let index =0; index < sections.length; index++) {
    const currentSection = sections[index];
    currentSection.classList.remove('active-section');
  }
}
function handleOnScroll() {
  const sectionInViewport = getSectionOnViewport();
  if(sectionInViewport) {
    resetActiveSectionStyle();
    const currentSection = document.getElementById(sectionInViewport);
    currentSection.classList.add('active-section');
    // active menu
    resetActiveStyles();
    const relatedSectionNavItem = document.querySelector(`[data-related-section=${sectionInViewport}]`);
    if(relatedSectionNavItem) {
      relatedSectionNavItem .classList.add('active-item');
    }
  }
}

function handleOnClickMenuNav(event) {
  // add event to parent for event delegation
  // remove active elements from all items
  resetActiveStyles();
  event.target.classList.add('active-item');

  const relatedSectionId = event.target.dataset.relatedSection;
  const respectiveSection = document.getElementById(relatedSectionId);
  respectiveSection.scrollIntoView();
}

function handleOnclickButton() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// register events
navBar.addEventListener('click', handleOnClickMenuNav);
document.addEventListener('scroll', handleOnScroll);
backToTop.addEventListener('click', handleOnclickButton);
