angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.findACleanup', {
    url: '/find',
    views: {
      'tab1': {
        templateUrl: 'templates/findACleanup.html',
        controller: 'findACleanupCtrl'
      }
    }
  })

  .state('tabsController.createACleanup', {
    url: '/create',
    views: {
      'tab2': {
        templateUrl: 'templates/createACleanup.html',
        controller: 'createACleanupCtrl'
      }
    }
  })

  .state('tabsController.aboutRYM', {
    url: '/about',
    views: {
      'tab3': {
        templateUrl: 'templates/aboutRYM.html',
        controller: 'aboutRYMCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page5', {
    url: '/welcome',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('tabsController.confirmation', {
    url: '/confirmation',
    views: {
      'tab2': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/welcome')

  

});