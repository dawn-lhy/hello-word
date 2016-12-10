(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newclass', ['ui.bootstrap.datetimepicker',"ngMaterial",
            "ngAnimate",
            "ngAria",
            "ngMessages",
            "mdPickers"])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('newclass', {
                url: '/newclass',
                templateUrl: 'app/pages/newclass/newclass.html',
                title: 'New Class',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();
