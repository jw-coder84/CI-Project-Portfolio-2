//varirable to pass to the run function.
let id = 0;

//Execute the run function once the DOM content has been loaded.
document.addEventListener('DOMContentLoaded', function () {
    run(id);
});

// Question and answer variable. Array of objects with nested array and objects for the answers.
let qA = [{
    id: 0,
    question: 'Which film won all eleven oscars that it was nominated for?', 
    answers: [
        { a: 'Titanic', correct: false },
        { b: 'Forrest Gump', correct: false },
        { c: 'The Lord of the Rings: The Return of the King', correct: true },
        { d: 'West Side Story (2021)', correct: false }
    ]   
},
{
    id: 1,
    question: 'Which 2 James Bond films were directed by Martin Campbell?', 
    answers: [
        { a: 'GoldenEye and Casino Royale', correct: true },
        { b: 'The World is Not Enough and Quantum of Solace', correct: false },
        { c: 'The Living Daylights and Liscence to Kill', correct: false },
        { d: 'Skyfall and Spectre', correct: false }
    ]
},
{
    id: 2,
    question: 'Which film did Dan Aykroyd star in and NOT co-write?',
    answers: [
        { a: 'The Blues Brothers', correct: false },
        { b: 'Evolution', correct: true },
        { c: 'Ghostbusters', correct: false },
        { d: 'Ghostbusters 2', correct: false }
    ]
     
},
{
    id: 3,
    question: 'In The Terminator, who was originally cast to play the title character?',
    answers: [
        { a: 'Lance Henriksen', correct: true },
        { b: 'Michael Biehn', correct: false },
        { c: 'Brian Thompson', correct: false },
        { d: 'Paul Winfield', correct: false }
    ]
},
{
    id: 4,
    question: 'In Back to the Future Part 2, which date in the past do Marty and doc Brown travel to?',
    answers: [
        { a: 'September 2nd 1885', correct: false },
        { b: 'January 1st 1885', correct: false },
        { c: 'October 21st 1955', correct: false },
        { d: 'November 12th 1955', correct: true }
    ]
},
{
    id: 5,
    question: 'Which Mission Impossible film did J.J Abrams co-write and direct?',
    answers: [
        { a: 'MI: I', correct: false },
        { b: 'MI: II', correct: false },
        { c: 'MI: III', correct: true },
        { d: 'MI: IV', correct: false }
    ]
},
{
    id: 6,
    question: 'What was the release year of the first Jurassic Park film?',
    answers: [
        { a: '1991', correct: false },
        { b: '1992', correct: false },
        { c: '1993', correct: true },
        { d: '1994', correct: false }
    ]
},
{
    id: 7,
    question: 'Who played the title character in Tim Burton\'s Beetlejuice?',
    answers: [
        { a: 'Johnny Depp', correct: false },
        { b: 'Christopher Walken', correct: false },
        { c: 'Danny DeVito', correct: false },
        { d: 'Michael Keaton', correct: true }
    ]
},
{
    id: 8,
    question: 'In Christopher Nolan\'s Batman Trilogy, which US city was used to represent Gotham?',
    answers: [
        { a: 'Chicago', correct: true },
        { b: 'New York', correct: false },
        { c: 'Los Angeles', correct: false },
        { d: 'Detroit', correct: false }
    ]
},
{
    id: 9,
    question: 'How many Die Hard films were directed by John McTiernan?',
    answers: [
        { a: '1', correct: false },
        { b: '2', correct: true },
        { c: '3', correct: false },
        { d: '4', correct: false }
    ]
}];
 

/**
 * The main function that displays the questions and answers.
 * Each answer is processed and the score is incremented if the answer
 * is correct.
 */
function run(id) {


    let flag = document.getElementsByClassName('flag');
    flag[0].innerText = "";
     
    const questions = document.getElementById('question');
    //Display questions from the Q and A variable.
    questions.textContent = qA[id].question;
    next.disabled = true;
    const a0 = document.getElementById('a0');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');

    //Display the answers from the Q and A variable.
    a0.innerText = qA[id].answers[0].a;
    a1.innerText = qA[id].answers[1].b;
    a2.innerText = qA[id].answers[2].c;
    a3.innerText = qA[id].answers[3].d;
    //Variables for correct answers.
    a0.value = qA[id].answers[0].correct;
    a1.value = qA[id].answers[1].correct;
    a2.value = qA[id].answers[2].correct;
    a3.value = qA[id].answers[3].correct;
    //Set the default colours of the answer buttons.
    a0.style.backgroundColor = "black";
    a1.style.backgroundColor = "black";
    a2.style.backgroundColor = "black";
    a3.style.backgroundColor = "black";
    a0.style.color = "white";
    a1.style.color = "white";
    a2.style.color = "white";
    a3.style.color = "white";
 
    let selected;
    //When answer is clicked, change colour and disable other answers.
    a0.addEventListener("click", function() {
        a0.style.backgroundColor = "#e68a00";
        a1.style.backgroundColor = "black";
        a2.style.backgroundColor = "black";
        a3.style.backgroundColor = "black";
        selected = a0.value;
        a1.disabled = true;
        a2.disabled = true;
        a3.disabled = true;
    });
 
    a1.addEventListener("click", function() {
        a0.style.backgroundColor = "black";
        a1.style.backgroundColor = "#e68a00";
        a2.style.backgroundColor = "black";
        a3.style.backgroundColor = "black";
        selected = a1.value;
        a0.disabled = true;
        a2.disabled = true;
        a3.disabled = true;
    });
 
    a2.addEventListener("click", function() {
        a0.style.backgroundColor = "black";
        a1.style.backgroundColor = "black";
        a2.style.backgroundColor = "#e68a00";
        a3.style.backgroundColor = "black";
        selected = a2.value;
        a0.disabled = true;
        a1.disabled = true;
        a3.disabled = true;
    });
 
    a3.addEventListener("click", function() {
        a0.style.backgroundColor = "black";
        a1.style.backgroundColor = "black";
        a2.style.backgroundColor = "black";
        a3.style.backgroundColor = "#e68a00";
        selected = a3.value;
        a0.disabled = true;
        a1.disabled = true;
        a2.disabled = true;
    });
    //Display the flag message and increment score depending on if the answer is right or wrong.
    //Enable next button once an answer has been selected.
    const answer = document.getElementsByClassName('btn-answer');
    answer[0].addEventListener("click", function() {
        next.disabled = false;
        if (selected == "true") {
            flag[0].innerHTML = "Correct!";
            flag[0].style.color = "#99ff33";
            add_score();
        } else {
            flag[0].innerHTML = "Wrong";
            flag[0].style.color = "red";
        }
        
    });

}

/**
 * This function incremenets the score and is called if a correct answer is 
 * selected.
 */
function add_score() {
    
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    
}

const next = document.getElementsByClassName('next')[0];
/**
 * The event listener re-enables the answers for selection once the next 
 * question is displayed. The answer button colours are also reset.
 */
next.addEventListener("click", function() {
    let a0 = document.getElementById('a0');
    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');

    a0.disabled = false;
    a1.disabled = false;
    a2.disabled = false;
    a3.disabled = false;
    //Increments the id to cycle through the questions until the max id is reached.
    if (id < 9) {
        id++;
        run(id);
        console.log(id);
    } 
    //On the last question the 'next' button will show 'Finish' instead.
    if (id > 8) {
        next.innerHTML = `Finish <i class="fa-solid fa-stop"></i>`;
    }
    //On the last question the finish button will link back to the landing page.
    if (id == 9) {
        next.outerHTML = `<button class="next" onclick="window.location.href='index.html';">Finish <i class="fa-solid fa-stop"></i></button>`;
    }
 });