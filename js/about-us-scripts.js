 document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const textSizeButton = document.getElementById('toggle-text-size');
            const dots = document.querySelectorAll(".dot");

            // Function to toggle a class on the body and update the button state
            function toggleOption(button, className) {
                body.classList.toggle(className);
                const isActive = body.classList.contains(className);
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', isActive);
            }

            // Toggle Large Text Size
            if (textSizeButton) {
                textSizeButton.addEventListener('click', () => {
                    toggleOption(textSizeButton, 'large-text');
                });
            }

            //Slideshow
            let currentSlide = 0;
            const slides = document.querySelectorAll(".slide");

            // show first slide
            showSlide(currentSlide);

            function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            // loop back if out of range
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");
            }

            window.changeSlide = function changeSlide(direction) {
            showSlide(currentSlide + direction);
            }

            window.goToSlide = function(index) {
            showSlide(index);
            }

            // automatic timer set for 5 seconds
            setInterval(() => {
                changeSlide(1);
            }, 5000);

        });

// jQuery code
// read more button changes text when clicked and toggle scroll animation
$(document).ready(function() {
  $(".read-more").click(function() {
    $(".extra-text").slideToggle(400);

    if ($(this).text() === "Read more..") {
      $(this).text("Show less..")}
    else {
      $(this).text("Read more..")}
  });
});


// selected text fades in when page is loaded
$(document).ready(function() {
  $(".fade-in").hide().fadeIn(1000);
});


// animation when any button is clicked
$(".btn").click(function () {
  $(this).addClass("clicked");

  setTimeout(() => {
    $(this).removeClass("clicked");
  }, 200);
});