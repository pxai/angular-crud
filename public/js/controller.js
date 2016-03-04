/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



angular.module('classApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  }).when('/friend/list', {
    templateUrl: 'partials/friendlist.html',
    controller: 'FriendListCtrl'
  }).when('/friend/detail/:id', {
    templateUrl: 'partials/frienddetail.html',
    controller: 'FriendDetailCtrl'
  }).when('/friend/new', {
    templateUrl: 'partials/friendnew.html',
    controller: 'FriendNewCtrl'
  }).when('/friend/update/:id', {
    templateUrl: 'partials/friendupdate.html',
    controller: 'FriendUpdateCtrl'
  }).when('/friend/delete/:id', {
    templateUrl: 'partials/frienddelete.html',
    controller: 'FriendDeleteCtrl'
  }).when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}])
.controller('AboutCtrl', [function() {

}])
.controller('FriendListCtrl', [function() {

}])
.controller('FriendDetailCtrl', [function() {

}])
.controller('FriendNewCtrl', [function() {

}])
.controller('FriendUpdateCtrl', [function() {

}])
.controller('FriendDeleteCtrl', [function() {

}]);