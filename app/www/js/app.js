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
			// window.plugins.sqlDB.copy("populated.db", function() {
			// 	db = $cordovaSQLite.openDB("populated.db");
			// 	$location.path("/categories");
			// 	$ionicLoading.hide();
			// }, function(error) {
			// 	console.error("There was an error copying the database: " + error);
			// 	db = $cordovaSQLite.openDB("populated.db");
			// 	$location.path("/categories");
			// 	$ionicLoading.hide();
			// });
		} else {
			db = openDatabase("websql.db", '1.0', "My WebSQL Database", 2 * 1024 *
				1024);
			db.transaction(function(tx) {
				tx.executeSql("DROP TABLE IF EXISTS tblCategories");
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS items (id integer primary key, title text, merchant text, amount text, date text)"
				);
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS tblTodoLists (id integer primary key, category_id integer, todo_list_name text)"
				);
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS tblTodoListItems (id integer primary key, todo_list_id integer, todo_list_item_name text)"
				);
				tx.executeSql("INSERT INTO tblCategories (category_name) VALUES (?)", [
					"Shopping"
				]);
				tx.executeSql("INSERT INTO tblCategories (category_name) VALUES (?)", [
					"Chores"
				]);
				tx.executeSql("INSERT INTO tblCategories (category_name) VALUES (?)", [
					"School"
				]);
			});
			$location.path("/categories");
			$ionicLoading.hide();
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
