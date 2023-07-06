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
        "/filter.php?i=" + ingredient1 + ingredient2 + ingredient3)
        .then((response) => response.json())
        // .then((data) =>  console.log(data))
        .then((data) =>  drinkCheck(data))
        .catch((error) => {
            console.log(error)
          })
    },
    cocktailLookup: function(drinksArr){
        for (let i = 0; i < drinksArr.length; i++){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey + 
        "/lookup.php?i="
        + drinksArr[i].idDrink)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error)
          })
        }   
    },
    ingredientLookup: function(){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey +
        "/list.php?i=list")
        .then((response) => response.json())
        .then((data) => this.pushIngredients(data))
        .catch((error) => {
            console.log(error)
          })
    },
    pushIngredients: function(data){
        for (let i = 0; i<data.drinks.length; i++){
            ingredientsArr.push(data.drinks[i].strIngredient1)          
        }
    },
}

cocktails.ingredientLookup()

autocomplete(document.getElementById("ingredient1"), ingredientsArr);
autocomplete(document.getElementById("ingredient2"), ingredientsArr);
autocomplete(document.getElementById("ingredient3"), ingredientsArr);

// cocktails.fetchCocktails("Dry_Vermouth", "Gin", "olive")


submitButton.addEventListener("click", function(){
    let ingredient1 = ing1.value
    let ingredient2 = ing2.value
    let ingredient3 = ing3.value
    if(ing2.value != ""){
        ingredient2 = "," + ing2.value
    }
    if(ing3.value != ""){
        ingredient3 = "," + ing3.value
    }
    console.log(ingredient1, ingredient2, ingredient3)
    cocktails.fetchCocktails(ingredient1, ingredient2, ingredient3)
})

function drinkCheck(data) {
    if (data.drinks === 'None Found'){
        console.log("No Drinks Found")
    } else {
        cocktails.cocktailLookup(data.drinks)
    }
}