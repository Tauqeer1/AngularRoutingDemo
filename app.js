/**
 * Created by Tauqeer Ahmed on 3/13/2016.
 */

angular.module('angularRouting', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'homeController'
            })
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'contactController'
            });

    }]);
