import { autocomplete } from './autocomplete.js'

let submitButton = document.getElementById("submitIngredients")
let ingredientsArr = []
let cocktailIngredients = []
let clearIngredients = document.getElementById("clearIngredients")

const ingredientsList = document.getElementById("ingredientsList")
const findCocktailsButton = document.getElementById("findCocktails")
const ingredient = document.getElementById("ingredient")

const cocktails = {
    "apiKey": '9973533',
    fetchCocktails: function(ingredients){
        fetch("https:/www.thecocktaildb.com/api/json/v2/"
        + this.apiKey +
        "/filter.php?i=" + ingredients[0])
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

autocomplete(document.getElementById("ingredient"), ingredientsArr);


function drinkCheck(data) {
    if (data.drinks === 'None Found'){
        console.log("No Drinks Found")
    } else {
        cocktails.cocktailLookup(data.drinks)
    }
}

submitButton.addEventListener("click", function(){
    cocktailIngredients.push(ingredient.value)
    ingredientsList.innerText = ""
    for (let i = 0; i < cocktailIngredients.length; i++){
        ingredientsList.innerHTML += `<li>${cocktailIngredients[i]}</li>`
    }
    console.log(cocktailIngredients)
})


findCocktailsButton.addEventListener("click", function(){
    cocktails.fetchCocktails(cocktailIngredients)
})

clearIngredients.addEventListener("click", function(){
    ingredientsList.innerText = ""
    cocktailIngredients = []
})