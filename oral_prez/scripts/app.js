var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/!", {
		templateUrl: "main.htm",
//		template: "<h1>There is something here</h1><p><bo dy></p><p>{{msg}}</p><p>end body</p>",
		controller: "empty"
	})
	.when("/angular", {
		//templateUrl: "framwork.htm",
		templateUrl: "main.htm",
		//template: "<h1>There is something here</h1><p><bo dy></p><p>{{msg}}</p><p>end body</p>",
		controller: "angular"
	})
	.when("/vue", {
		//templateUrl: "framework.htm"
		templateUrl: "main.htm",
		//template:"<h1>There is something here</h1><p><bo dy></p><p>{{msg}}</p><p>end body</p>",
		controller: "vue"
	})
	.otherwise("/!");
});

app.controller("empty", function($scope){
	$scope.name = "HTML";
	$scope.if = "N/A";
	$scope.list = "N/A";
});
app.controller("angular", function($scope) {
	$scope.name = "AngularJS";
	$scope.if = "ng-if";
	$scope.list = "N/A";
});
app.controller("vue", function($scope) {
	$scope.name = "vue";
	$scope.if = "v-if";
	$scope.list = "v-for";
});
