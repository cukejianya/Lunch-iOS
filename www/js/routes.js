angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/page5',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page6',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('tabsController.type', {
      url: '/page7',
      views: {
        'tab1': {
          templateUrl: 'templates/type.html',
          controller: 'typeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.friends', {
      url: '/page8',
      views: {
        'tab2': {
          templateUrl: 'templates/friends.html',
          controller: 'friendsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.notifications', {
      url: '/page9',
      views: {
        'tab3': {
          templateUrl: 'templates/notifications.html',
          controller: 'notificationsCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page5');

});