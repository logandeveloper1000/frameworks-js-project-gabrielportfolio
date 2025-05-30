// Validate Email Address
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Function to show the popup modal with a custom message
function showPopup(message) {
  document.getElementById("popupModalBody").innerText = message;
  const popupModal = new bootstrap.Modal(document.getElementById('popupModal'));
  popupModal.show();
}

// Handle Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (name && validateEmail(email) && message) {
    showPopup(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('name').value = ""; // Clear form fields
    document.getElementById('email').value = ""; // Clear form fields
    document.getElementById('message').value = ""; // Clear form fields
  } else {
    showPopup("Please fill out all fields correctly before submitting.");
  }
});

// Handle Newsletter Subscription
document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const emailField = this.querySelector('input[type="email"]');
  const email = emailField.value.trim();
  
  if (validateEmail(email)) {
    showPopup("Thank you for subscribing to the newsletter!");
    emailField.value = ""; // Clear email field
  } else {
    showPopup("Please enter a valid email address to subscribe.");
  }
});

// Optional: Random Testimonial (example)
const testimonials = [
  `"Amazing work! Highly recommend!" - Elias Sullivan, Project Manager`,

  `"Delivered beyond expectations. Professional and reliable." - Erica Martinez, Content Strategist`,

  `"Creative, fast, and a great communicator!" - Frank Mill, Product Designer`,
  `"I am so happy with the results. - Fernando Ramirez, Construction Contractor"`,
  `"Our new website now feels modern, fast, and perfectly aligned with our brand." - Sophia Bennett, Creative Director`,

  `"His clear communication and attention to detail were key to the project's success." - Robert Price, Startup Founder`,

  `"The project was delivered ahead of schedule with outstanding quality." - Isabella Chen, Product Manager`,

  `"Thanks to his work, our online presence has significantly improved." - Oliver Hayes, IT Consultant`,

  `"His design sense, strategic thinking, and user-focused approach resulted in a website that our customers love and trust." - Raimond Foster, Branding Specialist`
];

function showRandomTestimonial() {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  showPopup(testimonials[randomIndex]);
}

// Smooth scroll behavior for internal links
document.documentElement.style.scrollBehavior = "smooth";

// Function to open Blog Popup Modal with dynamic content
function openBlogPopup(title, imageUrl, description) {
  document.getElementById("blogModalTitle").innerText = title;
  document.getElementById("blogModalImage").src = `img/${imageUrl}`;
  document.getElementById("blogModalDescription").innerText = description;

  const blogModal = new bootstrap.Modal(document.getElementById('blogModal'));
  blogModal.show();
}
