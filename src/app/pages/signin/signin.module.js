(function () {
    'use strict';

    angular.module('BlurAdmin.pages.signin', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('signin', {
                url: '/signin',
                templateUrl: 'app/pages/signin/signin.html',
                title: 'Sign In',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();