'use strict'

angular.module('hello.services', []).factory('UserService',
		[ "$http", function($http) {
			var service = {};
			service.getUserById = function(Id) {
				var url = "/user/getUser/" + Id;
				return $http.get(url);
			}
			service.getAllUsers = function() {
				return $http.get("/user/getAllUsers");
			}
			service.saveUser = function(user) {
				return $http.post("/user/saveUser", user);
			}
			return service;
		} ]);