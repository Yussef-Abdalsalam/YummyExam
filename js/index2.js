// -----------> HTML Elamnt
let SearchName = document.querySelector("#SearchName")
let SearchFirst = document.querySelector("#SearchFirst")
let Search = document.querySelector("#Search")
let Search1 = document.querySelector("#Search1")
let Search2 = document.querySelector("#Search2")
let finalS;
let inputS;
let finalF;
let inputF;



// -----------> Functions
async function getSearch() {
    inputS = SearchName.value;
    let ress1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputS}`);
    finalS = await ress1.json();
    displaySearch()
}

function displaySearch() {
    let carton = ``;
    for (let i = 0; i < finalS.meals.length; i++) {
        carton += `<div onclick="foodSearch(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${finalS.meals[i].strMealThumb}" alt="">  
                        <div class="position-img"><h3>${finalS.meals[i].strMeal}</h3></div>   
                    </div>`;
                    Search.innerHTML = carton;
    }
}

function foodSearch(index) {
    Search.classList.replace("d-flex", "d-none");
    Search2.classList.replace("d-flex", "d-none");
    let strTags1 = ' ';
    if (finalS.meals[index].strTags !== null && finalS.meals[index].strTags !== undefined) {
        strTags1 = finalS.meals[index].strTags ;
    }
    let carton1 = `
    <div class="col-md-4 mt-1">
        <img class="w-100 border-redes" src="${finalS.meals[index].strMealThumb}" alt="">
        <h2 class="text-white">${finalS.meals[index].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white mt-1">
        <h2>Instructions</h2>
        <p>${finalS.meals[index].strInstructions}</p>
        <h3><span>Area : </span>${finalS.meals[index].strArea}</h3>
        <h3><span>Category : </span>${finalS.meals[index].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="li-nn">
          <li>${finalS.meals[index].strMeasure1}${finalS.meals[index].strIngredient1}</li>
          <li>${finalS.meals[index].strMeasure2}${finalS.meals[index].strIngredient2}</li>
          <li>${finalS.meals[index].strMeasure3}${finalS.meals[index].strIngredient3}</li>
          <li>${finalS.meals[index].strMeasure4}${finalS.meals[index].strIngredient4}</li>
          <li>${finalS.meals[index].strMeasure5}${finalS.meals[index].strIngredient5}</li>
          <li>${finalS.meals[index].strMeasure6}${finalS.meals[index].strIngredient6}</li>
          <li>${finalS.meals[index].strMeasure7}${finalS.meals[index].strIngredient7}</li>
          <li>${finalS.meals[index].strMeasure8}${finalS.meals[index].strIngredient8}</li>
          <li>${finalS.meals[index].strMeasure9}${finalS.meals[index].strIngredient9}</li>
          <li>${finalS.meals[index].strMeasure10}${finalS.meals[index].strIngredient10}</li>
          <li>${finalS.meals[index].strMeasure11}${finalS.meals[index].strIngredient11}</li>
          <li>${finalS.meals[index].strMeasure12}${finalS.meals[index].strIngredient12}</li>
          <li>${finalS.meals[index].strMeasure13}${finalS.meals[index].strIngredient13}</li>
          <li>${finalS.meals[index].strMeasure14}${finalS.meals[index].strIngredient14}</li>
          <li>${finalS.meals[index].strMeasure15}${finalS.meals[index].strIngredient15}</li>
          <li>${finalS.meals[index].strMeasure16}${finalS.meals[index].strIngredient16}</li>
          <li>${finalS.meals[index].strMeasure17}${finalS.meals[index].strIngredient17}</li>
          <li>${finalS.meals[index].strMeasure18}${finalS.meals[index].strIngredient18}</li>
          <li>${finalS.meals[index].strMeasure19}${finalS.meals[index].strIngredient19}</li>
          <li>${finalS.meals[index].strMeasure20}${finalS.meals[index].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="Tags-li">
          <li>${ strTags1 } </li>
        </ul>
        <a class="btn btn-success" target="_blank" href="${finalS.meals[index].strSource}">source</a>
        <a class="btn btn-danger" target="_blank" href="${finalS.meals[index].strYoutube}">youtube</a>
    </div>`;
    Search1.innerHTML = carton1;
}

// SearchFirst
async function getSearch1() {
    inputF = SearchFirst.value;
    let ress2 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputF}`);
    finalF = await ress2.json();
    displaySearch1()
}

function displaySearch1() {
    let carton9 = ``;
    for (let i = 0; i < finalF.meals.length; i++) {
        carton9 += `<div onclick="foodSearch1(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${finalF.meals[i].strMealThumb}" alt="">  
                        <div class="position-img"><h3>${finalF.meals[i].strMeal}</h3></div>   
                    </div>`;
                    Search.innerHTML = carton9;
    }
}

function foodSearch1(index) {
    Search.classList.replace("d-flex", "d-none");
    Search2.classList.replace("d-flex", "d-none");
    let strTags2 = ' ';
    if (finalF.meals[index].strTags !== null && finalF.meals[index].strTags !== undefined) {
        strTags2 = finalF.meals[index].strTags ;
    }
    let carton9 = `
    <div class="col-md-4 mt-1">
        <img class="w-100 border-redes" src="${finalF.meals[index].strMealThumb}" alt="">
        <h2 class="text-white">${finalF.meals[index].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white mt-1">
        <h2>Instructions</h2>
        <p>${finalF.meals[index].strInstructions}</p>
        <h3><span>Area : </span>${finalF.meals[index].strArea}</h3>
        <h3><span>Category : </span>${finalF.meals[index].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="li-nn">
          <li>${finalF.meals[index].strMeasure1}${finalF.meals[index].strIngredient1}</li>
          <li>${finalF.meals[index].strMeasure2}${finalF.meals[index].strIngredient2}</li>
          <li>${finalF.meals[index].strMeasure3}${finalF.meals[index].strIngredient3}</li>
          <li>${finalF.meals[index].strMeasure4}${finalF.meals[index].strIngredient4}</li>
          <li>${finalF.meals[index].strMeasure5}${finalF.meals[index].strIngredient5}</li>
          <li>${finalF.meals[index].strMeasure6}${finalF.meals[index].strIngredient6}</li>
          <li>${finalF.meals[index].strMeasure7}${finalF.meals[index].strIngredient7}</li>
          <li>${finalF.meals[index].strMeasure8}${finalF.meals[index].strIngredient8}</li>
          <li>${finalF.meals[index].strMeasure9}${finalF.meals[index].strIngredient9}</li>
          <li>${finalF.meals[index].strMeasure10}${finalF.meals[index].strIngredient10}</li>
          <li>${finalF.meals[index].strMeasure11}${finalF.meals[index].strIngredient11}</li>
          <li>${finalF.meals[index].strMeasure12}${finalF.meals[index].strIngredient12}</li>
          <li>${finalF.meals[index].strMeasure13}${finalF.meals[index].strIngredient13}</li>
          <li>${finalF.meals[index].strMeasure14}${finalF.meals[index].strIngredient14}</li>
          <li>${finalF.meals[index].strMeasure15}${finalF.meals[index].strIngredient15}</li>
          <li>${finalF.meals[index].strMeasure16}${finalF.meals[index].strIngredient16}</li>
          <li>${finalF.meals[index].strMeasure17}${finalF.meals[index].strIngredient17}</li>
          <li>${finalF.meals[index].strMeasure18}${finalF.meals[index].strIngredient18}</li>
          <li>${finalF.meals[index].strMeasure19}${finalF.meals[index].strIngredient19}</li>
          <li>${finalF.meals[index].strMeasure20}${finalF.meals[index].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="Tags-li">
          <li>${strTags2} </li>
        </ul>
        <a class="btn btn-success" target="_blank" href="${finalF.meals[index].strSource}">source</a>
        <a class="btn btn-danger" target="_blank" href="${finalF.meals[index].strYoutube}">youtube</a>
    </div>`;
    Search1.innerHTML = carton9;
}


// -----------> Evnts
SearchName.addEventListener("input", getSearch);
SearchFirst.addEventListener("input", getSearch1)


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