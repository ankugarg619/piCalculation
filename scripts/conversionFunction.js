function getFormatted(target){
    return (new Intl.NumberFormat('en-IN',{style:"currency",currency:'INR'}).format(target));
 }
 
 function monthlyRate(target) {
     return (target/1200)
 }
 
 function powmonthlyRate(target,n){
     return (
         (1+target)**n
     )
 }
 
 function termMonths(target){
     return target*12
 }
 
 function getMonthlyPayment(princiPal,monthRate,poweRate){
     return (
         (princiPal*monthRate*poweRate)/(poweRate-1)
     )
 }
 
 function getMonthlyInterest(rate,principal){
     return rate*principal
 }