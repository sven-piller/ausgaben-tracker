angular.module('starter.services', [])

.factory('Expense', ['$http',
	'PARSE_CREDENTIALS',
	function($http, PARSE_CREDENTIALS) {
		return {
			getAll: function() {
				return $http.get('http://localhost:7777/api/v1/classes/Expenses', {
					headers: {
						'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
						'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
					}
				});
			},
			get: function(id) {
				return $http.get('http://localhost:7777/api/v1/classes/Expenses/' +
					id, {
						headers: {
							'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
							'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
						}
					});
			},
			create: function(data) {
				return $http.post('http://localhost:7777/api/v1/classes/Expenses',
					data, {
						headers: {
							'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
							'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
							'Content-Type': 'application/json'
						}
					});
			},
			edit: function(id, data) {
				return $http.put('http://localhost:7777/api/v1/classes/Expenses/' +
					id,
					data, {
						headers: {
							'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
							'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
							'Content-Type': 'application/json'
						}
					});
			},
			delete: function(id) {
				return $http.delete(
					'http://localhost:7777/api/v1/classes/Expenses/' + id, {
						headers: {
							'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
							'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
							'Content-Type': 'application/json'
						}
					});
			}
		}
	}
])

.value('PARSE_CREDENTIALS', {
	APP_ID: '123456',
	REST_API_KEY: '987654321'
});;
