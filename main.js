const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};
const menuItemIcon = document.querySelectorAll(".icon");
function activeLink() {
  menuItemIcon.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
menuItemIcon.forEach((item) => item.addEventListener("click", activeLink));
