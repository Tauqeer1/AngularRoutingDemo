/**
 * Created by Tauqeer Ahmed on 3/17/2016.
 */
angular.module('angularRouting')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController'
            });

    }]);