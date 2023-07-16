const movePages = document.getElementsByClassName("next");
const secondPage = document.getElementsByClassName("secondPage")[0];

for (let i = 0; i < movePages.length; i++) {
  movePages[i].addEventListener("click", function() {
    secondPage.scrollIntoView({ behavior: 'smooth' });
  });
}