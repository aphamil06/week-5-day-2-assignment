function dateFinder(){
    let name;
    let date;
    name = prompt("What is your name?");
    date = prompt("When would you like for your session to be?")
    dateHeader.innerHTML = `Hi ${name}!`;
    dateParagraph.innerHTML = `Thank you for selecting your date for your session. We have you booked for ${date}!  We'll see you then!`;
}
    dateButton.onclick = dateFinder;

