addressBook.controller('editQuoteCtrl', function($location, $scope, quoteData, $routeParams, $q) {
  console.log("Inside editQuoteCtrl");

  $scope.editQuote = null;
  $scope.findQuote = function() {
    console.log("hi");
    $scope.editQuote = quoteData.findQuote($routeParams.ooga_booga)
  }

  $scope.findQuote();
  this.deferred = $q.defer();
  this.deferred.promise.then($scope.findQuote);
  quoteData.loadQuotes(this.deferred);

  $scope.rootPage = function() {
    $location.url('/');
  }
})