const display = document.getElementById('display'); //Access the display box

// Function to append a value to the display
function appendToDisplay(value) {
    // Concatenate the provided value to the current value in the display
    display.value += value;
}
// Function to clear the display
function clearDisplay() {
    display.value = ''; // Set the value of the display to an empty string
}
//Function to delete last string
function deleteLeft(){
    display.value = display.value.slice(0, -1); //slice value
}
// Function to evaluate and calculate the expression in the display
function calculate() {
    try {
        const result = eval(display.value); // Evaluate the expression in the display using eval()
        document.getElementById('display').value = result; // Update the display with the result
    } catch (error) {        
        display.value = 'Error'; // If an error occurs during evaluation, display 'Error' in the display
    }
}
