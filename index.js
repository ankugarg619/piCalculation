const paymentTableClass = document.getElementsByClassName('paymentTable');
const payTableData = document.getElementsByClassName('payTableData');
const Calcbuttons = document.getElementById("calcButtons");
const exportButtons = document.getElementById("exports");
const paymentTableData = document.getElementById("tableToExport");
const paymentSummary = document.getElementById("paymentSummary");

let rateInpt = document.getElementById('interestRate');
let amountInpt = document.getElementById('loanAmount');
let termInpt = document.getElementById('loanTerm');

function exportToCsv(){
    var table2excel = new Table2Excel();
    table2excel.export(paymentTableData);
}


paymentTableClass[0].addEventListener('click',function(){
    paymentTableClass[0].classList.toggle('active');
    payTableData[0].classList.toggle('active');
});

class TableCSVExporter {
    constructor(table, includeHeader=true) {
      this.table = table;
      this.rows = Array.from(table.querySelectorAll("tr"));

      if (!includeHeader && this.rows[0].querySelectorAll("th").length){
        this.rows.shift();
      }

    }



    static parseCell(tableCell){
        let parsedValue = tableCell.textContent;
        
        // Replace all double quotes with two double quotes
        parsedValue = parsedValue.replace(/"/g,`""`);

        // If value contains comma, new line or double quote, enclose between quote
        parsedValue = /[",\n"]/.test(parsedValue) ? `"${parsedValue}"` : parsedValue;

        return parsedValue;
    }
  }

