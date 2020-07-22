angular.module('app').controller('panierCtrl', ['$scope','panierService',function($scope, panierService){
    this.arrayPanier=panierService.arrayPanier;

    // $scope.onviewproduitclick=function(produit){
    //     console.log(produit);
        // panierService.
    // }

    this.removeQuant=panierService.removeQuant;
    this.addQuant=panierService.addQuant;

}]);
