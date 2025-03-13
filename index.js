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
petNameInput.setAttribute("placeholder", "Ej: Micifús");

petNameBox.append(petNameLabel, petNameInput)



clientForm.append(clientNameBox, petNameBox);
clientFormBox.append(formTitle, clientForm);
clientFormSection.appendChild(clientFormBox)



