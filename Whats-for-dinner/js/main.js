//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getMeal)


function getMeal(){
    let inputVal=document.querySelector('input').value
    const url='https://www.themealdb.com/api/json/v1/1/search.php?s='+inputVal
    
    fetch(url)
    .then(res => res.json()) 
    .then(data =>{
           console.log(data) 

           let mealName= data.meals[0].strMeal
           let mealType= data.meals[0].strCategory
           let picture= data.meals[0].strMealThumb
           let mealInstruction= data.meals[0].strInstructions
           let watchThis= data.meals[0].strYoutube
        document.querySelector('h2').innerText=mealName
        document.querySelector('h4').innerText=mealType
        document.querySelector('img').src=picture
        document.querySelector('h3').innerText=mealInstruction
        document.querySelector('a').innerText=watchThis


    })
    .catch(err =>{
        console.log(`error ${err}`)
    })
}
