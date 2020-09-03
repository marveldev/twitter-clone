const dropdownButton = document.querySelector('#dropdown-button');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
const modalButton = document.querySelector('#modal-button');
const modalOverlay = document.querySelector('#modal-overlay');
const dimButton = document.querySelector('#dim-button');
const defaultButton = document.querySelector('#default-button');
const lightOutButton = document.querySelector('#light-out-button');

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
  document.querySelector('.modal-container').style.display = 'block';
  document.querySelector('.dropdown-content').style.display = 'none';
  
})

modalOverlay.addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'none';
  modalOverlay.style.display = 'none';
})

dimButton.addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#15202B';
  document.querySelector('body').style.color = '#fff';
  document.querySelector('.logo').classList.add('dim-logo');
  document.querySelector('.left-side-nav').classList.add('dim-nav');
  document.querySelector('.modal-container').classList.add('dim-modal');
  document.querySelector('.options').classList.add('tweet-options');
  document.querySelector('.input').classList.add('dim-input');
  document.querySelector('.main-content').classList.add('dim-page');
  document.querySelector('.user-options').classList.add('dim-user-option');

  document.querySelector('.trending').classList.remove('dark-trends');
  document.querySelector('.trending').classList.add('trends');
  document.querySelector('.user-input').classList.remove('dark');
  document.querySelector('.user-input').classList.add('dim');
})

defaultButton.addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#fff';
  document.querySelector('body').style.color = '#000';
  document.querySelector('.logo').classList.remove('dim-logo');
  document.querySelector('.left-side-nav').classList.remove('dim-nav');
  document.querySelector('.user-input').classList.remove('dim');
  document.querySelector('.options').classList.remove('tweet-options');
  document.querySelector('.main-content').classList.remove('dim-page');
  document.querySelector('.user-options').classList.remove('dim-user-option');
  document.querySelector('.trending').classList.remove('trends');
  document.querySelector('.input').classList.remove('dim-input');
  document.querySelector('.modal-container').classList.remove('dim-modal');
  document.querySelector('.user-options').classList.remove('dark-user-option');
  document.querySelector('.main-content').classList.remove('dark-page');
  document.querySelector('.input').classList.remove('dark-input');
  document.querySelector('.trending').classList.remove('dark-trends');
  document.querySelector('.user-input').classList.remove('dark');
})

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
  document.querySelector('.user-input').classList.remove('dim');
  document.querySelector('.user-input').classList.add('dark');
})
