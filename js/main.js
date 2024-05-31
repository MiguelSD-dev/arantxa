

document.addEventListener('DOMContentLoaded', function () {

  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
      var path = window.location.pathname;
      var page = path.split("/").pop();

      if (page === ""){
        page = "index.html";
      }

      var navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(function (link) {
        if (link.getAttribute('href') === page) {
          link.classList.add('active');
        } 
      });
    });

  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    });






});
