function transitionToNextGame() {
    let game = document.querySelector(".game1");
    game.style.display = "none";

    let game2 = document.querySelector(".game2");
    game2.style.display = "block";
}

function transitionToNextGame2() {
    let game = document.querySelector(".game2");
    game.style.display = "none";

    let game2 = document.querySelector(".game3");
    game2.style.display = "block";
}

function transitionToNextGame3() {
    let game = document.querySelector(".game3");
    game.style.display = "none";

    let game2 = document.querySelector(".game4");
    game2.style.display = "block";
}

function transitionToNextGame4() {
    let game = document.querySelector(".game4");
    game.style.display = "none";

    let game2 = document.querySelector(".game5");
    game2.style.display = "block";
}

function transitionToNextGame5() {
    let game = document.querySelector(".game5");
    game.style.display = "none";

    let game2 = document.querySelector(".game6");
    game2.style.display = "block";
}

function transitionToNextGame6() {
    let game = document.querySelector(".game6");
    game.style.display = "none";

    let game2 = document.querySelector(".game7");
    game2.style.display = "block";
}

function transitionToNextGame7() {
    let game = document.querySelector(".game7");
    game.style.display = "none";

    let game2 = document.querySelector(".game8");
    game2.style.display = "block";
}

function transitionToNextGame8() {
    let game = document.querySelector(".game8");
    game.style.display = "none";

    let game2 = document.querySelector(".game9");
    game2.style.display = "block";
}

function transitionToNextGame9() {
    let game = document.querySelector(".game9");
    game.style.display = "none";

    let game2 = document.querySelector(".game10");
    game2.style.display = "block";
}

function Result() {
    let game = document.querySelector(".game10");
    game.style.display = "none";

    let result = document.querySelector(".result");
    result.style.display = "block";

    let finalpoints = points;

    let one = document.querySelector(".val");
    let two = document.querySelector(".totalpoints");
    let body = document.getElementById("bodyy");


    if(finalpoints >= 9){
        setTimeout(()=>{
            one.textContent = "Congratulations! You Won";
            two.innerHTML = "Your Total Points: " + finalpoints + "/10";
            body.style.background = "blue";
        }, 500);
    }
    else{
        setTimeout(()=>{
            one.textContent = "YOU LOSS";
            two.innerHTML = "Your Total Points: " + finalpoints + "/10";
            body.style.background = "red";
        }, 800);
    }
}


let start = document.getElementById("button1");

start.addEventListener("click", ()=>{
    let main = document.querySelector(".maincontainer");
    main.style.display = "none";

    let game = document.querySelector(".game1");
    game.style.display ="block";
})

let about = document.getElementById("button2");

about.addEventListener("click", ()=>{
    let main = document.querySelector(".maincontainer");
    main.style.display = "none";

    let about = document.querySelector(".aboutsec");
    about.style.display = "block";
})

let backtomain = document.getElementById("backtomain");

backtomain.addEventListener("click", ()=>{
    let about = document.querySelector(".aboutsec");
    about.style.display = "none";

    let main = document.querySelector(".maincontainer");
    main.style.display = "block";
})

// game

let opt1 = document.getElementById("q1opt1");
let opt2 = document.getElementById("q1opt2");
let opt3 = document.getElementById("q1opt3");
let opt4 = document.getElementById("q1opt4");
let points = 0;

opt1.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame()
})

opt2.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame()
})

opt3.addEventListener("click", ()=>{
     points += 0; 
     transitionToNextGame()
})

opt4.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame()
})

//Question 2 Settings

let opt5 = document.getElementById("q2opt1");
let opt6 = document.getElementById("q2opt2");
let opt7 = document.getElementById("q2opt3");
let opt8 = document.getElementById("q2opt4");

opt5.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame2()
})

opt6.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame2()
})

opt7.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame2()
})

opt8.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame2()
})

//Question 3 Settings

let opt9 = document.getElementById("q3opt1");
let opt10 = document.getElementById("q3opt2");
let opt11 = document.getElementById("q3opt3");
let opt12 = document.getElementById("q3opt4");

opt9.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame3()
})

opt10.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame3()
})

opt11.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame3()
})

opt12.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame3()
})

// Question 4 Settings

let opt13 = document.getElementById("q4opt1");
let opt14 = document.getElementById("q4opt2");
let opt15 = document.getElementById("q4opt3");
let opt16 = document.getElementById("q4opt4");

opt13.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame4()
})

opt14.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame4()
})

opt15.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame4()
})

opt16.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame4()
})

// Question 5 Settings

let opt17 = document.getElementById("q5opt1");
let opt18 = document.getElementById("q5opt2");
let opt19 = document.getElementById("q5opt3");
let opt20 = document.getElementById("q5opt4");

opt17.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame5()
})

opt18.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame5()
})

opt19.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame5()
})

opt20.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame5()
})

//Question 6 Settings

let opt21 = document.getElementById("q6opt1");
let opt22 = document.getElementById("q6opt2");
let opt23 = document.getElementById("q6opt3");
let opt24 = document.getElementById("q6opt4");

opt21.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame6()
})

opt22.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame6()
})

opt23.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame6()
})

opt24.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame6()
})

//Question 7 Settings

let opt25 = document.getElementById("q7opt1");
let opt26 = document.getElementById("q7opt2");
let opt27 = document.getElementById("q7opt3");
let opt28 = document.getElementById("q7opt4");

opt25.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame7()
})

opt26.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame7()
})

opt27.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame7()
})

opt28.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame7()
})

//Question 8

let opt29 = document.getElementById("q8opt1");
let opt30 = document.getElementById("q8opt2");
let opt31 = document.getElementById("q8opt3");
let opt32 = document.getElementById("q8opt4");

opt29.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame8()
})

opt30.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame8()
})

opt31.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame8()
})

opt32.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame8()
})

//Question 9

let opt33 = document.getElementById("q9opt1");
let opt34 = document.getElementById("q9opt2");
let opt35 = document.getElementById("q9opt3");
let opt36 = document.getElementById("q9opt4");

opt33.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame9()
})

opt34.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame9()
})

opt35.addEventListener("click", ()=>{
    points += 0;
    transitionToNextGame9()
})

opt36.addEventListener("click", ()=>{
    points += 1;
    transitionToNextGame9()
})

//Question 10 Settings

let opt37 = document.getElementById("q10opt1");
let opt38 = document.getElementById("q10opt2");
let opt39 = document.getElementById("q10opt3");
let opt40 = document.getElementById("q10opt4");

opt37.addEventListener("click", ()=>{
    points += 0;
    Result();
})

opt38.addEventListener("click", ()=>{
    points += 0;
    Result();
})

opt39.addEventListener("click", ()=>{
    points += 1;
    Result();
})

opt40.addEventListener("click", ()=>{
    points += 0;
    Result();
})