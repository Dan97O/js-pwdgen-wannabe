/* Chiedi all'utente il suo nome */
const username = prompt("Il tuo nome?");
console.log(username);

/* Chiedi il suo cognome */
const lastName = prompt("Il tuo cognome?");
console.log(lastName);

/* chiedi il suo colore preferito */
const favoritColor = prompt("Il tuo colore preferito?");
console.log(favoritColor);

/* Scrivi sulla pagina il risultato
usando formato: nomecognomecolorepreferito23
*/
const nameElement = document.getElementById('result');
console.log(nameElement);
nameElement.innerHTML = username + lastName + favoritColor + 23;
