function convertTemperature() {
  const country = document.getElementById("countryInput").value;
  const temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const resultElement = document.getElementById("result");

  if (country === "United States" || country === "Liberia") {
    resultElement.textContent = "The temperature is: " + temperature + "F";
  } else {
    const celsius = ((temperature - 32) * 5) / 9;
    resultElement.textContent = "The temperature is: " + celsius + "C";
  }
}
