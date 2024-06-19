function sessionFinder(){
    let session;
    let location;
    let lighting;
    session = prompt("What type of session would you like?");
    location = prompt("Would you like an indoor or outdoor session?");
    lighting = prompt("Do you prefer natural light or flash photography?");
sessionHeader.innerHTML = `Your ${session} session`;
sessionParagraph.innerHTML = `We have you booked for a ${session} session at a ${location} location of your choosing using ${lighting} lighting.  If you have any further questions feel free to reach out to us.  Thank you.`;
}
sessionButton.onclick = sessionFinder;