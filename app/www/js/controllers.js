var mockResults = [{
  'objectId': 1,
  'createdAt': '2015-03-01T11:37:29.178Z',
  'updatedAt': '2015-03-01T11:37:29.178Z',
  'date': '2015-03-01T11:37:29.178Z',
  'content': 'Schrank',
  'merchant': 'Ikea',
  'categories': 'Wohnung',
  'amount': '20.23'
}, {
  'objectId': 2,
  'createdAt': '2015-03-02T11:37:29.178Z',
  'updatedAt': '2015-03-02T11:37:29.178Z',
  'date': '2015-03-02T11:37:29.178Z',
  'content': 'Buch',
  'merchant': 'Amazon',
  'categories': 'Freizeit',
  'amount': '20.23'
}, {
  'objectId': 3,
  'createdAt': '2015-03-03T11:37:29.178Z',
  'updatedAt': '2015-03-03T11:37:29.178Z',
  'date': '2015-03-03T11:37:29.178Z',
  'content': 'Tisch',
  'merchant': 'Lidl',
  'categories': 'Wohnung',
  'amount': '20.23'
}, {
  'objectId': 4,
  'createdAt': '2015-03-04T11:37:29.178Z',
  'updatedAt': '2015-03-04T11:37:29.178Z',
  'date': '2015-03-04T11:37:29.178Z',
  'content': 'Einkaufen',
  'merchant': 'Aldi',
  'categories': 'Lebensmittel',
  'amount': '20.23'
}, {
  'objectId': 5,
  'createdAt': '2015-03-05T11:37:29.178Z',
  'updatedAt': '2015-03-05T11:37:29.178Z',
  'date': '2015-03-05T11:37:29.178Z',
  'content': 'Tanken',
  'merchant': 'Agip',
  'categories': 'Auto',
  'amount': '20.23'
}, {
  'objectId': 6,
  'createdAt': '2015-03-06T11:37:29.178Z',
  'updatedAt': '2015-03-06T11:37:29.178Z',
  'date': '2015-03-06T11:37:29.178Z',
  'content': 'Urlaub',
  'merchant': 'Lufthansa',
  'categories': 'Freizeit',
  'amount': '20.23'
}];
var singleResult = {
  'objectId': 1,
  'createdAt': '2015-03-01T11:37:29.178Z',
  'updatedAt': '2015-03-01T11:37:29.178Z',
  'date': '2015-03-01T11:37:29.178Z',
  'content': 'Schrank',
  'merchant': 'Ikea',
  'categories': 'Wohnung',
  'amount': '20.23'
};

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

.controller('ExpensesListController', ['$scope', 'Expense', function($scope,
  Expense) {

  // FIXME: Livebetrieb
  // Expense.getAll().success(function(data) {
  // $scope.items = data.results;
  // });

  $scope.items = mockResults;

  $scope.onItemDelete = function(item) {
    Expense.delete(item.objectId);
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

}])

.controller('ExpenseCreationController', ['$scope', '$state', 'Expense',
  function($scope, $state, Expense) {
    $scope.expense = {};

    // TODO
    // $scope.create = function() {
    //   Expense.create({
    //     content: $scope.expense.content,
    //     date: '2015-03-06',
    //     merchant: 'Lufthansa',
    //     categories: 'Freizeit',
    //     amount: '20.23'
    //   }).success(function(data) {
    //     $state.go('expenses');
    //   });
    // }
    $scope.create = function(singleResult) {
      $state.go('app.expenses');
    }
  }
])

.controller('ExpenseEditController', ['$scope', 'Expense', '$state',
  '$stateParams',
  function($scope, Expense, $state, $stateParams) {

    /*$scope.expense = {
        id: $stateParams.id,
        content: $stateParams.content
      };*/
    $scope.expense = singleResult;
    $scope.expense.id = $stateParams.id;
    $scope.expense.content = $stateParams.content;

    // TODO
    /*
		$scope.edit = function() {
      Expense.edit($scope.expense.id, {
        content: $scope.expense.content
      }).success(function(data) {
        $state.go('app.expenses');
      });
    }
		*/

    $scope.edit = function(singleResult) {
      $state.go('app.expenses');
    }

  }
])

.controller('ConfigCtrl', function($scope) {

})

.controller('CategoriesCtrl', function($scope) {

});
