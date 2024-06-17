function handleInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var userInput = document.getElementById("password").value.toLowerCase();
        var responseElement = document.getElementById("response");
        var responseText = "";

        switch (userInput) {
            case "email":
                responseText = "Three Emails Listed: Please Select Email:\n\n Louis\n\n Ivory\n\n Zetterland ";
                break;
            case "log":
                responseText = "Last Log Entered:\n\n Date: GET->DATELOG=UNAVAILABLE\n\n I have to think about this. This is the last log that will be viewable from this device, the Black Box deletes the old ones. Fortunately, there's no limit to how long I can write. My name is Doug Rattman. I am hopefully the person that you have seen scribble on the vents, and write in that guidebook. This comes roughly three hours after the neurotoxin started, it hasn't made its way this deep into the vents. I pray that gives me enough time to make this work for the next person to find this. The Black Box cannot hold the data of the incident. You will have to find it off-site. I can only help you with so much. You'll find a button somewhere nearby, it should move one of the panels allowing you to trip a wire connected to the old vent locks. It will lead you to another hideout. There's a lot for you to find, and not a lot of time for me to explain. Sonoran is a failed attempt at playing God. To those who supplant us, use this facility for good. Sonoran will die here. There are two more rooms like the one you have found this Black Box in. The answer lies behind closed doors. One will have the key. You must find both. The book will have the rest of the information that I can offer. ";
                break;
            case "help":
                responseText = "!! WARNING !!\n Heavy Corruption Detected\n Recognized Commands:\n\n Help\n\n Whoami\n\n Email\n\n\n More Commands May Be Available, Data Missing on:\n\n 5\n\n Commands";
                break;
            case "zetterland":
                responseText = "Email Source: Jacob Zetterland (jzetterland@sonoranbi.com)\nEmail Type: Incoming (to drattman@sonoranbi.com)\nDate Sent:GET->DATELOG=UNAVAILABLE - TIME: 2:41 UGST\n\n EMAIL CONTENTS:\n\n Doug. I have told you this time and time again, but you need to stop using my Passkey to get in to the Black Box. That data is above your clearance level. I have been grateful with not reporting this or firing you, and this is your last warning. If I catch you doing this again, you're off the project. Although that might be a favor, considering how adamant you have been that this PERFECTLY SAFE genus is dangerous. The Black Box is going to go into secure storage after your shift ends. I will revoke access immediately if I see any access outside of your personal profile.";
                break;
            case "ivory":
                responseText = "Email Target: Panam Ivory (panamivory@generalcrown.org) --> UNSECURE LINE\nEmail Type: Outgoing (from drattman@sonoranbi.com)\nDate Sent: 27/5/22 - TIME: 8:19 UGST\n\n EMAIL CONTENTS:\n\n Honey, this isn't how I wanted this to go, but I've ran out of time. I wish I could've heard your voice again, and you mine. Leaving you with this doesn't feel fair. I wish there was something you could do, but I have a feeling Sonoran's going to disappear off the face of the earth before you can try and move for any legal action. Zetterland is a greedy, arrogant man and everything you'll hear about is his fault. I had a feeling of what would happen if I came in today, but I had to try. I had to do something to stop this, or get as many people out as I could. I'll miss you. I love you.";
                break;
            case "louis":
                responseText = "Email Target: Kerry Louis (kerlouis@sonoranbi.com)\nEmail Type: Outgoing (from drattman@sonoranbi.com)\nDate Sent:GET->DATELOG=UNAVAILABLE - TIME: 7:32 UGST\n\n EMAIL CONTENTS:\n\n Today's the launch of the project, Kerry. I cannot stress this enough, DO NOT COME IN. Call off sick, it doesn't matter. I'm doing what I can to stop them, nobody has listened to me so far. If you come and I cannot stop them, you will die. Stay. Home. Do yourself a favor and start job hunting.";
                break;
            case "whoami":
                responseText = "Doug Rattman";
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