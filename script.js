const navBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

navBtn.addEventListener('click', ()=> {
    navList.classList.toggle('active');
})



const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonials = document.querySelectorAll(".testimonial");

// Check if the screen is small
function isSmallScreen() {
  return window.innerWidth <= 768;
}

let currentIndex = 0;
let interval;

// Function to show the next testimonial
function showNextTestimonial() {
  if (!isSmallScreen()) return; // Stop slider for large screens

  // Calculate the new position
  currentIndex = (currentIndex + 1) % testimonials.length;
  const offset = -currentIndex * 100;

  // Move the container
  testimonialsContainer.style.transform = `translateX(${offset}%)`;
}

// Start the slider for small screens
function startSlider() {
  if (isSmallScreen() && !interval) {
    interval = setInterval(showNextTestimonial, 4000);
  }
}

// Stop the slider for larger screens
function stopSlider() {
  if (!isSmallScreen() && interval) {
    clearInterval(interval);
    interval = null;
    testimonialsContainer.style.transform = "translateX(0)"; // Reset position
  }
}

// Initialize slider
window.addEventListener("resize", () => {
  stopSlider();
  startSlider();
});

startSlider();



// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleBtn = item.querySelector('.toggle-btn');
    
    question.addEventListener('click', ()=> {
        // Toggle the display of the answer
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none': 'block';
        // Rotate the toggle button and update its symbol
        toggleBtn.textContent = isVisible ? '+' : '-';
        toggleBtn.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});