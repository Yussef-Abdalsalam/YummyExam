// -----------> HTML Elamnt
let nameInput = document.querySelector("#nameInput")
let nameAlert = document.querySelector("#nameAlert")
let emailInput = document.querySelector("#emailInput")
let emailAlert = document.querySelector("#emailAlert")
let phoneInput = document.querySelector("#phoneInput")
let phoneAlert = document.querySelector("#phoneAlert")
let ageInput = document.querySelector("#ageInput")
let ageAlert = document.querySelector("#ageAlert")
let passwordInput = document.querySelector("#passwordInput")
let passwordAlert = document.querySelector("#passwordAlert")
let repasswordInput = document.querySelector("#repasswordInput")
let repasswordAlert = document.querySelector("#repasswordAlert")
let submitBtn = document.querySelector("#submitBtn")

const nameRegex = /^[A-Za-z]{1,}$/;
const phoneRegex = /^[0-9]{9,12}$/;
const emaildRegex = /[.com]$/;
const passwordRegex = /[A-Za-z0-9]{8,}/;

// -----------> Functions

function valedete(element, regex, elementt) {
    if (regex.test(element.value)) {
        elementt.classList.replace("d-block", "d-none");
        valedeteBtn()
        return true;
    }
    elementt.classList.replace("d-none", "d-block");
    valedeteBtn()
    return false;
}

function repassword() {
    if (passwordInput.value === repasswordInput.value) {
        repasswordAlert.classList.replace("d-block", "d-none");
        valedeteBtn()
        return true;
    }
    repasswordAlert.classList.replace("d-none", "d-block");
    return false;

}

function valedeteBtn() {
    if (passwordInput.value === repasswordInput.value
        && nameRegex.test(nameInput.value)
        && emaildRegex.test(emailInput.value)
        && phoneRegex.test(phoneInput.value)
        && passwordRegex.test(passwordInput.value)) {

        submitBtn.classList.replace("btn-outline-danger", "btn-danger");
    }else{
        submitBtn.classList.replace("btn-danger", "btn-outline-danger" )
    }
}

// -----------> Event

repasswordInput.addEventListener("input", repassword);

nameInput.addEventListener("input", function () {
    valedete(nameInput, nameRegex, nameAlert)
})
emailInput.addEventListener("input", function () {
    valedete(emailInput, emaildRegex, emailAlert)
})
phoneInput.addEventListener("input", function () {
    valedete(phoneInput, phoneRegex, phoneAlert)
})
passwordInput.addEventListener("input", function () {
    valedete(passwordInput, passwordRegex, passwordAlert)
})

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