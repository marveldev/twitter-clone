const dropdownButton = document.querySelector('#dropdown-button');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
const modalButton = document.querySelector('#modal-button');
const modalOverlay = document.querySelector('#modal-overlay');
const dimButton = document.querySelector('#dim-button');
const defaultButton = document.querySelector('#default-button');
const lightOutButton = document.querySelector('#light-out-button');
const tweetModalButton = document.querySelector('#tweet-modal');
const closeTweetModalButton = document.querySelector('#close-modal-button');

const changeDisplay = (element, selector, value, overlay) => {
  element.addEventListener('click', () => {
    document.querySelector(selector).style.display = value;
    overlay.style.display = value;
  })
}

changeDisplay(dropdownButton, '#dropdown', 'block', dropdownOverlay);
changeDisplay(dropdownOverlay, '#dropdown', 'none', dropdownOverlay);
changeDisplay(tweetModalButton, '#tweet-modal-container', 'block', modalOverlay)
changeDisplay(closeTweetModalButton, '#tweet-modal-container', 'none', modalOverlay);

modalButton.addEventListener('click', () => {
  dropdownOverlay.style.display = 'none';
  modalOverlay.style.display = 'block';
  document.querySelector('.modal-container').style.display = 'block';
  document.querySelector('#dropdown').style.display = 'none';
})

modalOverlay.addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'none';
  document.querySelector('#tweet-modal-container').style.display = 'none';
  modalOverlay.style.display = 'none';
})

// dimButton.addEventListener('click', () => {
//   document.querySelector('body').style.backgroundColor = '#15202B';
//   document.querySelector('body').style.color = '#fff';
//   document.querySelector('.logo').classList.add('dim-logo');
//   document.querySelector('.left-side-nav').classList.add('dim-nav');
//   document.querySelector('.modal-container').classList.add('dim-modal');
//   document.querySelector('.options').classList.add('tweet-options');
//   document.querySelector('.input').classList.add('dim-input');
//   document.querySelector('.main-content').classList.remove('dark-page');
//   document.querySelector('.main-content').classList.add('dim-page');
//   document.querySelector('.user-options').classList.remove('dark-user-option');
//   document.querySelector('.user-options').classList.add('dim-user-option');
//   document.querySelector('.trending').classList.remove('dark-trends');
//   document.querySelector('.trending').classList.add('trends');
//   document.querySelector('.user-input').classList.remove('dark-user-input');
//   document.querySelector('.user-input').classList.add('dim-user-input');
//   document.querySelector('.dropdown-content').classList.remove('dark-dropdown');
//   document.querySelector('.dropdown-content').classList.add('dim-dropdown');
//   document.querySelector('#tweet-modal-container').className = 'dim-tweet-modal';
// })

// defaultButton.addEventListener('click', () => {
//   document.querySelector('body').style.backgroundColor = '#fff';
//   document.querySelector('body').style.color = '#000';
//   document.querySelector('.logo').classList.remove('dim-logo');
//   document.querySelector('.left-side-nav').classList.remove('dim-nav');
//   document.querySelector('.user-input').classList.remove('dim-user-input');
//   document.querySelector('.options').classList.remove('tweet-options');
//   document.querySelector('.main-content').classList.remove('dim-page');
//   document.querySelector('.user-options').classList.remove('dim-user-option');
//   document.querySelector('.trending').classList.remove('trends');
//   document.querySelector('.input').classList.remove('dim-input');
//   document.querySelector('.modal-container').classList.remove('dim-modal');
//   document.querySelector('.user-options').classList.remove('dark-user-option');
//   document.querySelector('.main-content').classList.remove('dark-page');
//   document.querySelector('.input').classList.remove('dark-input');
//   document.querySelector('.trending').classList.remove('dark-trends');
//   document.querySelector('.user-input').classList.remove('dark-user-input');
//   document.querySelector('.dropdown-content').classList.remove('dim-dropdown');
//   document.querySelector('#tweet-modal-container').classList.remove('dim-tweet-modal');
// })

lightOutButton.addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('body').style.color = '#fff';
  document.querySelector('.logo').classList.add('dim-logo');
  document.querySelector('.left-side-nav').classList.add('dim-nav');
  document.querySelector('.options').classList.add('tweet-options');
  document.querySelector('.modal-container').classList.add('dim-modal');
  document.querySelector('.user-options').classList.remove('dim-user-option');
  document.querySelector('.user-options').classList.add('dark-user-option');
  document.querySelector('.main-content').classList.remove('dim-page');
  document.querySelector('.main-content').classList.add('dark-page');
  document.querySelector('.input').classList.remove('dim-input');
  document.querySelector('.input').classList.add('dark-input');
  document.querySelector('.trending').classList.remove('trends');
  document.querySelector('.trending').classList.add('dark-trends');
  document.querySelector('.user-input').classList.remove('dim-user-input');
  document.querySelector('.user-input').classList.add('dark-user-input');
  document.querySelector('.dropdown-content').classList.remove('dim-dropdown');
  document.querySelector('.dropdown-content').classList.add('dark-dropdown');
  document.querySelector('#tweet-modal-container').className = 'dim-tweet-modal';
})

const root = document.querySelector('#root');

defaultButton.addEventListener('click', () => {
  root.className="default-theme"
})

dimButton.addEventListener('click', () => {
  root.className="dim-theme"
})

lightOutButton.addEventListener('click', () => {
  root.className="light-out-theme"
})