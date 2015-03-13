// Ionic Starter App
var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
		if (window.cordova) {
			db = $cordovaSQLite.openDB({
				name: "my.db"
			});
			$cordovaSQLite.execute(db,
				"CREATE TABLE IF NOT EXISTS items (id integer primary key, title text, merchant text, amount text, date text)"
			);
		} else {
			db = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 100); // browser
			db.transaction(function(tx) {
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS items (id integer primary key, title text, merchant text, amount text, date text)"
				);
			});
		}

	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})

	.state('app.search', {
		url: "/search",
		views: {
			'menuContent': {
				templateUrl: "templates/search.html"
			}
		}
	})

	.state('app.browse', {
		url: "/browse",
		views: {
			'menuContent': {
				templateUrl: "templates/browse.html"
			}
		}
	})

	.state('app.itemlists', {
		url: "/itemlists",
		views: {
			'menuContent': {
				templateUrl: "templates/itemlists.html",
				controller: 'ItemlistsCtrl'
			}
		}
	})

	.state('app.create', {
		url: "/itemlists/create",
		views: {
			'menuContent': {
				templateUrl: "templates/create.html",
				controller: 'ItemCreateCtrl'
			}
		}
	})

	.state('app.single', {
		url: "/itemlists/:itemId",
		views: {
			'menuContent': {
				templateUrl: "templates/item.html",
				controller: 'ItemCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/itemlists');
});
