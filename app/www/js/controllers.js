angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ItemlistsCtrl', function($scope) {
  $scope.itemlists = [{
    id: 1,
    date: '2015-03-01',
    title: 'Schrank',
    merchant: 'Ikea',
    amount: '20.23'
  }, {
    id: 2,
    date: '2015-03-02',
    title: 'Buch',
    merchant: 'Amazon',
    amount: '20.23'
  }, {
    id: 3,
    date: '2015-03-03',
    title: 'Tisch',
    merchant: 'Lidl',
    amount: '20.23'
  }, {
    id: 4,
    date: '2015-03-04',
    title: 'Lebensmittel',
    merchant: 'Aldi',
    amount: '20.23'
  }, {
    id: 5,
    date: '2015-03-05',
    title: 'Tanken',
    merchant: 'Agip',
    amount: '20.23'
  }, {
    id: 6,
    date: '2015-03-06',
    title: 'Urlaub',
    merchant: 'Lufthansa',
    amount: '20.23'
  }];
})

.controller('ItemCtrl', function($scope, $stateParams) {})

.controller('ItemCreateCtrl', function($scope, $stateParams, $cordovaSQLite) {
  // $scope.insert = function(firstname, lastname) {
  //     var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
  //     $cordovaSQLite.execute(db, query, [firstname, lastname]).then(
  //       function(res) {
  //         console.log("INSERT ID -> " + res.insertId);
  //       },
  //       function(err) {
  //         console.error(err);
  //       });
  //   }
  //
  // $scope.select = function(lastname) {
  // 	var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
  // 	$cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
  // 		if (res.rows.length > 0) {
  // 			console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows
  // 				.item(0).lastname);
  // 		} else {
  // 			console.log("No results found");
  // 		}
  // 	}, function(err) {
  // 		console.error(err);
  // 	});
  // }


});
