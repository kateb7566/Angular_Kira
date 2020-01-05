(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        // set the message to "list is empty !"
        $scope.message = "Please, enter data !";

        // check if the list is empty ! the number of elements
        $scope.checkIt = function() {
            var sentence = document.getElementById('lunch-menu');

            var list = sentence.value.split(',');



            if (JSON.stringify(list) != "") {
                if (list.length <= 3) {
                    sentence.style.borderColor = "#4CAF50";
                    $scope.message = "Enjoy !";
                }
                if (list.length > 3) {
                    sentence.style.borderColor = "#F44336";
                    $scope.message = "Too much data !";
                }
            } else {

                $scope.message = "Please, enter data first !";
            }

        };
    }

})();