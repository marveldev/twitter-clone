const dropdownButton = document.querySelector('#dropdown-button');
// const dropdownContent = document.querySelector('.dropdown-content');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
const modalButton = document.querySelector('#modal-button');
const modalOverlay = document.querySelector('#modal-overlay');
const dimButton = document.querySelector('#dim-button');

dropdownButton.addEventListener('click', () => {
  document.querySelector('.dropdown-content').style.display = 'block';
  dropdownOverlay.style.display = 'block';
})

dropdownOverlay.addEventListener('click', () => {
  document.querySelector('.dropdown-content').style.display = 'none';
  dropdownOverlay.style.display = 'none';
})

modalButton.addEventListener('click', () => {
  dropdownOverlay.style.display = 'none';
  modalOverlay.style.display = 'block';
  document.querySelector('.modal-content').style.display = 'block';
  document.querySelector('.dropdown-content').style.display = 'none';
  
})

modalOverlay.addEventListener('click', () => {
  document.querySelector('.modal-content').style.display = 'none';
  modalOverlay.style.display = 'none';
})

dimButton.addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#15202B';
  document.querySelector('body').style.color = '#fff';
  document.querySelector('.logo').classList.add('page-logo');
  document.querySelector('.left-side-nav').classList.add('left-nav');
  document.querySelector('.user-input').classList.add('tweet-input');
  document.querySelector('.options').classList.add('tweet-options');
  document.querySelector('.main-content').classList.add('main-page');
  document.querySelector('.user-options').classList.add('user-option');
  document.querySelector('.trending').classList.add('trends');
  document.querySelector('.input').classList.add('nav-input');




  // document.querySelectorAll('.item').classList.add('tweet-item');
  // document.querySelector('.tweet-info').classList.add('details');






})