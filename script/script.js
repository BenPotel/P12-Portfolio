// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
  const header = document.querySelector(".navbar");
  window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarSupportedContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      new bootstrap.Collapse(menuToggle).toggle();
    });
  });
}

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
  const container = document.querySelector("#skills .container");
  let row = document.createElement("div");
  row.classList.add("row");

  // Load the JSON file
  fetch("data/skills.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the JSON data and create HTML elements
      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "mt-4");
        card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" alt="${item.alt}"/>
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

        // Append the card to the current row
        row.appendChild(card);

        // If the index is a multiple of 3 or it's the last element, create a new row
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row);
          row = document.createElement("div");
          row.classList.add("row");
        }
      });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
  const container = document.querySelector("#portfolio .container");
  let row = document.createElement("div");
  row.classList.add("row");

  // Load the JSON file
  fetch("data/portfolio.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the JSON data and create HTML elements
      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "mt-4");
        card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/${item.image}" alt="${
          item.alt
        }" style="width:100%">
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.text}</p>
                          </div>
                          <div class="text-center">
                            ${
                              item.link
                                ? `<a href="${item.link}" target="_blank" class="btn btn-success">Repo Github</a>`
                                : ""
                            }
                            ${
                              item.link2
                                ? `<a href="${item.link2}" target="_blank" class="btn btn-success">Github Page</a>`
                                : ""
                            }
                        </div>
                </div>
                `;

        // Append the card to the current row
        row.appendChild(card);

        // If the index is a multiple of 3 or it's the last element, create a new row
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row);
          row = document.createElement("div");
          row.classList.add("row");
        }
      });
    });
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const togglerIcon = document.querySelector(
    ".navbar-toggler .navbar-toggler-icon"
  );

  function updateTogglerIcon() {
    const navbarTextColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--navbar-text")
        .trim() || "#000000";
    const encodedColor = encodeURIComponent(navbarTextColor);

    togglerIcon.style.backgroundImage = `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${encodedColor}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;
  }

  function updateTogglerIconScrolled() {
    const scrolledColor = "#2f5869"; // couleur définie pour .scrolled
    const encodedColor = encodeURIComponent(scrolledColor);

    togglerIcon.style.backgroundImage = `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${encodedColor}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;
  }

  function handleScroll() {
    if (window.scrollY > 20) {
      // ajustez la valeur selon vos besoins
      navbar.classList.add("scrolled");
      updateTogglerIconScrolled();
    } else {
      navbar.classList.remove("scrolled");
      updateTogglerIcon();
    }
  }

  updateTogglerIcon(); // Initial update
  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
