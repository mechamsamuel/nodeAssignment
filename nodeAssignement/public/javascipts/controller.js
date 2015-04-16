/**
 * Created by samuelmecham on 4/16/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('CommitCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('/commitData').success(function(data){
        $scope.commits = JSON.parse(data.text)
        console.log($scope.commits);
    })
}]);
