import SideNav from './Modules/SideNav.js';
import MainContent from './Modules/MainContent.js';
import RightSideNav from './Modules/RightNav.js';
import modal from './Modules/Modal.js';

const app = () => {
  return `
    <section id="myModal"></section>
    ${SideNav()}
    <section class="grid-container">
      ${MainContent()}
      ${RightSideNav()}
    </section>
    ${modal()}
  `
}

document.getElementById('root').innerHTML = app();
