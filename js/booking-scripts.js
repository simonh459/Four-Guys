$(document).ready(function() {

    // Review tower fade in
    $(".review-card").hide().each(function(index){
        $(this).delay(300 * index).fadeIn(600);
    });

    // Character counter
    const maxChars = 200;

    $("#requests").on("input", function() {
        let remaining = maxChars - $(this).val().length;

        $("#charcount").text(remaining);
        $("#charcount").css("color", remaining <= 20 ? "red" : "black");
    });

    // Form validation
    $("#bookingForm").submit(function(e){


        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const today = new Date().toISOString().split("T")[0]; // .toISOString() turns Date object to String. split("T") separates the date from the time, taking the first array only ([0])
        const selectedDate = $("#date").val();
        const time = $("#time").val();

        let isValid = true;

        // name validation
        if (name === "" || /\d/.test(name)) { // checks if name field is blank and uses regex to check for digits
            alert("Enter a valid name! (Must not include numbers)")
            isValid = false;
        }
        
        // email validation
        if (email === "" || !email.includes("@") || !email.includes(".")) { // checks if email is blank as well as whether is contains an "@" and "." like most standard emails
            alert("Enter a valid email address! (Must include and '@' and '.')")
            isValid = false;
        }

        // phone number validation
        if (phone === "" || !/^\d{11}$/.test(phone)) { // checks if phone is blank or not equal to exactly 11 digits in length
            alert("Enter a valid phone number! (Must be 11 digits)")
            isValid = false;
        }

        // Date validation
        if (!selectedDate) {
            alert("Enter a date!");
            e.preventDefault(); // prevents submit button from submitting invalid data
            isValid = false;
            return;
        } 
        else if (selectedDate < today) {
            alert("Booking cannot be in the past!");
            e.preventDefault();
            isValid = false;
            return;
        }

        // Time validation
        if (!time) {
            alert("Enter a time!");
            e.preventDefault();
            isValid = false;
            return;
        } 
        else if (time < "12:00" || time > "22:00") {
            alert("Please select a time between 12:00 and 22:00");
            $("#time").val("");
            e.preventDefault();
            isValid = false;
            return;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            return true;
        }
        else {
            return false;
        }

    });

});