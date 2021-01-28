let menuButton = document.getElementsByClassName("header__menu")[0];
let menu = document.getElementsByClassName("menu")[0];


/*MENU SCRIPT*/

let count = 1;

function mouseMenu() {
    if (count == 1) {
        $(".menu").addClass("active");
        $(".menu").removeClass("unactive");
        count--;
    } else if (count == 0) {
        $(".menu").addClass("unactive");
        $(".menu").removeClass("active");
        count++;
    }
}

function menuOff(event) {
    if (event.path[1] != menuButton) {
        $(".menu").addClass("unactive");
        $(".menu").removeClass("active");
        count = 1;
    }
}

menuButton.addEventListener("click", mouseMenu);
window.addEventListener("click", menuOff)


/*MENU ANCHORS*/

$(document).ready(function() {
    $("a[href^='#']").click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 120
        }, 700);
    });
});

// let anchors = document.querySelectorAll("a[href*='#']");

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function (e) {
//     event.preventDefault();
//     let blockID = anchor.getAttribute("href");
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'start'
//     })
//   })
// }



/*PARRALAX SCRIPT*/

let figure1 = document.getElementById("figure1"),
    figure2 = document.getElementById("figure2"),
    figure3 = document.getElementById("figure3"),
    figure4 = document.getElementById("figure4"),
    figure5 = document.getElementById("figure5"),
    figure6 = document.getElementById("figure6"),

    figure7 = document.getElementById("figure7"),
    figure8 = document.getElementById("figure8"),
    figure9 = document.getElementById("figure9"),
    figure10 = document.getElementById("figure10"),
    figure11 = document.getElementById("figure11"),

    figure12 = document.getElementById("figure12"),
    figure13 = document.getElementById("figure13"),
    figure14 = document.getElementById("figure14"),
    figure15 = document.getElementById("figure15"),
    figure16 = document.getElementById("figure16");

let move_dicider1 = figure1.getAttribute("data-value"),
    move_dicider2 = figure2.getAttribute("data-value"),
    move_dicider3 = figure3.getAttribute("data-value"),
    move_dicider4 = figure4.getAttribute("data-value"),
    move_dicider5 = figure5.getAttribute("data-value"),
    move_dicider6 = figure6.getAttribute("data-value"),

    move_dicider7 = figure7.getAttribute("data-value"),
    move_dicider8 = figure8.getAttribute("data-value"),
    move_dicider9 = figure9.getAttribute("data-value"),
    move_dicider10 = figure10.getAttribute("data-value"),
    move_dicider11 = figure11.getAttribute("data-value"),

    move_dicider12 = figure12.getAttribute("data-value"),
    move_dicider13 = figure13.getAttribute("data-value"),
    move_dicider14 = figure14.getAttribute("data-value"),
    move_dicider15 = figure15.getAttribute("data-value"),
    move_dicider16 = figure16.getAttribute("data-value");

function parralax(e) {
    let x = e.pageX / 200 - 5;
    let y = e.pageY / 200;

    if (y < 15) {
        figure1.style = "transform: translateX(" + x * move_dicider1 + "px) translateY(" + y * move_dicider1 + "px);"
        figure2.style = "transform: translateX(" + x * move_dicider2 + "px) translateY(" + y * move_dicider2 + "px);"
        figure3.style = "transform: translateX(" + x * move_dicider3 + "px) translateY(" + y * move_dicider3 + "px);"
        figure4.style = "transform: translateX(" + x * move_dicider4 + "px) translateY(" + y * move_dicider4 + "px);"
        figure5.style = "transform: translateX(" + x * move_dicider5 + "px) translateY(" + y * move_dicider5 + "px);"
        figure6.style = "transform: translateX(" + x * move_dicider6 + "px) translateY(" + y * move_dicider6 + "px);"
    }
    let ySecond = e.pageY / 200 - 10;
    let xSecond = e.pageX / 200 - 7;
    if (y < 25 && y > 3) {
        figure7.style = "transform: translateX(" + xSecond * move_dicider7 + "px) translateY(" + ySecond * move_dicider7 + "px);"
        figure8.style = "transform: translateX(" + xSecond * move_dicider8 + "px) translateY(" + ySecond * move_dicider8 + "px);"
        figure9.style = "transform: translateX(" + xSecond * move_dicider9 + "px) translateY(" + ySecond * move_dicider9 + "px);"
        figure10.style = "transform: translateX(" + xSecond * move_dicider10 + "px) translateY(" + ySecond * move_dicider10 + "px);"
        figure11.style = "transform: translateX(" + xSecond * move_dicider11 + "px) translateY(" + ySecond * move_dicider11 + "px);"
    }
    let yThird = e.pageY / 200 - 25;
    let xThird = e.pageX / 200 - 7;

    if (y > 15) {
        figure12.style = "transform: translateX(" + xSecond * move_dicider12 + "px) translateY(" + ySecond * move_dicider12 + "px);"
        figure13.style = "transform: translateX(" + xSecond * move_dicider13 + "px) translateY(" + ySecond * move_dicider13 + "px);"
        figure14.style = "transform: translateX(" + xSecond * move_dicider14 + "px) translateY(" + ySecond * move_dicider14 + "px);"
        figure15.style = "transform: translateX(" + xSecond * move_dicider15 + "px) translateY(" + ySecond * move_dicider15 + "px);"
        figure16.style = "transform: translateX(" + xSecond * move_dicider16 + "px) translateY(" + ySecond * move_dicider16 + "px);"
    }
}


document.addEventListener("mousemove", parralax);



// /*BUBBLES SCRIPT*/
let rowSize = 15;
let circleIndex;
let indexArray = [];

for (let k = 1; k <= rowSize; k++) {
    document.getElementById("plane").innerHTML += "<div class='structure__row p-0 mt-0 mb-0 structure__row" + k + "'></div>";
    for (let i = 1; i <= rowSize; i++) {
        circleIndex = Math.floor(Math.random() * 15 + 1);
        indexArray.push(circleIndex);
        document.getElementsByClassName("structure__row" + k)[0].innerHTML += "<div class='structure__circle circle" + circleIndex + "' data='closed'></div>";
    }
}

let mouseX = 0;
    mouseY = 0;

let translateX = -700,
    translateY = -700;

let mouseInd = 0;

let headingsList = {
    1: "Кулінарія",
    2: "Мистетцтво",
    3: "Будівництво",
    4: "Транспорт",
    5: "Управління",
    6: "Медицина",
    7: "Промисловість",
    8: "Фермерство",
    9: "Наука",
    10: "Фінанси",
    11: "Зв'язок",
    12: "Армія",
    13: "Туризм",
    14: "Спорт",
    15: "Торгівля"
};

function planeMoving (event) {
    if (mouseInd == 1) {
        nextMouseX = event.x;
        nextMouseY = event.y;
        if (nextMouseX > mouseX + 5) {
            translateX += 12;
        } else if (nextMouseX < mouseX - 5) {
            translateX -= 12;
        }

        if (nextMouseY > mouseY + 5) {
            translateY += 12;
        } else if (nextMouseY < mouseY -5) {
            translateY -= 12;
        }

        document.getElementById("plane").style = "transform: translate(" + translateX + "px, " + translateY + "px);";

        mouseX = nextMouseX;
        mouseY = nextMouseY;
    }
}

function planeDown () {
    mouseInd = 1;
}

function planeUp () {
    mouseInd = 0;
}

document.getElementById("plane").addEventListener("mousemove", planeMoving);
document.getElementById("plane").addEventListener("mousedown", planeDown);
window.addEventListener("mouseup", planeUp);


document.getElementsByClassName("structure__plane")[0].addEventListener("mousedown", onBubble);

let mouseCount = 0;
function onBubble(event) {
    for (let i = 0; i < 15 * 15; i++) {
        if (event.path[0] == document.getElementsByClassName("structure__circle")[i]) {
            if (document.getElementsByClassName("structure__circle")[i].getAttribute("data") === "closed") {
                for (let l = 0; l < 15 * 15; l++) {
                    console.log(l);
                    document.getElementsByClassName("structure__circle")[l].style = "transition: 1s;";
                    document.getElementsByClassName("structure__circle")[l].innerHTML = "";
                    document.getElementsByClassName("structure__circle")[l].setAttribute("data", "closed");
                }
                document.getElementsByClassName("structure__circle")[i].style = "transition: 1s; opacity: 0.8; animation: none; border-radius: 50%; transform: scaleX(3) scaleY(3); z-index: 50;";
                document.getElementsByClassName("structure__circle")[i].innerHTML = "<p class='circle__title'>" + headingsList[indexArray[i]] + "</p>";
                document.getElementsByClassName("structure__circle")[i].setAttribute("data", "open");
                number = i;       
            } else if (document.getElementsByClassName("structure__circle")[i].getAttribute("data") === "open") {
                document.getElementsByClassName("structure__circle")[i].style = "transition: 1s;";
                document.getElementsByClassName("structure__circle")[i].innerHTML = "";
                document.getElementsByClassName("structure__circle")[i].setAttribute("data", "closed");
            }
        }
    }
}

// function bubble (id) {
//   document.getElementById(id).style = "opacity: 0.65; animation: none; border-radius: 50%; transform: scaleX(3) scaleY(3); z-index: 50;"
// }
// function bubbleOut (id) {
//   document.getElementById(id).style = "";
// }






/*DIAGRAM*/

function diagram(e) {
    if (window.pageYOffset >= 1300) {
        $(".statistic__chart").addClass("active");
    }
}

window.addEventListener("scroll", diagram);



/*TIMELINE*/
/*TIMELINE*/
/*TIMELINE*/

let timeline = document.getElementsByClassName("timeline")[0];

function timelineFunc(e) {
    for (let i = 0; i <= 9; i++) {
        if (e.path[0] == document.getElementsByClassName("timeline__part")[i] || e.path[0] == document.getElementsByClassName("timeline__years")[i]) {
            document.getElementsByClassName("timeline__info")[i].style.display = "flex";
        }
    }
}

function timelineFuncOut(e) {
    for (let i = 0; i <= 9; i++) {
        if (e.path[0] == document.getElementsByClassName("timeline__part")[i] || e.path[0] == document.getElementsByClassName("timeline__years")[i]) {
            document.getElementsByClassName("timeline__info")[i].style.display = "none";
        }
    }
}

timeline.addEventListener("mouseover", timelineFunc);
timeline.addEventListener("mouseout", timelineFuncOut);







/*TEST*/
/*TEST*/
/*TEST*/



/*CHECKING*/
function selectOnlyThis(id) {

    for (let i = 1; i <= 3; i++) {
        console.log(id);
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThis2(id) {
    for (let i = 4; i <= 6; i++) {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

/*BUTTONS*/
let questionText1 = document.getElementById("question1"),
    questionText2 = document.getElementById("question2"),
    answerText1 = document.getElementById("answ1"),
    answerText2 = document.getElementById("answ2"),
    answerText3 = document.getElementById("answ3"),
    answerText4 = document.getElementById("answ4"),
    answerText5 = document.getElementById("answ5"),
    answerText6 = document.getElementById("answ6");



let buttonCount = -1;

let questions1 = ["1. Чи знайомі ви з терміном BackEnd?", "3. Чи притаманне вам логічне мислення?", "5. Чи є у вас досвід роботи у сфері програмування?", "7. Над чим працюють мови BackEnd`у?", "9. Чи готові ви до одноманітної роботи?", "11. Чи готові ви весь час навчатись?", "13. Чи подобається вам складна робота за комп'ютером?", "15. Ви творча особистість?"];
let questions2 = ["2. Чи любите ви працювати за комп'ютером?", "4. Ви любите розв'язувати складні задачі чи завдання?", "6. Яка з цих мов НЕ є мовою BackEnd'у?", "8. Наскільки ви терплячі?", "10. Ви стресостійкі?", "12. Ви вмієте добре працювати з людьми?", "14. Ви хотіли б створювати власні програми?", "16. Вам підходить робота, для якої сильна потрібна розумова діяльність?"];
let answers1 = ["Так", "Так", "Так", "Створення сайтів", "Так", "Звісно", "Так", "Так"];
let answers2 = ["Чув", "Не зовсім", "Пробував(-ла)", "Створення ПЗ", "Не дуже", "Якщо потрібно...", "Не дуже", "Не зовсім"];
let answers3 = ["Ні", "Ні", "Не знаю такого", "Створення презентацій", "Не люблю", "Ні", "Взагалі ні", "Зовсім ні"];
let answers4 = ["Звісно", "Так", "Java", "Дуже", "Так", "Вмію", "Звісно", "Ну так"];
let answers5 = ["Не дуже", "Не дуже", "JavaScript", "Частково", "Не дуже", "Не зовсім", "Не проти", "Не дуже"];
let answers6 = ["Не подобається", "Ні", "C#", "Не дуже", "Зовсім ні", "Взагалі не вмію", "Ні", "Ні"];

let check1 = document.getElementById("Check1");
let check2 = document.getElementById("Check2");
let check3 = document.getElementById("Check3");
let check4 = document.getElementById("Check4");
let check5 = document.getElementById("Check5");
let check6 = document.getElementById("Check6");

/*correct answers*/
let correctFirst,
    correctSecond;
let question1Best = [1, 1, 1, 2, 1, 1, 1, 1],
    question1Mid = [2, 2, 2, 0, 2, 2, 2, 2];
let question2Best = [1, 1, 2, 1, 1, 1, 1, 1],
    question2Mid = [2, 2, 0, 2, 2, 2, 2, 2];
//

/*Answers Massive*/
let userAnswerArray1 = [];
let userAnswerArray2 = [];

let marksArray = [];

let flaskNumber;




function nextClick() {
    /*NEXT TEST*/
    if ((check1.checked == true || check2.checked == true || check3.checked == true) && (check4.checked == true || check5.checked == true || check6.checked == true)) {
    buttonCount++;
    if (buttonCount > 7) {
        buttonCount = 7;
    }
    if (buttonCount === 7) {
        flaskNumber = 8;
        document.getElementById("test-check").style = "display: block;";
        document.getElementsByClassName("test__questions")[0].innerHTML = "<button id='test-check2' class='test__button-2'>Перевірити</button>";
        document.getElementById("test-check2").addEventListener("click", testCheck);
    }
    if (buttonCount <= 6) {
        questionText1.innerHTML = questions1[buttonCount + 1];
        questionText2.innerHTML = questions2[buttonCount + 1];
        answerText1.innerHTML = answers1[buttonCount + 1];
        answerText2.innerHTML = answers2[buttonCount + 1];
        answerText3.innerHTML = answers3[buttonCount + 1];
        answerText4.innerHTML = answers4[buttonCount + 1];
        answerText5.innerHTML = answers5[buttonCount + 1];
        answerText6.innerHTML = answers6[buttonCount + 1];
    }
    /*CHECKING ANSWER*/
    if (check1.checked == true) {
        userAnswerArray1[buttonCount] = 1;
    } else if (check2.checked == true) {
        userAnswerArray1[buttonCount] = 2;
    } else if (check3.checked == true) {
        userAnswerArray1[buttonCount] = 3;
    }
    if (check4.checked == true) {
        userAnswerArray2[buttonCount] = 1;
    } else if (check5.checked == true) {
        userAnswerArray2[buttonCount] = 2;
    } else if (check6.checked == true) {
        userAnswerArray2[buttonCount] = 3;
    }
    if (buttonCount < 7) { 
        for (let i = 1; i <= 6; i++) {
            document.getElementById("Check" + i).checked = false;
        }
        console.log(buttonCount);
        if (userAnswerArray1.length > buttonCount + 1) {
            document.getElementById("Check" + userAnswerArray1[buttonCount + 1]).checked = true;
            document.getElementById("Check" + (userAnswerArray2[buttonCount + 1] + 3)).checked = true;
        }
    }

    /*FLASK*/
    for (let k = 1; k <= 8; k++) {
        $(".liquid-" + k).addClass("liquid-unactive");
        $(".liquid-" + k).removeClass("liquid-active");
    }
    flaskNumber = buttonCount + 1;
    $(".liquid-" + flaskNumber).addClass("liquid-active");
    $(".liquid-" + flaskNumber).removeClass("liquid-unactive");
    if (flaskNumber === 7) {
        $(".liquid-rect1").addClass("liquid-active");
        $(".liquid-rect1").removeClass("liquid-unactive");
    }
    if (flaskNumber === 8) {
        $(".liquid-rect2").addClass("liquid-active");
        $(".liquid-rect2").removeClass("liquid-unactive");
    }

} else {
    alert("Заповніть усі поля!")
}
}


function prevClick() {
    /*PREV TEST*/
    buttonCount--;
    if (buttonCount < -1) {
        buttonCount = -1;
    }
    if (buttonCount >= -1) {
        questionText1.innerHTML = questions1[buttonCount + 1];
        questionText2.innerHTML = questions2[buttonCount + 1];
        answerText1.innerHTML = answers1[buttonCount + 1];
        answerText2.innerHTML = answers2[buttonCount + 1];
        answerText3.innerHTML = answers3[buttonCount + 1];
        answerText4.innerHTML = answers4[buttonCount + 1];
        answerText5.innerHTML = answers5[buttonCount + 1];
        answerText6.innerHTML = answers6[buttonCount + 1];
    }
    for (let i = 1; i <= 6; i++) {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById("Check" + userAnswerArray1[buttonCount + 1]).checked = true;
    document.getElementById("Check" + (userAnswerArray2[buttonCount + 1] + 3)).checked = true;

    /*FLASK*/
    for (let k = 1; k <= 8; k++) {
        $(".liquid-" + k).addClass("liquid-unactive");
        $(".liquid-" + k).removeClass("liquid-active");
    }
    flaskNumber = buttonCount + 1;
    $(".liquid-" + flaskNumber).addClass("liquid-active");
    $(".liquid-" + flaskNumber).removeClass("liquid-unactive");
    if (flaskNumber === 7) {
        $(".liquid-rect1").addClass("liquid-active");
        $(".liquid-rect1").removeClass("liquid-unactive");
    } else {
        $(".liquid-rect1").addClass("liquid-unactive");
        $(".liquid-rect1").removeClass("liquid-active");
    }
    if (flaskNumber === 8) {
        $(".liquid-rect2").addClass("liquid-active");
        $(".liquid-rect2").removeClass("liquid-unactive");
    } else {
        $(".liquid-rect2").addClass("liquid-unactive");
        $(".liquid-rect2").removeClass("liquid-active");
    }
}

let mark = 0;

function testCheck() {
    for (let i = 0; i < userAnswerArray1.length; i++) {
        if (userAnswerArray1[i] === question1Best[i]) {
            mark += 20;
        } else if (userAnswerArray1[i] === question1Mid[i]) {
            mark += 10;
        }

        if (userAnswerArray2[i] === question2Best[i]) {
            mark += 20;
        } else if (userAnswerArray2[i] === question2Mid[i]) {
            mark += 10;
        }
    }
    let answersForUser = ["<p class='test__conclusion'>Програмування - це не твоє...</p>", "<p class='test__conclusion'>Слід більше дізнатись про програмування!</p>", "<p class='test__conclusion'>У тебе дуже хороші зняння з програмування.</p>", "<p class='test__conclusion'>Ти вилитий програміст!</p>"];

    if (mark >= 0 && mark <= 80) {
        document.getElementsByClassName("test__questions")[0].innerHTML = answersForUser[0];
    } else if (mark > 80 && mark <= 160) {
        document.getElementsByClassName("test__questions")[0].innerHTML = answersForUser[1];
    } else if (mark > 160 && mark <= 240) {
        document.getElementsByClassName("test__questions")[0].innerHTML = answersForUser[2];
    } else if (mark > 240 && mark <= 320) {
        document.getElementsByClassName("test__questions")[0].innerHTML = answersForUser[3];
    }

    document.getElementsByClassName("test__questions")[0].innerHTML += "<p class='test__mark'>" + mark + "/320</p>";

}

document.getElementById("test-check").addEventListener("click", testCheck);