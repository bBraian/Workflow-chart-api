google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = new google.visualization.DataTable();
data.addColumn('string', 'Name');
data.addColumn('string', 'Manager');
data.addColumn('string', 'ToolTip');


// For each orgchart box, provide the name, manager, and tooltip to show.
data.addRows([
    
    //Exemplo 1
    [{'v':'Begin', 'f':'<div class="inicio">Start</div>'}, '', ''],

    [{'v':'Pergunta 1?', 'f':'<div class="questao"><div class="texto-questao">Registered?</div></div>'}, 'Begin', ''],
    
    [{'v':'Resposta1 p1', 'f':'<div class="resposta">Yes</div>'}, 'Pergunta 1?', ''],
    [{'v':'Resposta2 p1', 'f':'<div class="resposta">No</div>'}, 'Pergunta 1?', ''],

    [{'v':'Login', 'f':'<div class="mensagem">Login</div>'}, 'Resposta1 p1', ''],
    [{'v':'Registration', 'f':'<div class="mensagem">Registration</div>'}, 'Resposta2 p1', ''],

    [{'v':'correctLogin', 'f':'<div class="questao"><div class="texto-questao">Login correct?</div></div>'}, 'Login', ''],

    [{'v':'rs1', 'f':'<div class="resposta">Yes</div>'}, 'correctLogin', ''],
    [{'v':'rn1', 'f':'<div class="resposta">No</div>'}, 'correctLogin', ''],

    [{'v':'viewAccount', 'f':'<div class="mensagem">View account</div>'}, 'rs1', ''],
    [{'v':'resetPass', 'f':'<div class="mensagem">Reset password</div>'}, 'rn1', ''],
    

]);

var numbOfRows = data.getNumberOfRows();
for(var i = 0; i < numbOfRows; i++) {
    data.setRowProperty(i, 'style', 'background: white; box-shadow: unset; border-style: none;');
}

// Create the chart.
var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
// Draw the chart, setting the allowHtml option to true for the tooltips.
chart.draw(data, {'allowHtml':true});

var bg = document.querySelector('.google-visualization-orgchart-node');
bg.style.color = "blue";
}