/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var module = angular.module('classAppServices', ['ngResource']);

module.factory('Friends', ['$http', function ($http) {
        var baseUrl = '/user/123/card';
        var friends = [ {id:1, name: "Juan" , number: 666} , {id: 2, name: "Merlin" , number: 777} ];

        return {
            getAll: function () {
                //return $http.get(baseUrl + '/' + cardId);
                return friends;
            },
            get: function (friend) {
                //return $http.get(baseUrl + '/' + cardId);
                console.log('Received id:');
                console.log(friend.id);
                for (var i=0;i<friends.length;i++) {
                    if (friends[i].id == friend.id) {
                        return friends[i];
                    }
                }
                return -1;
            },
            delete: function (friend) {
                //return $http.get(baseUrl + '/' + cardId);
                console.log('Received id:');
                console.log(friend.id);
                for (var i=0;i<friends.length;i++) {
                    if (friends[i].id == friend.id) {
                        friends.splice(i, 1);
                        return;
                    }
                }
                return {};
            },
            save: function (user) {
                user.id = friends.length + 1;
                friends.push(user);
                return friends;
                //var url = card.id ? baseUrl + '/' + card.id : baseUrl;
                //return $http.post(url, card);

            },
            update: function (friend) {
                //return $http.get(baseUrl + '/' + cardId);
                console.log('updating id:');
                console.log(friend.id);
                for (var i=0;i<friends.length;i++) {
                    if (friends[i].id == friend.id) {
                        friends[i] = friend;
                        return;
                    }
                }
                return {};
            },
            query: function () {
                return $http.get(baseUrl);
            },
            charge: function (card) {
                return $http.post(baseUrl + '/' + card.id, card, {params: {charge: true}});
            }
        };
    }]);
