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
        console.log('yeah babe');
}])
.controller('AboutCtrl', [function() {

}])
.controller('FriendListCtrl', ['$scope','Friends',function($scope,Friends) {
       $scope.friends = Friends.getAll();
}])
.controller('FriendDetailCtrl', ['$scope','$routeParams','Friends',function($scope,$routeParams,Friends) {
        $scope.friend = Friends.get({id:$routeParams.id});
}])
.controller('FriendNewCtrl', ['$scope','$location', 'Friends' ,function($scope, $location, Friends) {
        $scope.save = function () {
          console.log('Saving friend');
          console.log($scope.friend);  
          Friends.save($scope.friend);
          $location.path('/friend/list');
        };
}])
.controller('FriendUpdateCtrl', ['$scope', '$location', '$routeParams','Friends', function($scope,$location,$routeParams,Friends) {
        $scope.friend = Friends.get({id:$routeParams.id});

        $scope.update = function () {
          console.log('Updating friend');
          console.log($scope.friend);  
          Friends.update($scope.friend);
          $location.path('/friend/list');
        };
}])
.controller('FriendDeleteCtrl', ['$scope', '$location', '$routeParams','Friends', function($scope,$location,$routeParams,Friends) {
        $scope.friend = Friends.delete({id:$routeParams.id});
        $location.path('/friend/list');
}]);