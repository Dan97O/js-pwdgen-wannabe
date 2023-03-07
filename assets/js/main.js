/* Chiedi all'utente il suo nome */
let username = prompt("Il tuo nome?");
console.log(username);

/* Chiedi il suo cognome */
let lastName = prompt("Il tuo cognome?");
console.log(lastName);

/* chiedi il suo colore preferito */
let favoritColor = prompt("Il tuo colore preferito?");
console.log(favoritColor);

/* Scrivi sulla pagina il risultato
usando formato: nomecognomecolorepreferito23
*/
let nameElement = document.getElementById('result');
console.log(nameElement);
nameElement.innerHTML = username + lastName + favoritColor + 23;
