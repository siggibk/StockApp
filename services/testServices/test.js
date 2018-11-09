const service = require("../IEXservice");

// get
async function getStockPrice(symbol) {
  const price = await service.getStockPrice(symbol);
  console.log(price);
}

async function getStockQuote(symbol) {
  const quote = await service.getStockQuote(symbol);
  console.log(quote);
}
// get last 5 news
//console.log("Last 5 news: " + service.getLast5News());

/*
// get todays change for aapl fx
service.getTodayChange("aapl").then(
  body => {
    console.log("Todays change: " + body);
  },
  error => {
    console.log(error);
  }
);

*/

getStockPrice("aapl");
getStockQuote("aapl");
