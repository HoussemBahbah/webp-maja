'use strict'

var module = angular.module('hello.controllers', []);
module.controller("UserController", [ "$scope", "UserService",
		function($scope, UserService) {

			
			
			UserService.getUserById(1).then(function(value) {
				console.log(value.data);
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});

			$scope.saveUser = function() {
				
				UserService.saveUser($scope.user).then(function() {
					console.log("works");
					UserService.getAllUsers().then(function(allUsers) {
						$scope.allUsers= allUsers.data;
					}, function(reason) {
						console.log("error occured");
					}, function(value) {
						console.log("no callback");
					});

					
				}, function(reason) {
					console.log("error occured");
				}, function(value) {
					console.log("no callback");
				});
			}
		} ]);