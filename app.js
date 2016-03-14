/**
 * Created by Tauqeer Ahmed on 3/13/2016.
 */

angular.module('angularRouting', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'contactController'
            });

    }])
    .controller('mainController', [function () {
        var _self = this;

        _self.message = "Everyone come and see how good I look";
    }])
    .controller('aboutController',[function(){
        var _self = this;

        _self.message = 'Look I am an about page';
    }])
    .controller('contactController',[function(){
        var _self = this;
        _self.message = 'Contact us';
    }]);
