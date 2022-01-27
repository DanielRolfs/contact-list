let names = ['Erica Mustermann','John Doe'];
let phoneNumbers = ['1234', '5678'];
load();

function render(){
	let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`
    content.innerHTML += `
        <div>
            <input placeholder="Name" id="name">
            <input placeholder="Telefon" id="phone">
            <button onclick="addContact()">Hinzufügen</button>
        </div>
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += `
            <div class="card">
                <b>Name: </b> ${name} <br>
                <b>Telefon: </b> ${phoneNumber}
                <button onclick="deleteContact(${i})">Delete</button>
            </div>
        `;
    }

}

function addContact(){
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    names.push(name.value);
    phoneNumbers.push(phone.value);

    render();
    save();
}

function deleteContact(i){
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();
}

function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);
    
    let phoneNumbersAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneNumbersAsText);
}

function load() {
    let namesAsText = localStorage.getItem('names');
    let phoneNumbersAsText = localStorage.getItem('phoneNumbers');

    if (namesAsText && phoneNumbersAsText){
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneNumbersAsText);
    }
}