google.charts.load("current", {packages:["corechart"]});
function drawChart(interestPaidTarget,principalPaidTarget) {
var data = google.visualization.arrayToDataTable([
    ['Task', 'Amount'],
    ['Interest Paid',interestPaidTarget],
    ['Principal Paid',principalPaidTarget]
]);

var options = {
    pieHole: 0.4,
    backgroundColor: { fill: "#FFE3E1" },
    legend: { position: 'top', alignment: 'center',textStyle: {fontSize: 20}},
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
chart.draw(data, options);
}
