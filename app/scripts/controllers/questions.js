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
    $('.next').click(function(){

        var inputValue = $(this).parent().children('input').val();
        var numberValue = parseInt(inputValue.replace(/,/g, ''), 10);
        var modelAttribute = ($(this).parent().children('input').attr('ng-model'));
        console.log(modelAttribute);
        $scope.modelAttribute = numberValue;
        // console.log(typeof(numberValue));

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

    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);
    };

}]);
