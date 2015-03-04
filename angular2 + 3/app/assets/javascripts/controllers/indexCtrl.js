var indexCtrl = addressBook.controller('indexCtrl', function($scope, quoteData, $location) {
    console.log("Inside indexCtrl");
    $scope.some_text = {quote: "'eeeeeeyyyyyy!", quote_master: "The Fonz"};
    $scope.quotes = quoteData.data;
    $scope.formQuote = '';
    $scope.formQuoteMaster = '';
    quoteData.loadQuotes();

    $scope.gotoNewForm = function() {
      $location.url('/quotes/new')
    }

    $scope.changeQuote = function() {      
      $scope.some_text = _.sample($scope.quotes.quotes);
    };

    $scope.deleteQuote = function(quoteId) {
      quoteData.deleteQuote(quoteId);
    }

    $scope.editQuote = function(quoteId) {
      $location.url("/quotes/" + quoteId + "/edit")
    }
});

// var indexCtrl = addressBook.controller('someOtherCtrl', function($scope) {
//     $scope.some_text = "Welcome to Earth. - Will Smith";
// });