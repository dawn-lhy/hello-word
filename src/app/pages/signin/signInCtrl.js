(function () {
    'use strict';

    angular.module('BlurAdmin.pages.signin')
        .controller('signInCtrl', signInCtrl);

    /** @ngInject */
    function signInCtrl() {
        var vm = this;


        vm.signIn = function () {
            console.log(vm);
        };
    }
})();