/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var module = angular.module('classAppServices', ['ngResource']);

module.factory('CreditCard', ['$http', function ($http) {
        var baseUrl = '/user/123/card';
        return {
            get: function (cardId) {
                return $http.get(baseUrl + '/' + cardId);
            },
            save: function (card) {
                var url = card.id ? baseUrl + '/' + card.id : baseUrl;
                return $http.post(url, card);

            },
            query: function () {
                return $http.get(baseUrl);
            },
            charge: function (card) {
                return $http.post(baseUrl + '/' + card.id, card, {params: {charge: true}});
            }
        };
    }]);
