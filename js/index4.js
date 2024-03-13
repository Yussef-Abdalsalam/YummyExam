// -----------> HTML Elamnt
let Ingredients = document.querySelector("#Ingredients")
let Ingredients1 = document.querySelector("#Ingredients1")
let Ingredients2 = document.querySelector("#Ingredients2")
let final1;
let final2;
let final3;

// -----------> Functions
async function getIngredients() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    final1 = await res.json();
    displayIngredients();
}

getIngredients()

function displayIngredients() {
    let cartoon = ``;
    for (let i = 0; i < 20; i++) {
        cartoon += `<div onclick="getIngredients1(${[i]})" class="col-md-3 fod text-white text-center position-relative">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${final1.meals[i].strIngredient}</h3> 
                    <p>${final1.meals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>`;
                    Ingredients.innerHTML = cartoon;
    }
}

async function getIngredients1(index) {
    let res1 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${final1.meals[index].strIngredient}`);
    final2 = await res1.json();
    displayIngredients1()
}

function displayIngredients1() {
    Ingredients.classList.replace("d-flex", "d-none");
    let carttoon1 = ``;
    for (let i = 0; i < final2.meals.length; i++) {
        carttoon1 += `<div onclick="foodIngredients(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${final2.meals[i].strMealThumb}" alt="">  
                        <div class="position-img"><h3>${final2.meals[i].strMeal}</h3></div>   
                    </div>`;
                    Ingredients1.innerHTML = carttoon1;
    }
}

async function foodIngredients(index) {
    Ingredients1.classList.replace("d-flex", "d-none");
    let res2 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${final2.meals[index].strMeal}`);
    final3 = await res2.json();
    let strTags = ' ';
    if (final3.meals[0].strTags !== null && final3.meals[0].strTags !== undefined) {
        strTags = final3.meals[0].strTags ;
    }
    let cartoon2 = `
    <div class="col-md-4 mt-1">
        <img class="w-100 border-redes" src="${final3.meals[0].strMealThumb}" alt="">
        <h2 class="text-white">${final3.meals[0].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white mt-1">
        <h2>Instructions</h2>
        <p>${final3.meals[0].strInstructions}</p>
        <h3><span>Area : </span>${final3.meals[0].strArea}</h3>
        <h3><span>Category : </span>${final3.meals[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="li-nn">
          <li>${final3.meals[0].strMeasure1}${final3.meals[0].strIngredient1}</li>
          <li>${final3.meals[0].strMeasure2}${final3.meals[0].strIngredient2}</li>
          <li>${final3.meals[0].strMeasure3}${final3.meals[0].strIngredient3}</li>
          <li>${final3.meals[0].strMeasure4}${final3.meals[0].strIngredient4}</li>
          <li>${final3.meals[0].strMeasure5}${final3.meals[0].strIngredient5}</li>
          <li>${final3.meals[0].strMeasure6}${final3.meals[0].strIngredient6}</li>
          <li>${final3.meals[0].strMeasure7}${final3.meals[0].strIngredient7}</li>
          <li>${final3.meals[0].strMeasure8}${final3.meals[0].strIngredient8}</li>
          <li>${final3.meals[0].strMeasure9}${final3.meals[0].strIngredient9}</li>
          <li>${final3.meals[0].strMeasure10}${final3.meals[0].strIngredient10}</li>
          <li>${final3.meals[0].strMeasure11}${final3.meals[0].strIngredient11}</li>
          <li>${final3.meals[0].strMeasure12}${final3.meals[0].strIngredient12}</li>
          <li>${final3.meals[0].strMeasure13}${final3.meals[0].strIngredient13}</li>
          <li>${final3.meals[0].strMeasure14}${final3.meals[0].strIngredient14}</li>
          <li>${final3.meals[0].strMeasure15}${final3.meals[0].strIngredient15}</li>
          <li>${final3.meals[0].strMeasure16}${final3.meals[0].strIngredient16}</li>
          <li>${final3.meals[0].strMeasure17}${final3.meals[0].strIngredient17}</li>
          <li>${final3.meals[0].strMeasure18}${final3.meals[0].strIngredient18}</li>
          <li>${final3.meals[0].strMeasure19}${final3.meals[0].strIngredient19}</li>
          <li>${final3.meals[0].strMeasure20}${final3.meals[0].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="Tags-li">
          <li>${strTags}</li>
        </ul>
        <a class="btn btn-success" target="_blank" href="${final3.meals[0].strSource}">source</a>
        <a class="btn btn-danger" target="_blank" href="${final3.meals[0].strYoutube}">youtube</a>
    </div>`;
    Ingredients2.innerHTML = cartoon2;
}

// -----------> Jqyere
$(".botmmm").click(function () {
    $(".navBar").animate({ left: "16rem" }, 300)
    $(".li-nav").animate({ marginLeft: "0rem" }, 200, function () {
        $(".li-nav").animate({ paddingTop: "0rem" }, 200)
    });
    $(".navBar1").css({ "display": "flex" });
    $(".botmmm").css({ "display": "none" });
    $(".botmmm1").css({ "display": "block" });
});

$(".botmmm1").click(function () {
    $(".navBar").animate({ left: "0rem" }, 700)
    $(".li-nav").animate({ marginLeft: "-5rem" }, 200, function () {
        $(".li-nav").animate({ paddingTop: "7rem" }, 200)
    });
    $(".navBar1").css({ "display": "none" })
    $(".botmmm").css({ "display": "block" })
    $(".botmmm1").css({ "display": "none" })
});
