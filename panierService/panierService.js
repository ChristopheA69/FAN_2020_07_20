(function(){
    'use strict';

    angular
        .module('app')
        .service('panierService', Service)

    Service.$inject = ['$http'];
    function Service($http){
        var _vm=this;
        this.arrayPanier=[];
        this.produit={};

        this.getProduit=function(id){
            $http({url:'http://localhost:5635/produits/'+id+'?_expand=categorie', method:'GET'}).then(
                function success(response){
                    // console.log('context', this);
                    // console.log('ctrl', _vm);
                    console.log('Succès ', response);
    
                    Object.assign(_vm.produit,response.data)  ;
                },
                function failure(response){
                    console.log('Echec ', response)
                }
            )
        }

        this.setProduit=function(produit) {
            Object.assign(_vm.produit, produit);
        }

        const getProduits=function(){
            $http({url:'http://localhost:5635/produits?_expand=categorie', method:'GET'}).then(
                function success(response){
                    // console.log('context', this);
                    // console.log('ctrl', _vm);
                    console.log('Succès ', response);
                    _vm.arrayProduits.slice(0);
                    response.data.map(function (objIterr){
                        _vm.arrayProduits.push(objIterr);
                    });
                },
                function failure(response){
                    console.log('Echec ', response)
                }
            )
        }
        getProduits();
    }
}());