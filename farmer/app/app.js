app = angular.module("myapp", []);
app.controller("MainController", function($scope, $http) {
  $scope.menus = [
  {
    title: "Menu1", 
    action: "#", 
    menus: [
      {
        title: "Submenu 1a",
        action: "stuff"
      },
      {
        title: "Submenu 1b",
        action: "moreStuff",
        menus: [
          {
            title: "Submenu 1b 1",
            action: "stuff"
          },
          {
            title: "Submenu 1b 2",
            action: "moreStuff"
          }
        ]
      }
    ]
  },
  {
    title: "Menu2", 
    action: "#", 
    menus: [
      {
        title: "Submenu 2a",
        action: "awesomeStuff"
      },
      {
        title: "Submenu 2b",
        action: "moreAwesomeStuff"
      }
    ]
  }
]
});