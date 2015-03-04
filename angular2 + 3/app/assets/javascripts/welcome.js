var addressBook = angular
  .module('addressBook', ['ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
  })
  .config(function($routeProvider) {
    // Otherwise may be good for a 404 page.
    $routeProvider
      .when('/quotes/new', {
        templateUrl: 'assets/templates/newQuote.html',
        controller: 'newQuoteCtrl'
      })
      .when('/quotes/:ooga_booga/edit', {
        controller: 'editQuoteCtrl',
        templateUrl: 'assets/templates/editQuote.html'
      })
      .otherwise({
        templateUrl: 'assets/templates/index.html',
        controller: 'indexCtrl'
      })
  })
;




