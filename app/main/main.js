'use strict';

angular.module('myApp.main', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'main/main.html',
      controller: 'MainCtrl'
    });
  }])

  .controller('MainCtrl', ['$scope', 'dataContext', function ($scope, dataContext) {
    $scope.s3Url = "https://s3.eu-central-1.amazonaws.com/";
    $scope.bucket = "channelscontent";
    $scope.channels = ["Engineering", "Fun", "Beauty"];
    $scope.types = ["All", "Video", "Gif", "Picture"];
    $scope.sources = ["All", "Reddit", "Instagram"];

    $scope.currentPage = 1;
    $scope.numPerPage = 15;
    $scope.contentTotal = 0;

    $scope.init = function () {
      $scope.initFilters();
      $scope.getContent();
    };

    $scope.initFilters = function () {
      $scope.filters = {
        channel: $scope.channels[0],
        source: $scope.sources[0],
        type: $scope.types[0],
        withCommentsOnly: false,
        withModDescOnly: false,
        starredOnly: false,
        publishedOnly: false,
        offset: 0,
        limit: $scope.numPerPage
      };
    }

    $scope.getContent = function () {
      var newOffset = (($scope.currentPage - 1) * $scope.numPerPage);
      $scope.filters.offset = newOffset;
      dataContext.getContentData($scope.filters).then(contentData => {
        $scope.content = contentData.docs;
        $scope.contentTotal = contentData.totalDocs;
      });
    };

    $scope.clearFilters = function () {
      $scope.currentPage = 1;
      $scope.initFilters();
      $scope.getContent();
    };

    $scope.download = function (url) {
      open(url);
    };

    $scope.save = function (content) {
      dataContext.updateContentData(content).then();
    };

    $scope.pageChanged = function () {
      $scope.getContent();
    };

  }]);