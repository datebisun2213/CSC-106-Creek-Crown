document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("home-page")) {
    setTimeout(() => {
      console.log("Home page loaded. Welcome to Creek & Crown.");
    }, 500);
  }

  if (document.getElementById("products-page")) {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".product-card");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        cards.forEach((card) => {
          if (
            filterValue === "all" ||
            card.getAttribute("data-category") === filterValue
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  if (document.getElementById("trustees-page")) {
    const toggleBtns = document.querySelectorAll(".toggle-bio");
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const bio = e.target.nextElementSibling;
        if (bio.style.display === "block") {
          bio.style.display = "none";
          e.target.innerText = "Read Bio";
        } else {
          bio.style.display = "block";
          e.target.innerText = "Hide Bio";
        }
      });
    });
  }

  if (document.getElementById("events-page")) {
    const countdownEl = document.getElementById("next-event-countdown");

    const eventDate = new Date("March 30, 2026 18:00:00").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        countdownEl.innerHTML = "EVENT STARTED!";
      }
    }, 1000);
  }

  if (document.getElementById("contact-page")) {
    const form = document.getElementById("appointment-form");
    const responseDiv = document.getElementById("form-response");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;

      if (name === "" || date === "") {
        alert("Please fill in your name and preferred date.");
        return;
      }

      form.style.display = "none";
      responseDiv.style.display = "block";
      responseDiv.innerText = `Thank you, ${name}. Your appointment request for ${date} has been received. Our tailors will contact you shortly.`;
    });
  }

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
});
