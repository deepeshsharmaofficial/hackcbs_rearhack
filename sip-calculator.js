function maturity(){
  var invested_amount = document.getElementById('principal').value; // Principal Amount
  var annualRate = document.getElementById('rate').value; 
  var monthlyRate = annualRate / 1200;  // Rate of interest
  var years = document.getElementById('period').value; 
  var months = years * 12;  
  var totalinvest = invested_amount * months // Time period 
//  var futureValue = 0; // Final Value
 
  var finalvalue = (invested_amount * (Math.pow(1 + monthlyRate, months) - 1)*(1 + monthlyRate) / 
monthlyRate).toFixed(0);
  
  document.getElementById('mv').innerHTML = finalvalue
  document.getElementById('amntinvst').innerHTML = totalinvest;
 
 var gain = finalvalue - totalinvest;
  document.getElementById('gain').innerHTML = gain;
  
document.getElementById("result").style.display="block";

}
// SIP is nothing but just Compound interest amount on Principal amount.

// { FV= P X [(1+i)^nt - 1] / i } (1+i)
// i= rate/1200
