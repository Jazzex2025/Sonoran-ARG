function handleInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var userInput = document.getElementById("password").value.toLowerCase();
        var responseElement = document.getElementById("response");
        var responseText = "";

        switch (userInput) {
            case "log":
                responseText = "Last Log Entered:\n\n Date: June 17th, 2024. Time: 3:16 AM\n\n This is a lot of rambling from the incoherent thoughts of a sleep deprived 17 year old, so sorry for the legibility. Congratulations on finding this page. I did not expect anyone to be dedicated enough to find this. At the time of writing, I have no idea if this project will ever even come to fruition. If it has, then thank you for being around for this journey. I made this ARG for fun because Certrix is something truly, truly special to me. I have poured years of work and hundreds of dollars into Certrix because it has such a place in my heart that I could not knowingly do anything less. This ARG is something I've thought of doing for a while, but never knew how to approach. Hell, the safe rooms in the minecraft server have existed since this building was made, at least two years ago by now. I just never knew how to make it real, make it special. And sure, maybe this has been done before by a bunch of other people wanting to give their friends something fun to do but having the connection I have with Certrix is something you'd see so rarely, this will be the 7th year I have been a part of Certrix, and Certrix has been a part of my life. I think of this as a personal project built for the love that I have given and recieved from a community that has truly changed my life for the better. To all of my friends, as rough as it may get and as devoid as our server may seem sometimes, there will always be light at the end of that tunnel. Certrix will boom again, whether we have to adapt to find how or not. I have met some of the best people I know because of Certrix, and that's why I believe everything so wholeheartedly. So to you, User: Whoever dug deep enough to find this secret message, thank you. Thank you for participating in this event, thank you for putting in the effort even if it was just for a heartfelt message here at the end (this isn't the end of the arg!). Thank you for sticking around. -Jack ";
                break;
            case "help":
                responseText = "!! WARNING !!\n Heavy Corruption Detected\n Recognized Commands:\n\n Help\n\n Whoami\n\n Log\n\n\n More Commands May Be Available, Data Missing on:\n\n 9999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999\n\n Commands";
                break;
            case "whoami":
                responseText = "You are you. Someone searching every corner of a little ARG for the answers. Looks like you found something else, instead.";
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