const buttons = document.querySelectorAll(".tab-button");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".contents");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    buttons.forEach(function (button) {
      button.classList.remove("active");
      e.target.classList.add("active");
    });
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
