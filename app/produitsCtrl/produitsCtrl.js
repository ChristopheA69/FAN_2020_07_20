angular.module('app').controller('produitsCtrl', ['$scope',function($scope){
    this.arrayProduits=[
        {nom:'beurre 1er prix',prix:0.50,desc:'Beurre ripou',img:'can-we-make-butter',stars:1},
        {nom:'beurre salé',prix:1.30,desc:'Beurre salé ++',img:'can-we-make-butter',stars:3},
        {nom:'beurre doux',prix:2.00,desc:'Beurre doux +++',img:'can-we-make-butter',stars:5}
    ];
    $scope.onviewproduitclick=function(produit){console.log(produit);}
}]);