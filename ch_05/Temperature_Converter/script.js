function convertTemperature() {
  const country = document.getElementById("countryInput").value;
  const temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );

  if (country === "United States" || country === "Liberia") {
    temperature = temperature + "F";
  } else {
    temperature = ((temperature - 32) * 5) / 9 + "C";
  }

  document.getElementById("result").textContent =
    "The temperature is: " + temperature;
}
