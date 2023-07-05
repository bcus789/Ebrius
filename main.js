import { autocomplete } from './autocomplete.js'

let submitButton = document.getElementById("submitIngredients")
let ingredientsArr = []

const ing1 = document.getElementById("ingredient1")
const ing2 = document.getElementById("ingredient2")
const ing3 = document.getElementById("ingredient3")
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
    },
    ingredientLookup: function(){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey +
        "/list.php?i=list")
        .then((response) => response.json())
        .then((data) => this.pushIngredients(data))
    },
    pushIngredients: function(data){
        for (let i = 0; i<data.drinks.length; i++){
            ingredientsArr.push(data.drinks[i].strIngredient1)
            
        }
    }

}

cocktails.ingredientLookup()

autocomplete(document.getElementById("ingredient1"), ingredientsArr);
autocomplete(document.getElementById("ingredient2"), ingredientsArr);
autocomplete(document.getElementById("ingredient3"), ingredientsArr);

cocktails.fetchCocktails("vodka", "olive")

submitButton.addEventListener("click", function(){
    console.log(ing1.value, ing2.value)
})