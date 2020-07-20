angular.module('app').controller('produitCtrl', ['$scope', function($scope) {
    this.chaine1='Beurre';
    this.produit={nom:'beurre salé',prix:2.00,desc:'Beurre salé ++',img:'can-we-make-butter',stars:5}
    $scope.onaddcartclick=function(prod){console.log('produit ajouté: ',prod)}
}]);

