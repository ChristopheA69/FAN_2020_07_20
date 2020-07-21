angular.module('app').controller('produitCtrl', ['$scope','produitService',function($scope, prdService){

    var _vm = this;
    this.produit = prdService.produit;
    
    $scope.onaddcartclick = function(prod){console.log('produit ajouté: ',prod)}

    prdService.getProduit(1);

}]);

