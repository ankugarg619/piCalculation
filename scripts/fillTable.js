function fillTable(){
    let formatMonthPayment = "";

    let rate = rateInpt.value;
    let loanAmount = amountInpt.value;
    let term = termInpt.value;

    let outStandingBalance = loanAmount;
    let paymentData = [];
    let totalAmountPaid = 0.00;

    let normalisedRate = monthlyRate(rate);
    let normalisedTerm = termMonths(term);
    let indexCal = powmonthlyRate(normalisedRate,normalisedTerm);
    let monthlyPayment = getMonthlyPayment(outStandingBalance,normalisedRate,indexCal);

    let totalInterestPaid = 0.00;
    let totalPrincipalPaid =0.00;

    for (i=1;i<=normalisedTerm;i++){
        
        let interestPaid = normalisedRate*outStandingBalance;
        let principalPaid = monthlyPayment - interestPaid;
        totalAmountPaid += monthlyPayment;
        outStandingBalance -= principalPaid;

        totalInterestPaid += interestPaid;
        totalPrincipalPaid += principalPaid;

        formatMonthPayment = getFormatted(monthlyPayment);
        let formatPrincipalPaid = getFormatted(principalPaid);
        let formatInterestPaid = getFormatted(interestPaid);
        let formatTotalAmountPaid = getFormatted(totalAmountPaid);
        let formatOutstandingBalance = getFormatted(outStandingBalance);

        let monthData = [i,formatMonthPayment,formatInterestPaid,formatPrincipalPaid,formatTotalAmountPaid,formatOutstandingBalance];
        paymentData.push(monthData);
    }

    let htmlTableOut = '';

    for (j=0;j<normalisedTerm;j++){
        let row = paymentData[j];
        let rowString = '';
        for(k=0;k<row.length;k++){
            if(k===0){
                rowString += `
                <td>${row[k]}</td>
                `;
            }
            else{
                rowString += `<td>${row[k]}</td>`;
            }
        }

        htmlTableOut += `<tr>${rowString}</tr>`;
    }

    paymentTableData.innerHTML = `<table id="tableToExport">
    <tr class="headerRow">
      <th>Payment #</th>
      <th>Monthly Payment</th>
      <th>Interest paid</th>
      <th>Principal paid</th>
      <th>Total Payment</th>
      <th>Balance</th>
    </tr>
    ${htmlTableOut}
  </table>
  
  `;

  exportButtons.innerHTML = `
    <button onclick="generatePDF()">Export PDF</button>
    <button onclick="exportToCsv()">Export csv</button>
  `;

  paymentSummary.innerHTML = `
    <div>
        <h3>Monthly Payment</h3>
        <h3>${formatMonthPayment}</h3>
    </div>
    <div id="donutchart" style="width: 100%; height: 400px;"></div>
  `;
  drawChart(totalInterestPaid,totalPrincipalPaid);
}