const cocktails = {
    "apiKey": '9973533',
    fetchCocktails: function(ingredient1, ingredient2, ingredient3){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey +
        "/filter.php?i=" + ingredient1 + "," + ingredient2 + "," + ingredient3)
        .then((response) => response.json())
        .then((data) => this.cocktailLookup(data.drinks[0].idDrink, data.drinks[1].idDrink))
    },
    cocktailLookup: function(id1, id2){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey + 
        "/lookup.php?i="
        + id1)
        .then((response) => response.json())
        .then((data) => console.log(data))

        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey + 
        "/lookup.php?i=" 
        + id2)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

}

cocktails.fetchCocktails("Dry_Vermouth", "Vodka", "Olive")