import Client from './Client.js';
import Taxes from './Taxes.js';


// Obtener elementos del formulario
const form = document.getElementById('client-form');
const clientList = document.getElementById('client-list');

// Agregar detector de eventos al formulario
form.addEventListener('submit', (event) => {
event.preventDefault();
const nameInput = document.getElementById('name');
const annualGrossSalesInput = document.getElementById('annualGrossSales');
const deductionsInput = document.getElementById('deductions');

//Crear nuevo cliente
const client = new Client(nameInput.value, new Taxes(annualGrossSalesInput.value, deductionsInput.value));

// Mostrar el cliente en la lista
const listItem = document.createElement('li');
listItem.textContent = `${client.name} - Tax to Pay: $${client.calculateTax().toFixed(2)}`;
clientList.appendChild(listItem);

// Limpiar el formulario
form.reset();
});