angular.module('app').controller('produitCtrl', ['$scope','produitService',function($scope, prdService){

    var _vm = this;
    this.produit = prdService.produit;
    
    // $scope.onaddcartclick = function(prod){
    //      console.log('ProduitCtrl produit ajouté: ',prod)
    //      prdService.ajouterProduitAuCaddie(prod);
    // }
    $scope.onaddcartclick = prdService.ajouterProduitAuCaddie;

    prdService.getProduit(1);

}]);

