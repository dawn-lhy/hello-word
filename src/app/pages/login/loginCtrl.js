(function () {
    'use strict';

    angular.module('BlurAdmin.pages.login')
        .controller('loginCtrl', loginCtrl);

    /** @ngInject */
    function loginCtrl() {
        var vm = this;


        vm.login = function () {
            console.log(vm);
        };
    }
})();