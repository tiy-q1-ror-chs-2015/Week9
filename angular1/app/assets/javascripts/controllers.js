var indexCtrl = addressBook.controller('indexCtrl', function($scope) {
    $scope.some_text = {quote: "'eeeeeeyyyyyy!", quoteMaster: "The Fonz"};
    $scope.quotes = [ 
      {quote: "I'll be back!", quoteMaster: "Arnold Schwarzzzz"},
      {quote: "It's time to kick ass and chew bubble gum, and I'm all outta gum", quoteMaster: 'Duke'},
      {quote: "One appletini, light on the tini", quoteMaster: "JD"},
      {quote: "Respect, Ryan", quoteMaster: "Adam"}
    ];
    $scope.formQuote = '';
    $scope.formQuoteMaster = '';

    $scope.changeQuote = function() {      
      $scope.some_text = _.sample($scope.quotes);
    };

    $scope.submitForm = function() {
      $scope.quotes.push(
        { quote: $scope.formQuote, quoteMaster: $scope.formQuoteMaster }
      );
      $scope.formQuote = '';
      $scope.formQuoteMaster = '';
    };
});

// var indexCtrl = addressBook.controller('someOtherCtrl', function($scope) {
//     $scope.some_text = "Welcome to Earth. - Will Smith";
// });