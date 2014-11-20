'use strict';

/**
 * @ngdoc function
 * @name angularRoiCalcApp.controller:QuestionsCtrl
 * @description
 * # QuestionsCtrl
 * Controller of the angularRoiCalcApp
 */
angular.module('angularRoiCalcApp')
  .controller('QuestionsCtrl', ['$scope', function ($scope) {
    
// Advance to the next question when the "Next" button is clicked
    $('.next').click(function(){

        // var inputValue = $(this).parent().children('input').val();
        // var numberValue = parseInt(inputValue.replace(/,/g, ''), 10);
        // var modelAttribute = ($(this).parent().children('input').attr('ng-model'));
        // console.log(typeof(inputValue));
        // console.log(numberValue);
        // modelAttribute = numberValue;

    	$(this).parent().animate({
            opacity : 0,
        }, 400 , function (){
            $(this).removeClass('visible-question visible-question-2');
            $(this).next().addClass('visible-question-2').animate({
                opacity : 1,
            }, 400
            );
        });
    });


//Go back to the previous question when the "Previous" button is clicked
    $('.previous').click(function(){
        $(this).parent().animate({
            opacity : 0,
        }, 400 , function (){
    	   $(this).removeClass('visible-question-2');
           $(this).prev().addClass('visible-question-2').animate({
                opacity : 1,
           }, 400
           );
        });
    });

//An empy JSON object to pass all of the data into when the "submit" button is hit
    $scope.master = {};

//Copy the data from the questions into the master JSON object
    $scope.update = function(user) {
        $scope.master = angular.copy(user);
    };
    

}]);
