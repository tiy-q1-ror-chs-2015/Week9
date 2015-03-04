addressBook.factory('quoteData', function($http) {
  quoteData = {
    data: {
      quotes: [
      ]
    },
    isLoaded: false
  }

  quoteData.loadQuotes = function(deferred) {
    // $.ajax.get("/quotes.json")
    if(quoteData.isLoaded == false){
      $http.get("/quotes.json").success(function(quotesFromServer) {
        console.log(quotesFromServer);
        quoteData.isLoaded = true;
        _.each(quotesFromServer, function(quote){
          quoteData.pushQuote(quote)  
        })
        if(deferred) {
          deferred.resolve()
        }
      });
    }
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
      var deletedQuote = quoteData.findQuote(quoteId);
      console.log(quoteData.data.quotes)
      quoteData.data.quotes = _.without(quoteData.data.quotes, deletedQuote)
      console.log(quoteData.data.quotes)
    })
  }

  quoteData.findQuote = function(quoteId) {
    return _.findWhere( quoteData.data.quotes, {id: parseInt(quoteId)});
  }
  // quoteData.data.quotes[0].quote
  // quoteData.data.quotes[0].quoteMaster

  return quoteData;
})