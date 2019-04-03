var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/!", {
		template:"<h1>Welcome to the AngularJS Route Template!</h1><h1>I am the ng-view that changes</h1><h1>This template is not a separate .htm. It's just hardcoded into app.js</h1>"
	})
	.when("/template",{
		templateUrl: "https://brantran.github.io/oral_prez/main.htm",
//		controller: "empty"
	})
	.when("/angular", {
		templateUrl: "https://brantran.github.io/oral_prez/framework.htm",
		controller: "angular"
	})
	.when("/vue", {
		templateUrl: "https://brantran.github.io/oral_prez/framework.htm",
		controller: "vue"
	})
	.otherwise("/!");
});
app.controller("angular", function($scope) {
	$scope.name = "AngularJS";
	$scope.if = "N/A";
	$scope.list = "ng-repeat";
	$scope.things = ["https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js",
	"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js",
	"javascript.js"]
});
app.controller("vue", function($scope) {
	$scope.name = "vue";
	$scope.if = "v-if";
	$scope.list = "v-for";
	$scope.things = ["https://cdn.jsdelivr.net/npm/vue","script.js"];
});
