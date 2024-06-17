function handleInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var userInput = document.getElementById("password").value.toLowerCase();
        var responseElement = document.getElementById("response");
        var responseText = "";

        switch (userInput) {
            case "email":
                responseText = "Three Emails Listed: Please Select Email:\n\n INVALID SYNTAX > id=list.log(\"SonoranHQ\")\n\n Edison\n\n Rattman ";
                break;
            case "log":
                responseText = "Last Log Entered:\n\n Date: 21/5/22\n\n The project for the Botany team is due at the end of this week. I've been pushing the team harder than ever to work on this, because a breakthrough of this magnitude would turn the tide on us forever. Sonoran could be a name echoed in every household until the end of time if this works right. Everything would be fine if HQ wasn't breathing down my neck, and if Rattman wasn't on my ass the entire time. He has been paranoid about the new sample genus since it arrived in our station, and I'm praying he holds his mouth enough to not let HQ hear about this. If we don't meet the deadline on this project, they'll disband the team. I'm sure of it. If he wasn't such a technical genius, I'd have fired Doug three years ago. HQ is calling, end of log.";
                break;
            case "edison":
                responseText = "Email Target: Alex Edison (aedison@sonoranbi.com)\nEmail Type: Outgoing (from jzetterland@sonoranbi.com)\nDate Sent:GET->DATELOG=UNAVAILABLE - TIME: 7:31 UGST\n\n EMAIL CONTENTS:\n\n Morning Alex. Today's the day of the project launch, and I hope you are as excited as I am. As the head of the project, I hope to see you front and center in the viewing booth alongside myself and the Sonoran representatives, who'd love to hear about your work. Remember, we launch at 8:15. Don't be late!";
                break;
            case "rattman":
                responseText = "Email Target: Doug Rattman (drattman@sonoranbi.com)\nEmail Type: Outgoing (from jzetterland@sonoranbi.com)\nDate Sent: 26/5/22 - TIME: 2:32 UGST\n\n EMAIL CONTENTS:\n\n Doug. I have told you this time and time again, but you need to stop using my Passkey to get in to the Black Box. That data is above your clearance level. I have been grateful with not reporting this or firing you, and this is your last warning. If I catch you doing this again, you're off the project. Although that might be a favor, considering how adamant you have been that this PERFECTLY SAFE genus is dangerous. The Black Box is going to go into secure storage after your shift ends for the project launch tomorrow. I will revoke access immediately if I see any access outside of your personal profile.";
                break;
            case "sonoranhq":
                responseText = "Email Source: SONORAN HQ (sonoranhq@sonoranbi.gov)\nEmail Type: Incoming (to jzetterland@sonoranbi.com)\nDate Sent: 25/5/22 - TIME: 9:32 UGST\n\n EMAIL CONTENTS: Good Morning, Mr. Zetterland. This message comes to you as an inquiry about recent concerns we have heard voiced towards the Botany team's lead project. The project deadline remains on 28/5 of 2422. We are still sending our evaluation team down on 27/5 as planned, have your project functional and safe by then. We will keep in touch.\n -Bob S.";
                break;
            case "help":
                responseText = "!! WARNING !!\n Heavy Corruption Detected\n Recognized Commands:\n\n Help\n\n Whoami\n\n Log\n\n Email\n\n\n More Commands May Be Available, Data Missing on:\n\n 4\n\n Commands";
                break;
            case "whoami":
                responseText = "Jacob Zetterland";
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