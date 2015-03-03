addressBook.factory('quoteData', function($http) {
  quoteData = {
    data: {
      quotes: [
      ]
    }
  }

  quoteData.loadQuotes = function() {
    // $.ajax.get("/quotes.json")
    $http.get("/quotes.json").success(function(quotesFromServer) {
      // console.log(quotesFromServer);        
      _.each(quotesFromServer, function(quote){
        quoteData.pushQuote(quote)  
      })
    });
  }

  quoteData.addQuote = function(quote) {
    $http.post('/quotes.json', quote).success(function(quoteFromServer){
      quoteData.pushQuote(quoteFromServer);
    })
  }

  quoteData.pushQuote = function(quote) {
    quoteData.data.quotes.push(quote);
  }

  quoteData.deleteQuote = function(quoteId) {
    $http.delete("/quotes/" + quoteId + ".json").success(function(data) {
      console.log("SUccess");
      var deletedQuote = _.findWhere( quoteData.data.quotes, {id: parseInt(quoteId)})
      console.log(quoteData.data.quotes)
      quoteData.data.quotes = _.without(quoteData.data.quotes, deletedQuote)
      console.log(quoteData.data.quotes)
    })
  }
  // quoteData.data.quotes[0].quote
  // quoteData.data.quotes[0].quoteMaster

  return quoteData;
})