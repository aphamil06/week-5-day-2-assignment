function nameFinder(){
    let firstName;
    let lastName;
    let city;
    let state;

    firstName = prompt("What is your first name?");
    lastName = prompt("What is your last name");
    city = prompt("What city are you from?");
    state = prompt("What State are you from?");
    nameHeader.innerHTML = `Welcome ${firstName}!`
    nameParagraph.innerHTML = `Hi ${firstName} ${lastName}!  Thank you for letting us know who you are.  We're pleased to do business with you in the ${city} area.  We're hoping to expand throughout ${state}.`}
    nameButton.onclick = nameFinder
