var myApp = angular.module('myMod', [])
myApp.controller('myCtrl', function($scope, $interval) {

   $scope.randomWords = [
     "hello ",
     "hola ",
     "sup ",
     "howdy ",
     "salutations ",
     "You win some, you lose some. ",
     "What goes around, comes around. ",
     "Curiousity killed the cat. ",
     "Top of the morning to ya. ",
     "The jig is up. "
   ];

   $scope.randomClass = [
      "red",
      "blue",
      "size",
      "newfont",
      "underline",
      "spin"
    ];

   $scope.wordsOnPage = [];
  
   $scope.talk = function(){
      var functions = [addWord];
      function rando(){
        return functions[Math.floor(Math.random() * functions.length)]();
      }

      $interval(rando, 500, 50);
   }

   function addWord(){
      var newElement = {}

      newElement.word = $scope.randomWords[Math.floor(Math.random() * $scope.randomWords.length)];
      newElement.decor = $scope.randomClass[Math.floor(Math.random() * $scope.randomClass.length)];
      $scope.wordsOnPage.push(newElement);
  };

});