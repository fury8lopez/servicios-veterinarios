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

const clientFormSection = document.getElementById("form");

const clientForm = document.createElement("form");
clientForm.classList.add("form-box");






clientFormSection.appendChild(clientForm)



