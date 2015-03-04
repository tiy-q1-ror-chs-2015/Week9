addressBook.controller('newQuoteCtrl', function($location, $scope, quoteData) {
  console.log("Inside newQuoteCtrl");

  $scope.rootPage = function() {
    $location.url('/');
  }

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
    $location.url("/")
  };  
})