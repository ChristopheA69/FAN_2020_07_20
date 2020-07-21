angular.module('app').controller('produitsCtrl', ['$scope',function($scope){
    this.arrayProduits=[
        {nom:'beurre 1er prix',prix:0.50,desc:'Beurre ripou',img:'can-we-make-butter.jpg',stars:1},
        {nom:'beurre salé',prix:1.30,desc:'Beurre salé ++',img:'580x580.webp',stars:3},
        {nom:'beurre doux',prix:2.00,desc:'Beurre doux +++',img:'5052-1.jpg',stars:5}
    ];
    $scope.onviewproduitclick=function(produit){console.log(produit);} 
}]);