const request = require("request");

module.exports = {
  getStockPrice: symbol => {
    const url = "https://api.iextrading.com/1.0/stock/" + symbol + "/price";

    return new Promise((resolve, reject) => {
      request(url, function(error, response, body) {
        if (error != null) {
          return reject(error);
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject("Stock price request error");
        }
      });
    });
  },

  getCompanyLogo: symbol => {
    return symbol;
  },

  getLast5News: () => {
    const url = "https://api.iextrading.com/1.0/stock/market/news/last/5";

    return new Promise((resolve, reject) => {
      request(url, function(error, response, body) {
        if (error != null) {
          return reject(error);
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject("Last 5 news error");
        }
      });
    });
  },

  // https://api.iextrading.com/1.0/stock/aapl/quote
  getStockQuote: symbol => {
    const url = "https://api.iextrading.com/1.0/stock/" + symbol + "/quote";

    return new Promise((resolve, reject) => {
      request(url, function(error, response, body) {
        if (error != null) {
          return reject(error);
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject("Stock quote request error");
        }
      });
    });
  }

  //
};
