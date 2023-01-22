// Show menu when the user clicks
const showMenu = document.querySelector(".nav-toggle");
const hiddenMenu = document.querySelector("#flipNavBar");

function showMenuBtn() {
   hiddenMenu.classList.toggle("showMenu");
   showMenu.classList.toggle("nav-toggle-focused");
}

// Show text when the user writes something

const notForm = document.forms[0];
const nameNot = notForm.name;
const emailNot = notForm.email;
const errorMsgNot = notForm.lastElementChild;

notForm.addEventListener("submit", (evt) => {
   errorMsgNot.classList.add("hide");
   alert(`${nameNot.value}, your got the opportunity to receive the latest news to your email address!`);
   if(!nameNot.value && !emailNot.value) {
      errorMsgNot.classList.remove("hide");
      evt.preventDefault();
   }
});



// Show hide content when user clicking
const showHides = document.querySelectorAll(".showHideBtn");
for (let i = 0; i < showHides.length; i++) {
    showHides[i].addEventListener("click", () => {
        let showHide = showHides[i].nextElementSibling;
        showHide.classList.toggle("hide");
        let hideIcon = showHides[i].firstElementChild;
        hideIcon.classList.toggle("hide");
        let showIcon = showHides[i].lastElementChild;
        showIcon.classList.toggle("hide");
    }, 0);
}

// ----------------------------------------------------------------

const sendMsg = document.forms[1];
const perName = sendMsg.name;
const perEmail = sendMsg.email;
const perSubject = sendMsg.subject;
const perMessage = sendMsg.message;
const btnSubmit = sendMsg.sBtn;
const errMsg = sendMsg.lastElementChild;

sendMsg.addEventListener("submit", (evt) => {
   errMsg.classList.add("hide");
   alert("Your message has been sended!")
if (!perName.value || !perMessage.value || !perEmail.value || !perSubject.value) {
   errMsg.classList.remove("hide");
   evt.preventDefault();
}
})

