(function(){
    'use strict';

    angular
        .module('app')
        .service('produitService', Service)

    Service.$inject = ['$http','panierService'];
    function Service($http,panierService){
        var _vm=this;
        this.arrayProduits=[];
        this.produit={};

        this.ajouterProduitAuCaddie=function(produit){
            if (undefined !== produit.qty) {
                produit.qty+=1;    
            }else {
                var _prod = _vm.produit;
                _prod.qty=1;
                const tmp = Object.assign({}, _prod);
                panierService.arrayPanier.push(tmp);
            }
        }

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