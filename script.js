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

// submit form

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzeUELthlhOMsDMLRHyMp4Sjj67delzSZz8ZQY7cAD-BZ7wC2Duv6t_DkzbDSXgYsd4/exec";
// const form = document.forms["submit-to-google-sheet"];

// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Your message has been sent successfully!";
//       setTimeout(() => {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

function submitForm(e) {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  fetch("sendMail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("There is a problem with network");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
      form.reset();
      // form.remove()  daha dogrz olur bence, denersin
    })
    .catch((error) => {
      console.log("There was a problem with the fetch oparetion", error);
    });
}

const copyright = document.getElementById("copyright");
const getDate = new Date().getFullYear();
copyright.style.textDecoration = "none";
copyright.style.color = "#ffdd";
copyright.style.padding = "5px";

copyright.innerHTML = `&copy; Mehmet Yavas ${getDate}. All rights reserved.`;

const pictures = document.querySelectorAll(".enjoy img");

Array.from(pictures).forEach((picture) => {
  picture.addEventListener("click", function (e) {
    const image = e.target;
    console.log(image);
  });
});
