const drinksDiv = document.getElementById("drinks-div")

function renderDrinks(data){
    drinksDiv.innerHTML += `<b><h2 style="color:red">${data.drinks[0].strDrink}</h2></b>`
    drinksDiv.innerHTML += `<img src="${data.drinks[0].strDrinkThumb
    }"></img>`
    if (data.drinks[0].strIngredient1 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure1
        } ${data.drinks[0].strIngredient1}</p>`}
    if (data.drinks[0].strIngredient2 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure2
        } ${data.drinks[0].strIngredient2}</p>`}
    if (data.drinks[0].strIngredient3 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure3
        } ${data.drinks[0].strIngredient3}</p>`}
    if (data.drinks[0].strIngredient4 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure4
        } ${data.drinks[0].strIngredient4}</p>`}
    if (data.drinks[0].strIngredient5 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure5
        } ${data.drinks[0].strIngredient5}</p>`}
    if (data.drinks[0].strIngredient6 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure6
        } ${data.drinks[0].strIngredient6}</p>`}
    if (data.drinks[0].strIngredient7 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure7
        } ${data.drinks[0].strIngredient7}</p>`}
    if (data.drinks[0].strIngredient8 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure8
        }  ${data.drinks[0].strIngredient8}</p>`}
    if (data.drinks[0].strIngredient9 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure9
        } ${data.drinks[0].strIngredient9}</p>`}
    if (data.drinks[0].strIngredient10 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure10
        } ${data.drinks[0].strIngredient10}</p>`}
    if (data.drinks[0].strIngredient11 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure11
        } ${data.drinks[0].strIngredient11}</p>`}
    if (data.drinks[0].strIngredient12 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure12
        } ${data.drinks[0].strIngredient12}</p>`}
    if (data.drinks[0].strIngredient13 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure13
        } ${data.drinks[0].strIngredient13}</p>`}
    if (data.drinks[0].strIngredient14 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure14
        } ${data.drinks[0].strIngredient14}</p>`}
    if (data.drinks[0].strIngredient15 != null){
        drinksDiv.innerHTML += `<p>${data.drinks[0].strMeasure15
        } ${data.drinks[0].strIngredient15}</p>`}
    drinksDiv.innerHTML += `<b><p style="margin-bottom: 60px">${data.drinks[0].strInstructions
        }</p></b>`
}

export { renderDrinks }