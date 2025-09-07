

// Part 1: Event Handling
// =======================
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
});


// Part 2: Interactive Elements
// ==========================

// Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



// Part 3: Form Validation
// ==========================
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent submission until validation passes
  let valid = true;

  // Reset errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Email validation with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Password validation (min 6 chars, at least 1 number)
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters and contain a number.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formSuccess").textContent =
      "Form submitted successfully! ✅";
    form.reset();
  }
});
