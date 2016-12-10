(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myclass')
        .controller('myclassCtrl', myclassCtrl)
        .controller('modalCtrl',modalCtrl);

    /** @ngInject */
    function myclassCtrl($scope, $rootScope, $uibModal) {
        var vm = this;

        vm.submitNewClass = function () {
            console.log($rootScope);
            console.log(vm);
        };
        $scope.icons = {
            kameleonIcons: [
                {
                    name: 'Beach',
                    img: 'app/typography/typo01.png'
                },
                {
                    name: 'Bus',
                    img: 'app/typography/typo03.png'
                },
                {
                    name: 'Cheese',
                    img: 'app/typography/typo04.png'
                },
                {
                    name: 'Desert',
                    img: 'app/typography/typo05.png'
                },
                {
                    name: 'Images',
                    img: 'app/typography/typo06.png'
                },
                {
                    name: 'Magician',
                    img: 'app/typography/typo07.png'
                },
                {
                    name: 'Makeup',
                    img: 'app/typography/typo01.png'
                },
                {
                    name: 'Programming',
                    img: 'app/typography/typo03.png'
                }
            ]
        };

        $scope.open = function (page, size, imgsrc,name) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                controller:modalCtrl,
                resolve: {
                    items: function () {
                        return $scope.items;
                    },
                    imgsrc:function(){
                      return imgsrc;
                    },
                    name:function(){
                        return name;
                    }
                }
            });
        };


    }
})();

function modalCtrl($scope){
    var vm = this;
    vm.imgsrc = $scope.$resolve.imgsrc;
    vm.name = $scope.$resolve.name;
}