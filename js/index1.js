// -----------> HTML Elamnt
let catgre = document.querySelector("#catgre")
let catgre1 = document.querySelector("#catgre1")
let catgre2 = document.querySelector("#catgre2")
let final1;
let final2;


// -----------> Functions
async function getData11() {
    let rest = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    final1 = await rest.json();
    displayCatgre();
}

getData11();
function displayCatgre() {
    let cartoonn = ``;
    for (let i = 0; i < final1.categories.length; i++) {
        cartoonn += `<div onclick="getData22(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${final1.categories[i].strCategoryThumb}" alt="">  
                        <div class="position-img1"><h3 class="text-center">${final1.categories[i].strCategory}</h3>
                        <p class="fod-p">${final1.categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p></div>   
                    </div>`;
        catgre.innerHTML = cartoonn;
    }
}

async function getData22(index) {
    let ress = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${final1.categories[index].strCategory}`);
    final2 = await ress.json();
    displayCatgre1();
}

function displayCatgre1() {
    catgre.classList.replace("d-flex", "d-none");
    let cartoonn1 = ``;
    for (let i = 0; i < final2.meals.length; i++) {
        cartoonn1 += `<div onclick="foodCatgre(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${final2.meals[i].strMealThumb}" alt="">  
                        <div class="position-img"><h3>${final2.meals[i].strMeal}</h3></div>   
                    </div>`;
        catgre1.innerHTML = cartoonn1;
    }
}

function foodCatgre(index) {
    catgre1.classList.replace("d-flex", "d-none");
    let strTags = ' ';
    if (final2.meals[index].strTags !== null && final2.meals[index].strTags !== undefined) {
        strTags = final2.meals[index].strTags ;
    }
    let cartoonn2 = `
    <div class="col-md-4 mt-1">
        <img class="w-100 border-redes" src="${final2.meals[index].strMealThumb}" alt="">
        <h2 class="text-white">${final2.meals[index].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white mt-1">
        <h2>Instructions</h2>
        <p>${final2.meals[index].strInstructions}</p>
        <h3><span>Area : </span>${final2.meals[index].strArea}</h3>
        <h3><span>Category : </span>${final2.meals[index].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="li-nn">
          <li>${final2.meals[index].strMeasure1}${final2.meals[index].strIngredient1}</li>
          <li>${final2.meals[index].strMeasure2}${final2.meals[index].strIngredient2}</li>
          <li>${final2.meals[index].strMeasure3}${final2.meals[index].strIngredient3}</li>
          <li>${final2.meals[index].strMeasure4}${final2.meals[index].strIngredient4}</li>
          <li>${final2.meals[index].strMeasure5}${final2.meals[index].strIngredient5}</li>
          <li>${final2.meals[index].strMeasure6}${final2.meals[index].strIngredient6}</li>
          <li>${final2.meals[index].strMeasure7}${final2.meals[index].strIngredient7}</li>
          <li>${final2.meals[index].strMeasure8}${final2.meals[index].strIngredient8}</li>
          <li>${final2.meals[index].strMeasure9}${final2.meals[index].strIngredient9}</li>
          <li>${final2.meals[index].strMeasure10}${final2.meals[index].strIngredient10}</li>
          <li>${final2.meals[index].strMeasure11}${final2.meals[index].strIngredient11}</li>
          <li>${final2.meals[index].strMeasure12}${final2.meals[index].strIngredient12}</li>
          <li>${final2.meals[index].strMeasure13}${final2.meals[index].strIngredient13}</li>
          <li>${final2.meals[index].strMeasure14}${final2.meals[index].strIngredient14}</li>
          <li>${final2.meals[index].strMeasure15}${final2.meals[index].strIngredient15}</li>
          <li>${final2.meals[index].strMeasure16}${final2.meals[index].strIngredient16}</li>
          <li>${final2.meals[index].strMeasure17}${final2.meals[index].strIngredient17}</li>
          <li>${final2.meals[index].strMeasure18}${final2.meals[index].strIngredient18}</li>
          <li>${final2.meals[index].strMeasure19}${final2.meals[index].strIngredient19}</li>
          <li>${final2.meals[index].strMeasure20}${final2.meals[index].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="Tags-li">
          <li>${strTags} </li>
        </ul>
        <a class="btn btn-success" target="_blank" href="${final2.meals[index].strSource}">source</a>
        <a class="btn btn-danger" target="_blank" href="${final2.meals[index].strYoutube}">youtube</a>
    </div>`;
    catgre2.innerHTML = cartoonn2;
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
