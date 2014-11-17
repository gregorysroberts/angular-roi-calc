'use strict';

/**
 * @ngdoc function
 * @name angularRoiCalcApp.controller:QuestionsCtrl
 * @description
 * # QuestionsCtrl
 * Controller of the angularRoiCalcApp
 */
angular.module('angularRoiCalcApp')
  .controller('QuestionsCtrl', function ($scope) {
    $('.next').click(function(){
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
    	$(this).parent().removeClass('visible-question-2');
    	$(this).parent().prev().addClass('visible-question-2');
    });

    $('.questionsForm').submit(function(){
        console.log('submitted');
    });
});