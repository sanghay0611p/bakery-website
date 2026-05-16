// ===============================
// SWEET CRUMBS BAKERY WEBSITE
// JAVASCRIPT FILE
// ===============================

console.log("Bakery Website Loaded Successfully 🍰");

// ===============================
// WELCOME ALERT
// ===============================

window.onload = function () {

  console.log("Website Fully Loaded ✅");

};

// ===============================
// SMOOTH SCROLL EFFECT
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target =
    document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// ===============================
// MOBILE MENU TOGGLE (Future Use)
// ===============================

const mobileMenuBtn =
document.getElementById("mobile-menu-btn");

if (mobileMenuBtn) {

  mobileMenuBtn.addEventListener("click", () => {

    const nav =
    document.querySelector("nav");

    nav.classList.toggle("show-menu");

  });

}

// ===============================
// PRODUCT SEARCH SYSTEM
// ===============================

const searchInput =
document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", function () {

    let filter =
    this.value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

      let title =
      card.querySelector("h3")
      .innerText
      .toLowerCase();

      if (title.includes(filter)) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

}

// ===============================
// BACK TO TOP BUTTON
// ===============================

// Create Button

const topBtn =
document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Button Styling

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff69b4";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

// Show Button On Scroll

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

// Scroll To Top

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

// ===============================
// GALLERY IMAGE HOVER EFFECT
// ===============================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

  img.addEventListener("mouseenter", () => {

    img.style.transform = "scale(1.05)";

    img.style.transition = "0.3s";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform = "scale(1)";

  });

});

// ===============================
// PRODUCT CARD HOVER EFFECT
// ===============================

const productCards =
document.querySelectorAll(".card");

productCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

    card.style.transition = "0.3s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});

// ===============================
// CURRENT YEAR AUTO UPDATE
// ===============================

const footer =
document.querySelector("footer p");

if (footer) {

  const year =
  new Date().getFullYear();

  footer.innerHTML =
  `© ${year} Sweet Crumbs Bakery`;

}

// ===============================
// CONTACT FORM VALIDATION
// ===============================

const contactForm =
document.getElementById("contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You! Your message has been sent ✅");

    contactForm.reset();

  });

}

// ===============================
// DARK MODE SYSTEM
// ===============================

const darkBtn =
document.getElementById("dark-mode-btn");

if (darkBtn) {

  darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

  });

}

// ===============================
// LOADING FINISHED
// ===============================

console.log("All JavaScript Features Loaded 🚀");