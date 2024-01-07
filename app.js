const notionalInput = document.getElementById("notional-report-input");
const mainForm = document.getElementById("main-form");
const resultIssuersList = document.getElementById("issuers-list-result");
const resultCalculationList = document.getElementById("calculation-result");


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
  let firstList = document.createElement("ol");
  let issuersItems = createStringArrayFromInput(issuersList);
  let issuersItemsResult = createFloatArrayFromInput(jtdAmount);
  for(let i = 0; i < issuersItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${issuersItems[i]} : ${issuersItemsResult[i]}`;
    firstList.append(li);
  }
  resultIssuersList.append(firstList);

  let secondList = document.createElement("ol");

  let currenciesItems = createStringArrayFromInput(currency);
  let rateItems = createFloatArrayFromInput(rate);
  let instrumentsItems = createStringArrayFromInput(instruments);
  let markToMarketItems = createFloatArrayFromInput(markToMarket);
  let notionalItems = createFloatArrayFromInput(notional);

  let corporationNameItem = companiesList(instrumentsItems);
  let currencyNameItem = currenciesList(instrumentsItems);

  let mainObject = createMainObject(corporationNameItem, instrumentsItems, markToMarketItems, notionalItems, currencyNameItem);
  for(let i = 0; i < mainObject.length; i++) {
    let li = document.createElement("li");
    let computation = corporationDataToJTD(mainObject[i]);
    li.textContent = computation;
    secondList.append(li);
  }

  resultCalculationList.append(secondList);
});
