angular.module('app').controller('panierCtrl', ['$scope',function($scope){
    this.arrayPanier=[
        {nom:'beurre 1er prix',prix:0.50,desc:'Beurre ripou',img:'can-we-make-butter',stars:1,qty:1},
        {nom:'beurre salé',prix:1.30,desc:'Beurre salé ++',img:'can-we-make-butter',stars:3,qty:4},
        {nom:'beurre doux',prix:2.00,desc:'Beurre doux +++',img:'can-we-make-butter',stars:5,qty:2}
    ];
    $scope.onviewproduitclick=function(produit){
        console.log(produit);
    }

    this.removeQuant=function(produit){
        produit.qty > 0?produit.qty--:0;
    }

    this.addQuant=function(produit){
        produit.qty++;
    }
}]);