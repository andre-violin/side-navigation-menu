const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};
const menuItem = document.querySelectorAll(".menu-item");
function activeLink() {
  menuItem.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
menuItem.forEach((item) => item.addEventListener("click", activeLink));
