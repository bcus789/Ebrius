const cocktails = {
    "apiKey": '9973533',
    fetchCocktails: function(ingredient1, ingredient2, ingredient3){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"+ this.apiKey +"/filter.php?i=Dry_Vermouth,Gin,Anis")
        .then((response) => response.json())
        .then((data) => console.log(data))
    },

}

cocktails.fetchCocktails()