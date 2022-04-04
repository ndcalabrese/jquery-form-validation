// Function only executes after page has loaded
$(document).ready(

    // Adds event listener to submit button
    $("#submit").on("click", function () {

        // Stores the selectors of the <input> and <textarea> tags as a variable and puts them in an array
        let userName = $("#name");
        let userEmail = $("#email");
        let userPhone = $("#phone");
        let userMsg = $("#message-area");
        const required = [userName, userEmail, userPhone, userMsg];

        // Traverses the array
        for (let i = 0; i < required.length; i++) {

            // If the user input is blank, display warning message and
            // change color of warning message and corresponding label
            if (required[i].val() == "") {
                $("#message")
                    .html("Please Fill Out Required Fields")
                    .addClass("warning");
                $(required[i]).prev("label")
                    .addClass("warning");

            // If the user input is not blank, change color of the
            // corresponding label
            } else {
                $(required[i]).prev("label")
                    .removeClass("warning");
            }
        }
        
        // Verify that no <label> tags have class="warning". If so,
        // Remove the form from the DOM and render 'thank you' message
        if (!$("label").hasClass("warning")) {
            $("#form").remove();
            $("h2").html("Thanks for your feedback!");
        }
    })
);
