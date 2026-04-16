 document.addEventListener('DOMContentLoaded', () => {
            const dots = document.querySelectorAll(".dot");

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