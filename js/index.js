// -----------> HTML Elamnt
let row = document.querySelector("#row")
let row1 = document.querySelector("#row1")
let fod = document.querySelector(".fod")

let final;


// -----------> Functions
async function getData() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    final = await res.json();
    displayData();
}

getData()
function displayData() {
    let cartoon = ``;
    for (let i = 0; i < final.meals.length; i++) {
        cartoon += `<div onclick="food(${[i]})" class="col-md-3 fod position-relative">
                        <img class="w-100 imgg" src="${final.meals[i].strMealThumb}" alt="">  
                        <div class="position-img"><h3>${final.meals[i].strMeal}</h3></div>   
                    </div>`;
        row.innerHTML = cartoon;
    }
}

function food(index) {
    row.classList.replace("d-flex", "d-none");
    let strTags1 = ' ';
    if (final.meals[index].strTags !== null && final.meals[index].strTags !== undefined) {
        strTags1 = final.meals[index].strTags ;
    }
    let cartoon1 = `
    <div class="col-md-4 mt-1">
        <img class="w-100 border-redes" src="${final.meals[index].strMealThumb}" alt="">
        <h2 class="text-white">${final.meals[index].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white mt-1">
        <h2>Instructions</h2>
        <p>${final.meals[index].strInstructions}</p>
        <h3><span>Area : </span>${final.meals[index].strArea}</h3>
        <h3><span>Category : </span>${final.meals[index].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="li-nn">
          <li>${final.meals[index].strMeasure1}${final.meals[index].strIngredient1}</li>
          <li>${final.meals[index].strMeasure2}${final.meals[index].strIngredient2}</li>
          <li>${final.meals[index].strMeasure3}${final.meals[index].strIngredient3}</li>
          <li>${final.meals[index].strMeasure4}${final.meals[index].strIngredient4}</li>
          <li>${final.meals[index].strMeasure5}${final.meals[index].strIngredient5}</li>
          <li>${final.meals[index].strMeasure6}${final.meals[index].strIngredient6}</li>
          <li>${final.meals[index].strMeasure7}${final.meals[index].strIngredient7}</li>
          <li>${final.meals[index].strMeasure8}${final.meals[index].strIngredient8}</li>
          <li>${final.meals[index].strMeasure9}${final.meals[index].strIngredient9}</li>
          <li>${final.meals[index].strMeasure10}${final.meals[index].strIngredient10}</li>
          <li>${final.meals[index].strMeasure11}${final.meals[index].strIngredient11}</li>
          <li>${final.meals[index].strMeasure12}${final.meals[index].strIngredient12}</li>
          <li>${final.meals[index].strMeasure13}${final.meals[index].strIngredient13}</li>
          <li>${final.meals[index].strMeasure14}${final.meals[index].strIngredient14}</li>
          <li>${final.meals[index].strMeasure15}${final.meals[index].strIngredient15}</li>
          <li>${final.meals[index].strMeasure16}${final.meals[index].strIngredient16}</li>
          <li>${final.meals[index].strMeasure17}${final.meals[index].strIngredient17}</li>
          <li>${final.meals[index].strMeasure18}${final.meals[index].strIngredient18}</li>
          <li>${final.meals[index].strMeasure19}${final.meals[index].strIngredient19}</li>
          <li>${final.meals[index].strMeasure20}${final.meals[index].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="Tags-li">
          <li>${strTags1} </li>
        </ul>
        <a class="btn btn-success" target="_blank" href="${final.meals[index].strSource}">source</a>
        <a class="btn btn-danger" target="_blank" href="${final.meals[index].strYoutube}">youtube</a>
    </div>`;
    row1.innerHTML = cartoon1;
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
