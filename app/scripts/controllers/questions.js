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
    $('button').click(function(){
    	$(this).parent().removeClass('visible-question');
    	$(this).parent().next().addClass('visible-question');
    });
  });
