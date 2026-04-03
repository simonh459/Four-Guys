 document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const contrastButton = document.getElementById('toggle-contrast');
            const textSizeButton = document.getElementById('toggle-text-size');

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

            let currentSlide = 0;
            const slides = document.querySelectorAll(".slide");

            // show first slide
            showSlide(currentSlide);

            function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));

            // loop back if out of range
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add("active");
            }

            window.changeSlide = function changeSlide(direction) {
            showSlide(currentSlide + direction);
            }
        });