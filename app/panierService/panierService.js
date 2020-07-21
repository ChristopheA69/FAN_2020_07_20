(function(){
    'use strict';

    angular
        .module('app')
        .service('panierService', Service)

    function Service(){
        var _vm=this;
        this.arrayPanier=[{
            "id": 1,
            "categorieId": 1,
            "nom": "cidre breton",
            "prix": 2.54,
            "desc": "Super cidre breton",
            "stars": 3,
            "img": "5052-1.jpg",
            "stock": 5,
            "qty":1
          }];
        
        this.removeQuant=function(produit){            
            produit.qty = (produit.qty > 0?produit.qty-1:0);
        }
    
        this.addQuant=function(produit){
            produit.qty+=1;
        }
    }
    
}());
