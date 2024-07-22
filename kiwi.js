function convertTemperature() {
    // Get input value (temperature in Celsius)
    let celsius = parseFloat(document.getElementById('celsius').value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius temperature.");
        return;
    }

    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById('result').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}
