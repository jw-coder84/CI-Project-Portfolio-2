
document.addEventListener("DOMContentLoaded", function () {
   // console.log(document.getElementById('question') + 'first');
    
})



const qA = [{
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
    question: 'Which Mission Impossible film did J.J Abrams co-write and direct',
    answers: [
        { a: 'I', correct: false },
        { b: 'II', correct: false },
        { c: 'III', correct: true },
        { d: 'IV', correct: false }
    ]
},
{
    id: 6,
    question: 'What was the release year of the first Jurassic Park film',
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

var start = true;
let id = 0;

function run(id) {
    
    var flag = document.getElementsByClassName("flag");
    flag[0].innerText = "";
    
    const questions = document.getElementById('question');
    console.log(qA[id].question);
    questions.textContent = qA[id].question;

    const a0 = document.getElementById('a0');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');



    a0.innerText = qA[id].answers[0].a;
    a1.innerText = qA[id].answers[1].b;
    a2.innerText = qA[id].answers[2].c;
    a3.innerText = qA[id].answers[3].d;



    a0.value = qA[id].answers[0].isCorrect;
    a1.value = qA[id].answers[1].isCorrect;
    a2.value = qA[id].answers[2].isCorrect;
    a3.value = qA[id].answers[3].isCorrect;


    var selected = '';

    a0.addEventListener("click", function() {
        a0.style.backgroundColor = "lightgoldenrodyellow";
        a1.style.backgroundColor = "lightskyblue";
        a2.style.backgroundColor = "lightskyblue";
        a3.style.backgroundColor = "lightskyblue";
        selected = a0.value;
    })

    a1.addEventListener("click", function() {
        a0.style.backgroundColor = "lightskyblue";
        a1.style.backgroundColor = "lightgoldenrodyellow";
        a2.style.backgroundColor = "lightskyblue";
        a3.style.backgroundColor = "lightskyblue";
        selected = a1.value;
    })

    a2.addEventListener("click", function() {
        a0.style.backgroundColor = "lightskyblue";
        a1.style.backgroundColor = "lightskyblue";
        a2.style.backgroundColor = "lightgoldenrodyellow";
        a3.style.backgroundColor = "lightskyblue";
        selected = a2.value;
    })

    a3.addEventListener("click", function() {
        a0.style.backgroundColor = "lightskyblue";
        a1.style.backgroundColor = "lightskyblue";
        a2.style.backgroundColor = "lightskyblue";
        a3.style.backgroundColor = "lightgoldenrodyellow";
        selected = a3.value;
    })


    const answer = document.getElementsByClassName('btn-answer');

    answer[0].addEventListener("click", function() {

        if (selected == true) {
            flag[0].innerHTML = "True";
            flag[0].style.color = "green";
        } else {
            flag[0].innerHTML = "False";
            flag[0].style.color = "red";
        }

    })

}


if (start) {
    run("0");
}

const next = document.getElementsByClassName('next')[0];

  
next.addEventListener("click", function() {
    start = false;
    if (id < 9) {
        id++;
        run(id);
        console.log(id);
    }
  
})