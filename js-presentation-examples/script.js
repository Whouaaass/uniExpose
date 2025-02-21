function noFormAction(e) {
    e.preventDefault();
}
// Ejemplo de evento onfocus

function handleFocus(text) {
    console.log(text);
    document.getElementById('onfocus-label').innerHTML = text;
}

const focusOnInput = () => handleFocus('Foco en el input');

const focusOnButton = () => handleFocus('Foco en el button');

const focusOnCheckbox = () => handleFocus('Foco en el checkbox');

// Ejemplo de evento onreset
function handleReset() {
    document.getElementById('onreset-label').innerHTML = 'El formulario se ha restablecido';
}

// Ejemplo de localStorage
function handleSaveKey(e) {
    e.preventDefault();
    // get the key and value from the form through the name attribute
    const key = e.target.elements.key.value;
    const value = e.target.elements.value.value;
    // set the key and value in localStorage
    localStorage.setItem(key, value);
    // show the key and value in the label
    document.getElementById('localStorage-save-label').innerHTML = `Guardado\t${key}: ${value}`; 
}

function handleReadKey(e) {
    e.preventDefault();
    // get the key from the form through the name attribute
    const key = e.target.elements.key.value;
    // get the value from localStorage
    const value = localStorage.getItem(key);
    // show the key and value in the label
    document.getElementById('localStorage-read-label').innerHTML = `Leído\r${key}: ${value}`;
}

// Ejemplo de getElementByTagName
let lastElements = null;
const selectElement = (e) => {
    e.preventDefault();
    if (lastElements) {
        for (const element of lastElements) {
            element.classList.remove('selected');
        }
    }
    const element = e.target.elements.element.value;
    const elementsToSelect = document.getElementsByTagName(element);
    if (elementsToSelect) {
        for (const element of elementsToSelect) {
            element.classList.add('selected');
        }
        lastElements = elementsToSelect;
    }
}
