angular.module('app.routes', ['ionicUIRouter'])

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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.confirmation'
      2) Using $state.go programatically:
        $state.go('tabsController.confirmation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/confirmation
      /page1/tab2/confirmation
  */
  .state('tabsController.confirmation', {
    url: '/confirmation',
    views: {
      'tab1': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/welcome')

  

});