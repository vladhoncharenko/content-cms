'use strict';

(function (angular) {
    angular.module('myApp').factory('dataContext', ['$http', function ($http) {

        let factory = {};

        factory.getContentData = function (requestData) {
            return $http({
                method: 'POST',
                url: '/getContentData',
                data: requestData
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while getting all content data! Please, reload the page.')
            });
        };

        factory.updateContentData = function (requestData) {
            return $http({
                method: 'POST',
                url: '/updateContentData',
                data: requestData
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while getting all content data! Please, reload the page.')
            });
        };

        return factory;
    }]);
}(angular));