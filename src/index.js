import './styles/style.css'



const menu = document.querySelector('.menuBtn')
const ul = document.querySelector('ul')


menu.addEventListener('click', (element) =>{
    ul.classList.toggle('show-menu');
})


// code the the calculator 

// creating the compound calculator

// getting values from input
const principal = document.querySelector("#principal")
const monthly = document.querySelector("#monthly")
const months = document.querySelector("#months")
const rate = document.querySelector("#rate")

// setting variables for formula for better understanding 
/*
// P(1 + r/n)**nt + PMT * ((1+r/n)**nt -1)/ r/n
where: 
P = Principal
r = rate
n = 12 times a years
t = time invested (in months) 
PMT = addition monthly 
*/

function calculate(){
    // create numbers:
const P = parseInt(principal.value);
const r = parseFloat(rate.value);
const n = 12;
const t = parseInt(months.value);
const PMT = parseInt(monthly.value);
const CI = P * (1 + (r / n)) ** (n * t/12) + (PMT * ((Math.pow(1 + (r / n), n * t/12) - 1)) / (r / n));
const formattedCI = CI.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

const result = document.querySelector(".result")
result.innerText  = formattedCI;
 
// how much were invested 
const investedAmount = P + t * PMT
const formattedCIInvestedAmount = investedAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
const invested = document.querySelector(".invested")
invested.innerText = formattedCIInvestedAmount;
// how much was the interest
const interestAmount = CI - investedAmount
const formattedCIinterestAmount = interestAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
const interest = document.querySelector('.interest')
interest.innerText = formattedCIinterestAmount;

}

const button = document.querySelector('.btn')

  
  button.addEventListener('click', ()=>{
    calculate()    
})
