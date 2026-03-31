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
        });