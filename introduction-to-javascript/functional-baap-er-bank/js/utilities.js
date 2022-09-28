
function getInputTextValue(inputTextId) {
    const inputText = document.getElementById(inputTextId);
    const inputTextString = inputText.value;
    const inputTextConverted = parseFloat(inputTextString);
    inputText.value = '';
    return inputTextConverted;

}

function getDisplayElementValue(inputElement) {
    const displayElement = document.getElementById(inputElement);
    const displayElementString = displayElement.innerText;
    const displayElementConverted = parseFloat(displayElementString);
    return displayElementConverted;
}

function setDisplayElementValue(inputElement, valueToSet) {
    const displayElement = document.getElementById(inputElement);
    displayElement.innerText = valueToSet;

}

