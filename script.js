// verkrijg referenties naar de formuliervelden
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const form = document.getElementById("myForm");

// valideer het formulier wanneer het wordt verzonden
form.addEventListener("submit", (event) => {
  // voorkom dat het formulier automatisch wordt verzonden
  event.preventDefault();

  // verkrijg de ingevoerde waarden
  const name = nameField.value;
  const age = ageField.value;

  // controleer of de naam en leeftijd zijn ingevuld
  if (name.trim() === "" || age.trim() === "") {
    alert("Vul alstublieft uw naam en leeftijd in.");
    return;
  }

  // controleer of de leeftijd een getal is
  if (isNaN(age)) {
    alert("Leeftijd moet een getal zijn.");
    return;
  }

  // verzend het formulier als het geldig is
  form.submit();
});
