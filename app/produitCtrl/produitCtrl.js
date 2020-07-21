angular.module('app').controller('produitCtrl', ['$scope', function($scope) {
    this.chaine1 = 'Beurre';
    this.produit = {nom:'beurre doux',prix:2.00,desc:'Beurre doux +++',img:'5052-1.jpg',stars:5}
    $scope.onaddcartclick = function(prod){console.log('produit ajouté: ',prod)}
}]);

