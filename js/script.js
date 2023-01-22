const showHideVar = document.querySelector('span');

showHideVar.addEventListener("click", showHide);

function showHide(event) {
   const hideVar = document.querySelector('.show');
   const showVar = document.querySelector('.hide');
      hideVar.classList.toggle('.bi-arrow-down');
      showVar.classList.toggle('.bi-x-lg');
   
}