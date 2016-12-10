
// create our angular app and inject ui-router 
// =============================================================================
angular.module('insuranceApp', ['ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our home page(/home)
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        
        // claims page
        .state('claimsHome', {
            url: '/claims-home',
            templateUrl: 'claimsHome.html'
        })
        
        // insurance page
        .state('insuranceHome', {
            url: '/insurance-home',
            templateUrl: 'insuranceHome.html'
        })
        
        // claims page
        .state('claims', {
            url: '/claims',
            templateUrl: 'claims.html'
        })
        
        // insurance page
        .state('insurance', {
            url: '/insurance',
            templateUrl: 'insurance.html'
        })
        
        // events page
        .state('events', {
            url: '/events',
            templateUrl: 'events.html'
        })
        
        // profile page
        .state('profile', {
            url: '/profile',
            templateUrl: 'profile.html'
        })
        
        // chapters page
        .state('chapters', {
            url: '/chapters',
            templateUrl: 'chapters.html'
        })
        
        // agent dashboard page
        .state('agentDashboard', {
            url: '/agent-dashboard',
            templateUrl: 'agentDashboard.html'
        })
        
        // adming dashboard page
        .state('adminDashboard', {
            url: '/admin-dashboard',
            templateUrl: 'adminDashboard.html'
        })
        
        // events page
        .state('memberDashboard', {
            url: '/member-dashboard',
            templateUrl: 'memberDashboard.html'
        })
        
        // policy page
        .state('policy', {
            url: '/policy',
            templateUrl: 'policy.html'
        })
        
        // contact page
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html'
        })

        //community engagement
        .state('communityEngagement',{
             url: '/communityEngagement',
            templateUrl: 'communityEngagement.html'
        });
       
    // catch all route
    // send users to the home page 
    $urlRouterProvider.otherwise('/home');
})

// controller for home page
// =============================================================================
.controller('homeController', function($scope, $location, $state) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.loginUser= function(userEmail) {
        userEmail = userEmail.toLowerCase();
        if(userEmail == 'member@sn.com') {
            $state.go('memberDashboard');
        }
        else if(userEmail == 'agent@sn.com') {
            $state.go('agentDashboard');
        }
        else if(userEmail == 'admin@sn.com') {
            $state.go('adminDashboard');
        }
    };
    
});

