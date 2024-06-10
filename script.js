// Show a welcome alert when the page loads
document.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to Loruki! Explore the best platform for building applications.');
});

// Smooth scroll functionality
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
}

// Validate and handle form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const company = e.target.company.value;
  const email = e.target.email.value;

  if (name && company && email) {
    alert(`Thank you, ${name}! Your demo request has been submitted.`);
    e.target.reset();
  } else {
    alert('Please fill out all the fields.');
  }
});
