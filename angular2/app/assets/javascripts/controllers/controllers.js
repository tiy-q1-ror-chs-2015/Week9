var indexCtrl = addressBook.controller('indexCtrl', function($scope, quoteData) {
    $scope.some_text = {quote: "'eeeeeeyyyyyy!", quoteMaster: "The Fonz"};
    $scope.quotes = quoteData.data;
    $scope.formQuote = '';
    $scope.formQuoteMaster = '';
    quoteData.loadQuotes();
    $scope.changeQuote = function() {      
      $scope.some_text = _.sample($scope.quotes.quotes);
    };

    $scope.submitForm = function() {
      quoteData.addQuote(
        {
          quote: {
            quote: $scope.formQuote, quote_master: $scope.formQuoteMaster 
          }
        }
      );
      $scope.formQuote = '';
      $scope.formQuoteMaster = '';
    };

    $scope.deleteQuote = function(quoteId) {
      quoteData.deleteQuote(quoteId);
    }
});

// var indexCtrl = addressBook.controller('someOtherCtrl', function($scope) {
//     $scope.some_text = "Welcome to Earth. - Will Smith";
// });