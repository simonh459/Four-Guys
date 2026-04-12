$(document).ready(function(){
    $(".review-card").hide();

    $(".review-card").each(function(index){
        $(this).delay(300 * index).fadeIn(600);
    });
});

$(document).ready(function () {

    const maxChars = 100;

    $("#requests").on("input", function () { // .on runs function anytime a change is made on id="requests" (text box)
        let length = $(this).val().length;
        let remaining = maxChars - length;

        $("#charcount").text(remaining);

        // Text goes red whenever wordcount is less than 15
        if (remaining <= 15) {
            $("#charcount").css("color", "red");
        } else {
            $("#charcount").css("color", "black");
        }
    });

});