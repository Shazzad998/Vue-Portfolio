const navigation = document.querySelector(".navigation");
const navToggle = document.querySelector(".nav-toggle");
const open_svg = document.querySelector(".open-svg");
const close_svg = document.querySelector(".close-svg");

navToggle.addEventListener("click", () => {
  const expanded = navigation.classList.contains("translate-x-full");

  if (expanded) {
    navToggle.classList.add("fixed", "right-3");
    navigation.classList.remove("translate-x-full");
    open_svg.classList.add("hidden");
    close_svg.classList.remove("hidden");
  } else {
    navigation.classList.add("translate-x-full");
    open_svg.classList.remove("hidden");
    close_svg.classList.add("hidden");
    navToggle.classList.remove("fixed", "right-3");
  }
});

// tab

let tabsContainer = document.querySelector("#tabs");

if (tabsContainer) {
  let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

  tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();

      let tabName = this.getAttribute("href");

      let tabContents = document.querySelector("#tab-contents");

      for (let i = 0; i < tabContents.children.length; i++) {
        tabTogglers[i].parentElement.classList.remove("border-b");
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("hidden");
      }
      e.target.parentElement.classList.add("border-b");
    });
  });
}
