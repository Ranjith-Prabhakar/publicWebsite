// show case

let globalVar = "web developer";
setInterval((localVar = globalVar) => {
    let spanEl = document.querySelector("#course");
    spanEl.innerText = localVar;

    if (localVar === "web developer") {
        globalVar = "mobile developer";
        spanEl.classList.replace("text-warning", "text-primary")


    } else if (localVar === "mobile developer") {
        globalVar = "data scientist";
        spanEl.classList.replace("text-primary", "text-danger")

    } else if (localVar === "data scientist") {
        globalVar = "web developer";
        spanEl.classList.replace("text-danger", "text-warning")
    }
}, 2000);


// enrollment button
let modalFormEl = document.getElementById("enquiry"); //form

let enrollmentBtnEl = document.getElementById("enrollment-btn"); //enroll button
let showCaseEl = document.getElementById("showCase");

let avatarEl = document.getElementById("talking-avatar")

let handlerSwitchEnrollmentButton = () => {
    showCaseEl.classList.add("d-none");
    modalFormEl.classList.toggle("d-none");



    enrollmentBtnEl.removeEventListener("click", handlerSwitchEnrollmentButton);
}

enrollmentBtnEl.addEventListener("click", handlerSwitchEnrollmentButton)


// form data collection



modalFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

let avatarH2El=document.getElementById("avatar-h2");
let avatarH4El=document.getElementById("avatar-h4");
avatarH2El.firstElementChild.innerText=modalFormEl.elements.firstName.value;
avatarH4El.firstElementChild.innerText=modalFormEl.elements.courses.value;


    setTimeout(() => {
        avatarEl.classList.toggle("d-none")
        // modalFormEl.classList.toggle("d-none");
    }, 10000)
    avatarEl.classList.toggle("d-none")
    // modalFormEl.classList.toggle("d-none");

    let formArry = modalFormEl.children;

    for (let x of formArry) {

        if (x.firstElementChild.value !== "submit") {

            x.firstElementChild.value = "";
        }
    }


    enrollmentBtnEl.addEventListener("click", handlerSwitchEnrollmentButton)
    modalFormEl.classList.toggle("d-none");
    showCaseEl.classList.toggle("d-none");

})


// learn

let webDevelopmentEl = document.getElementById("webDevelopment");
let mobileDevelopmentEl = document.getElementById("mobileDevelopment");
let AIEl = document.getElementById("AI");
let dataScienceEl = document.getElementById("dataScience");

let Gvar = "webDevelopment"
setInterval((lvar = Gvar) => {

    if (lvar === "webDevelopment") {
        webDevelopmentEl.classList.toggle("d-none");
        webDevelopmentEl.firstElementChild.id = "";
        mobileDevelopmentEl.classList.toggle("d-none");
        mobileDevelopmentEl.firstElementChild.id = "learn"

        Gvar = "mobileDevelopment";

    } else if (lvar === "mobileDevelopment") {
        mobileDevelopmentEl.classList.toggle("d-none");
        mobileDevelopmentEl.firstElementChild.id = "";
        AIEl.classList.toggle("d-none");
        AIEl.firstElementChild.id = "learn"
        Gvar = "AI";

    } else if (lvar === "AI") {
        AIEl.classList.toggle("d-none");
        AIEl.firstElementChild.id = "";
        dataScienceEl.classList.toggle("d-none");
        dataScienceEl.firstElementChild.id = "learn"
        Gvar = "dataScience";
    } else if (lvar === "dataScience") {
        dataScienceEl.classList.toggle("d-none");
        dataScienceEl.firstElementChild.id = "";
        webDevelopmentEl.classList.toggle("d-none");
        webDevelopmentEl.firstElementChild.id = "learn";
        Gvar = "webDevelopment";
    }
}, 5000);