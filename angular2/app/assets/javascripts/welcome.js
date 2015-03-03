var addressBook = angular
  .module('addressBook', [])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
  })
;




