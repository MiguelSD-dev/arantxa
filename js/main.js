function loadPartials() {
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    });

  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', loadPartials);
