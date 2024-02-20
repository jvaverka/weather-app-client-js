document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("button");
    button.addEventListener("click", function() {
        fetchTableData();
    });
});

function fetchTableData() {
    const stationId = document.getElementById('stationInput').value;
    fetch("http://127.0.0.1:5000/api/week?stationId="+stationId)
        .then((res) => res.json())
        .then((data) => renderTableData(data))
        .catch(failureCallbackTableData)
}

function renderTableData(data) {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear existing table rows
    
    data.forEach(item => {
        var row = document.createElement('tr');
        var timeCell = document.createElement('td');
        timeCell.textContent = item.timestamp;
        var tempHighCell = document.createElement('td');
        tempHighCell.textContent = item.temperature.high;
        var tempLowCell = document.createElement('td');
        tempLowCell.textContent = item.temperature.low;

        row.appendChild(timeCell);
        row.appendChild(tempHighCell);
        row.appendChild(tempLowCell);

        tableBody.appendChild(row);
    });
}

function failureCallbackTableData() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear existing table rows
}
