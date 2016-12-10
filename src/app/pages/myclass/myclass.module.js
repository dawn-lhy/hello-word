(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myclass', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myclass', {
                url: '/myclass',
                templateUrl: 'app/pages/myclass/myclass.html',
                title: 'My Class',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();
