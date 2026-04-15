$(document).ready(function() {

    // Review tower fade in
    $(".review-card").hide().each(function(index){
        $(this).delay(300 * index).fadeIn(600);
    });

    // Character counter
    const maxChars = 100;

    $("#requests").on("input", function() {
        let remaining = maxChars - $(this).val().length;

        $("#charcount").text(remaining);
        $("#charcount").css("color", remaining <= 15 ? "red" : "black");
    });

    // Form validation
    $("#bookingForm").submit(function(e){

        const today = new Date().toISOString().split("T")[0]; // .toISOString() turns Date object to String. split("T") separates the date from the time, taking the first array only ([0])
        const selectedDate = $("#date").val();
        const time = $("#time").val();

        // Date validation
        if (!selectedDate) {
            alert("Enter a date!");
            e.preventDefault(); // prevents submit button from submitting invalid data
            return;
        } 
        else if (selectedDate < today) {
            alert("Booking cannot be in the past!");
            e.preventDefault();
            return;
        }

        // Time validation
        if (!time) {
            alert("Enter a time!");
            e.preventDefault();
            return;
        } 
        else if (time < "12:00" || time > "22:00") {
            alert("Please select a time between 12:00 and 22:00");
            $("#time").val("");
            e.preventDefault();
            return;
        }

    });

});