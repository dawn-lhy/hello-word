(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newclass')
        .controller('newclassCtrl', newclassCtrl);

    /** @ngInject */
    function newclassCtrl($scope) {
        var vm = this;


        vm.submitNewClass = function () {
            console.log($scope);
            console.log(vm);
        };





    }
})();