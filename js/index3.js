// -----------> HTML Elamnt
let Area = document.querySelector("#Area")
let Area1 = document.querySelector("#Area1")
let Area2 = document.querySelector("#Area2")
let finalA;
let finalA1;
let finalA12;


// -----------> Functions
async function getArea() {
    let resA = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    finalA = await resA.json();
    displayArea();
}

getArea()

function displayArea() {
    let cartoonA = ``;
    for (let i = 0; i < finalA.meals.length; i++) {
        cartoonA += `<div onclick="getArea1(${[i]})" class="col-md-3 fod text-white text-center position-relative">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${finalA.meals[i].strArea}</h3>  
                    </div>`;
        Area.innerHTML = cartoonA;
    }
}

async function getArea1(index) {
    let resA1 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${finalA.meals[index].strArea}`);
    finalA1 = await resA1.json();
    displayArea1()
}

function displayArea1() {
    Area.classList.replace("d-flex", "d-none");
    let carttoon = ``;
    for (let i = 0; i < finalA1.meals.length; i++) {
        carttoon += `<div onclick="food(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${finalA1.meals[i].strMealThumb}" alt="">  
                        <div class="position-img"><h3>${finalA1.meals[i].strMeal}</h3></div>   
                    </div>`;
        Area1.innerHTML = carttoon;



    }
}

async function food(index) {
    Area1.classList.replace("d-flex", "d-none");
    let resA12 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${finalA1.meals[index].strMeal}`);
    finalA12 = await resA12.json();
    let strTags = ' ';
    if (finalA12.meals[0].strTags !== null && finalA12.meals[0].strTags !== undefined) {
        strTags = finalA12.meals[0].strTags ;
    }
    let cartoon1 = `
    <div class="col-md-4 mt-1">
        <img class="w-100 border-redes" src="${finalA12.meals[0].strMealThumb}" alt="">
        <h2 class="text-white">${finalA12.meals[0].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white mt-1">
        <h2>Instructions</h2>
        <p>${finalA12.meals[0].strInstructions}</p>
        <h3><span>Area : </span>${finalA12.meals[0].strArea}</h3>
        <h3><span>Category : </span>${finalA12.meals[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="li-nn">
          <li>${finalA12.meals[0].strMeasure1}${finalA12.meals[0].strIngredient1}</li>
          <li>${finalA12.meals[0].strMeasure2}${finalA12.meals[0].strIngredient2}</li>
          <li>${finalA12.meals[0].strMeasure3}${finalA12.meals[0].strIngredient3}</li>
          <li>${finalA12.meals[0].strMeasure4}${finalA12.meals[0].strIngredient4}</li>
          <li>${finalA12.meals[0].strMeasure5}${finalA12.meals[0].strIngredient5}</li>
          <li>${finalA12.meals[0].strMeasure6}${finalA12.meals[0].strIngredient6}</li>
          <li>${finalA12.meals[0].strMeasure7}${finalA12.meals[0].strIngredient7}</li>
          <li>${finalA12.meals[0].strMeasure8}${finalA12.meals[0].strIngredient8}</li>
          <li>${finalA12.meals[0].strMeasure9}${finalA12.meals[0].strIngredient9}</li>
          <li>${finalA12.meals[0].strMeasure10}${finalA12.meals[0].strIngredient10}</li>
          <li>${finalA12.meals[0].strMeasure11}${finalA12.meals[0].strIngredient11}</li>
          <li>${finalA12.meals[0].strMeasure12}${finalA12.meals[0].strIngredient12}</li>
          <li>${finalA12.meals[0].strMeasure13}${finalA12.meals[0].strIngredient13}</li>
          <li>${finalA12.meals[0].strMeasure14}${finalA12.meals[0].strIngredient14}</li>
          <li>${finalA12.meals[0].strMeasure15}${finalA12.meals[0].strIngredient15}</li>
          <li>${finalA12.meals[0].strMeasure16}${finalA12.meals[0].strIngredient16}</li>
          <li>${finalA12.meals[0].strMeasure17}${finalA12.meals[0].strIngredient17}</li>
          <li>${finalA12.meals[0].strMeasure18}${finalA12.meals[0].strIngredient18}</li>
          <li>${finalA12.meals[0].strMeasure19}${finalA12.meals[0].strIngredient19}</li>
          <li>${finalA12.meals[0].strMeasure20}${finalA12.meals[0].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="Tags-li">
          <li>${strTags} </li>
        </ul>
        <a class="btn btn-success" target="_blank" href="${finalA12.meals[0].strSource}">source</a>
        <a class="btn btn-danger" target="_blank" href="${finalA12.meals[0].strYoutube}">youtube</a>
    </div>`;
    Area2.innerHTML = cartoon1;
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

