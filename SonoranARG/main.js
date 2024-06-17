function checkPassword(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Define the correct passwords and their corresponding redirect URLs
    var passwordRedirects = {
        "DRattman": "ratman.html",
        "KLouis": "louis.html",
        "AEdison": "edison.html",
        "JZetterland": "zetterland.html"
    };

    // Get the user input
    var userInput = document.getElementById("password").value;

    // Check if the user input matches any of the defined passwords
    if (passwordRedirects[userInput]) {
        // Redirect to the corresponding page if the password is correct
        window.location.href = passwordRedirects[userInput];
    } else {
        // Show an error message if the password is incorrect
        document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
    }
}

function handleInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var userInput = document.getElementById("password").value.toLowerCase();
        var responseElement = document.getElementById("response");
        var responseText = "";

        switch (userInput) {
            case "email":
                responseText = "Email";
                break;
            case "log":
                responseText = "Log";
                break;
            case "help":
                responseText = "Help";
                break;
            default:
                responseText = "Unknown command";
        }

        // Display the response text
        responseElement.innerText = responseText;

        // Clear the input
        document.getElementById("password").value = "";
    }
}