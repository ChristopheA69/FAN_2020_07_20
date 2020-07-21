angular.module('app').controller('produitsCtrl', ['$scope','produitService',function($scope, prdService){
    var _vm = this;
    this.arrayProduits = prdService.arrayProduits;

    $scope.onviewproduitclick=function(produit){
        console.log(produit.id);
        
        // prdService.getProduit(produit.id);
        // ou bien (sans recharger)
        prdService.setProduit(produit);
    }
}]);