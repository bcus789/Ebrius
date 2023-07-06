import { autocomplete } from './autocomplete.js'

let ingredientsArr = []
let cocktailIngredients = []
let ingredientsDiv = []

const submitButton = document.getElementById("submitIngredients")
const clearIngredients = document.getElementById("clearIngredients")
const ingredientsList = document.getElementById("ingredientsList")
const findCocktailsButton = document.getElementById("findCocktails")
const ingredient = document.getElementById("ingredient")

const cocktails = {
    "apiKey": '9973533',
    fetchCocktails: function(ingredients){
        let url = "https:/www.thecocktaildb.com/api/json/v2/" + this.apiKey + "/filter.php?i="
        for (let i = 0; i < ingredients.length; i++){
            url += ingredients[i]
        }
        fetch(url)
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
        autocomplete(document.getElementById("ingredient"), ingredientsArr);
    },
}

cocktails.ingredientLookup()

function drinkCheck(data) {
    if (data.drinks === 'None Found'){
        console.log("No Drinks Found")
    } else {
        cocktails.cocktailLookup(data.drinks)
    }
}

submitButton.addEventListener("click", function(){
    if (cocktailIngredients.length === 0 ){
        cocktailIngredients.push(ingredient.value)
    } else {
        cocktailIngredients.push("," + ingredient.value)
    }
    ingredientsDiv.push(ingredient.value)
    ingredient.value = ""
    ingredientsList.innerText = ""
    for (let i = 0; i < cocktailIngredients.length; i++){
        ingredientsList.innerHTML += `<li>${ingredientsDiv[i]}</li>`
    }
})


findCocktailsButton.addEventListener("click", function(){
    cocktails.fetchCocktails(cocktailIngredients)
})

clearIngredients.addEventListener("click", function(){
    ingredientsList.innerText = ""
    cocktailIngredients = []
    ingredientsDiv = []
})

