function clearTable(){
    paymentTableData.innerHTML = `<table id="tableToExport">
    <tr class="headerRow">
      <th>Payment #</th>
      <th>Monthly Payment</th>
      <th>Interest paid</th>
      <th>Principal paid</th>
      <th>Total Payment</th>
      <th>Balance</th>
    </tr>
  </table>`;

  exportButtons.innerHTML = `
  `;

  paymentSummary.innerHTML = "";

  rateInpt.setAttribute('value',0);
  amountInpt.setAttribute('value',0);
  termInpt.setAttribute('value',0);
}