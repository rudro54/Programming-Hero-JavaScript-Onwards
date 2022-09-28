
function getInputTextValue(inputText) {
    const inputText = document.getElementById('inputText');
    const inputTextString = inputText.value;
    const inputTextConverted = parseFloat(inputTextString);
    return inputTextConverted;
}

function getDisplayTextValue(inputText) {
    const displayText = document.getElementById('inputText');
    const displayTextString = displayText.innerText;
    const displayTextConverted = parseFloat(displayTextString);
    return displayTextConverted;
}

