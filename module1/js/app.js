(function() {
    "use strict";

    angular
        .module("LunchCheck", [])
        .controller("LunchController", LunchController);

    LunchController.$inject = ["$scope"];

    function LunchController($scope) {
        // set the message to "list is empty !"
        $scope.message = "Please, enter data !";

        // check if the list is empty ! the number of elements
        $scope.checkIt = function() {
            var sentence = document.getElementById("lunch-menu");
            if (sentence.value === "" || typeof sentence.value === "undefined") {
                $scope.message = "Please, enter data first !";
                sentence.style.borderColor = "#F44336";
            } else {
                var list = sentence.value.split(",");
                if (list.length <= 3) {
                    sentence.style.borderColor = "#4CAF50";
                    $scope.message = "Enjoy !";
                } else {
                    sentence.style.borderColor = "#F44336";
                    $scope.message = "Too much data !";
                }
            }
        };
    }
})();