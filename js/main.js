const professionButton = document.querySelector(
  '[data-atribut="professionButton"]'
);
const professionSubList = document.querySelector('.profession-duties');

professionButton.addEventListener('click', (e) => {
  professionButton.classList.toggle('profession__link_active');
  professionSubList.classList.toggle('visually-hidden');
});
