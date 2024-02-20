document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("button");
    button.addEventListener("click", function() {
        fetchTemperatureData();
    });
});

function fetchTemperatureData() {
    const stationId = document.getElementById('stationInput').value;
    fetch("http://127.0.0.1:5000/api/last?stationId="+stationId)
        .then((res) => res.json())
        .then((data) => renderTemperatureData(data))
        .catch(failureCallbackTemperatureData)
}

function renderTemperatureData(data) {
    var tableBody = document.getElementById('current-temperature-data');
    tableBody.innerHTML = data;
}

function failureCallbackTemperatureData() {
    var tableBody = document.getElementById('current-temperature-data');
    tableBody.innerHTML = 'Failed to find temperature. Try another station.';
}
