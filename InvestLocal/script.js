// Function to scroll to Opportunities section
function scrollToOpportunities() {
  document.getElementById("opportunities").scrollIntoView({ behavior: "smooth" });
}

// Investment opportunities data
const opportunities = [
  {
    name: "Garissa Real Estate Project",
    location: "Garissa",
    type: "Real Estate",
    description: "Affordable housing project promoting community growth.",
    icon: "🏘️"
  },
  {
    name: "Eastleigh Retail Market",
    location: "Eastleigh",
    type: "Retail",
    description: "A modernized retail space for small business owners.",
    icon: "🛍️"
  },
  {
    name: "Community Agriculture Project",
    location: "Garissa",
    type: "Agriculture",
    description: "Empowering local farmers through sustainable irrigation systems.",
    icon: "🌾"
  },
  {
    name: "Mandera Renewable Energy",
    location: "Mandera",
    type: "Energy",
    description: "Solar power solutions providing affordable electricity to communities.",
    icon: "⚡"
  },
  {
    name: "Nairobi Trade Center",
    location: "Nairobi",
    type: "Trade",
    description: "Investment in wholesale and retail trade facilities for entrepreneurs.",
    icon: "🏢"
  }
];

// Display opportunities dynamically
function displayOpportunities() {
  const container = document.getElementById("opportunityContainer");
  container.innerHTML = "";

  opportunities.forEach(opportunity => {
    const card = document.createElement("div");
    card.className = "opportunity-card";
    card.innerHTML = `
      <h3>${opportunity.icon} ${opportunity.name}</h3>
      <p><strong>Location:</strong> ${opportunity.location}</p>
      <p><strong>Type:</strong> ${opportunity.type}</p>
      <p>${opportunity.description}</p>
    `;
    container.appendChild(card);
  });
}

// Filter opportunities by keyword
function filterOpportunities() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const container = document.getElementById("opportunityContainer");
  container.innerHTML = "";

  const filtered = opportunities.filter(opportunity =>
    opportunity.name.toLowerCase().includes(searchInput) ||
    opportunity.location.toLowerCase().includes(searchInput) ||
    opportunity.type.toLowerCase().includes(searchInput) ||
    opportunity.description.toLowerCase().includes(searchInput)
  );

  filtered.forEach(opportunity => {
    const card = document.createElement("div");
    card.className = "opportunity-card";
    card.innerHTML = `
      <h3>${opportunity.icon} ${opportunity.name}</h3>
      <p><strong>Location:</strong> ${opportunity.location}</p>
      <p><strong>Type:</strong> ${opportunity.type}</p>
      <p>${opportunity.description}</p>
    `;
    container.appendChild(card);
  });
}

// Contact form feedback
document.addEventListener("DOMContentLoaded", function() {
  displayOpportunities();

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    contactForm.reset();
  });
});
// ===============================
// LOGIN / SIGNUP FUNCTIONALITY
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // Handle Sign Up
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((u) => u.email === email)) {
        alert("Email already exists!");
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      window.location.href = "login.html";
    });
  }

  // Handle Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find((u) => u.email === email && u.password === password);

      if (validUser) {
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password");
      }
    });
  }

  // Load Users on Admin Page
  const userTableBody = document.querySelector("#userTable tbody");
  if (userTableBody) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    userTableBody.innerHTML = users
      .map((u) => `<tr><td>${u.name}</td><td>${u.email}</td></tr>`)
      .join("");
  }
});
const firebaseConfig = {
  apiKey: "AIzaSyD***************",
  authDomain: "investment-system.firebaseapp.com",
  databaseURL: "https://investment-system.firebaseio.com",
  projectId: "investment-system",
  storageBucket: "investment-system.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Example: Save data
function saveData() {
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;

  db.ref("investments/" + Date.now()).set({
    name: name,
    amount: amount
  });
  alert("Data saved to Firebase!");
}

