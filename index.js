const dropdownButton = document.querySelector('#dropdown-button');
// const body = document.querySelector('body');
const dropdownContent = document.querySelector('.dropdown-content');
const modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#myModal');

dropdownButton.addEventListener('focus', () => {
  console.log('ok');
  dropdownContent.style.display = 'block';
})

modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
  document.querySelector('.modal-content').style.display = 'block';
  dropdownContent.style.display = 'none';
  
})

modal.addEventListener('click', () => {
  document.querySelector('.modal-content').style.display = 'none';
  modal.style.display = 'none';
})