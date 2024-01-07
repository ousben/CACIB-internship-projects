const notionalInput = document.getElementById("notional-report-input");
const mainForm = document.getElementById("main-form");
const resultIssuersList = document.getElementById("issuers-list-result");


const issuersList = document.getElementById("issuers-list");
const jtdAmount = document.getElementById("jtd-amount");

const instruments = document.getElementById("instruments");
const markToMarket = document.getElementById("mark-to-market");
const notional = document.getElementById("notional");

const currency = document.getElementById("currency");
const rate = document.getElementById("rate");



function createStringArrayFromInput(input) {
  return createStringArrayFromExcel(input.value);
}

function createFloatArrayFromInput(input) {
  return createFloatArrayFromExcel(input.value);
}



mainForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let firstList = document.createElement("ul");
  let issuersListLi = createStringArrayFromInput(issuersList).map(item => {
    let li = document.createElement("li");
    li.textContent = item;
    return li;
  })
  let issuersListNumLi = createFloatArrayFromInput(jtdAmount).map(item => {
    let li = document.createElement("li");
    li.textContent = item;
    return li;
  })
  for(let i = 0; i < issuersListLi.length; i++) {
    firstList.append(issuersListLi[i], issuersListNumLi[i]);
  }
  resultIssuersList.append(firstList);
});