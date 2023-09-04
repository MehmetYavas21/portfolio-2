const tablinks = document.getElementsByClassName("tab-links");

const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const sidebar = document.getElementById("sidebar");

function openMenu() {
  sidebar.style.right = "0";
}

function closeMenu() {
  sidebar.style.right = "-200px";
}
