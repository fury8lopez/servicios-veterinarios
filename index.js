let clientes = [
  {
    mascota: "Atapuerco",
    especie: "cerdo",
    imagen: "url()",
    cliente: "Juan Simón",
    "próxima cita": "",
  },
  {
    mascota: "Piticli",
    especie: "loro",
    imagen: "url()",
    cliente: "Luis Fury",
    "próxima cita": "",
  },
  {
    mascota: "Freya",
    especie: "perro",
    imagen: "url()",
    cliente: "Luis Simón",
    "próxima cita": "",
  },
  {
    mascota: "Brunelleschi",
    especie: "gato",
    imagen: "url()",
    cliente: "Eugenio Drosdov",
    "próxima cita": "",
  },
];

// const renderClients = () => {
//   clientes.forEach((client) => {
//     const clientList = document.getElementById("hero");
//     const clientCard = document.createElement("div");

//     const petName = document.createElement("h2");
//     petName.textContent = `${client.mascota}`;
//     const petSpecies = document.createElement("p");
//     petSpecies.textContent = `Especie: ${client.especie}`;
//     const clientName = document.createElement("p");
//     clientName.textContent = `Cliente: ${client.cliente}`;

//     clientCard.append(petName, petSpecies, clientName);

//     clientList.append(clientCard);
//   });
// };

// renderClients();


//SECCIÓN DE FORM
const clientFormSection = document.getElementById("info-form");

//CAJA DE FORM
const clientFormBox = document.createElement("div");
clientFormBox.classList.add("form-box");

//TÍTULO FORM
const formTitle = document.createElement("h2");
formTitle.textContent = "Queremos conocerte";

//FORM

const clientForm = document.createElement("form");
clientForm.classList.add("form");

///ELEMENTOS FORM

//NOMBRE CLIENTE
const clientNameBox = document.createElement("div");
clientNameBox.classList.add("form-item");

const clientNameLabel = document.createElement("label");
clientNameLabel.setAttribute("for", "client-name");
clientNameLabel.textContent = "Nombre y apellidos: "

const clientNameInput = document.createElement("input");
clientNameInput.setAttribute("id", "client-name");
clientNameInput.setAttribute("type", "text");
clientNameInput.setAttribute("placeholder", "Ej: John Doe");

clientNameBox.append(clientNameLabel, clientNameInput)

//NOMBRE MASCOTA

const petNameBox = document.createElement("div");
petNameBox.classList.add("form-item");

const petNameLabel = document.createElement("label");
petNameLabel.setAttribute("for", "pet-name");
petNameLabel.textContent = "Nombre de mascota: "

const petNameInput = document.createElement("input");
petNameInput.setAttribute("id", "pet-name");
petNameInput.setAttribute("type", "text");
petNameInput.setAttribute("placeholder", "Ej: Micifús");

petNameBox.append(petNameLabel, petNameInput)

//ESPECIE MASCOTA

const petSpeciesBox = document.createElement("div");
petSpeciesBox.classList.add("form-item");

const petSpeciesLabel = document.createElement("label");
petSpeciesLabel.setAttribute("for", "pet-species");
petSpeciesLabel.textContent = "Especie: "

const petSpeciesInput = document.createElement("input");
petSpeciesInput.setAttribute("id", "pet-species");
petSpeciesInput.setAttribute("type", "text");
petSpeciesInput.setAttribute("placeholder", "Ej: Gato");

petSpeciesBox.append(petSpeciesLabel, petSpeciesInput)

//RAZA DE MASCOTA

const petBreedBox = document.createElement("div");
petBreedBox.classList.add("form-item");

const petBreedLabel = document.createElement("label");
petBreedLabel.setAttribute("for", "pet-breed");
petBreedLabel.textContent = "Raza: "

const petBreedInput = document.createElement("input");
petBreedInput.setAttribute("id", "pet-breed");
petBreedInput.setAttribute("type", "text");
petBreedInput.setAttribute("placeholder", "Ej: Callejero");

petBreedBox.append(petBreedLabel, petBreedInput)

//EMAL

const clientEmail = document.createElement("div");
clientEmail.classList.add("form-item");

const clientEmailLabel = document.createElement("label");
clientEmailLabel.setAttribute("for", "client-email");
clientEmailLabel.textContent = "Email: "

const clientEmailInput = document.createElement("input");
clientEmailInput.setAttribute("id", "client-email");
clientEmailInput.setAttribute("type", "email");
clientEmailInput.setAttribute("placeholder", "Ej: juan.simon@mascotero.com");

clientEmail.append(clientEmailLabel, clientEmailInput)


clientForm.append(clientNameBox, petNameBox, petSpeciesBox, petBreedBox, clientEmail);
clientFormBox.append(formTitle, clientForm);
clientFormSection.appendChild(clientFormBox)



