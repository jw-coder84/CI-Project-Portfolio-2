

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();


})



let qA = [{
    question: 'Which film won all eleven oscars that it was nominated for?', 
    answers: { 
        a: 'Titanic', 
        b: 'Forrest Gump', 
        c: 'The Lord of the Rings: The Return of the King', 
        d: 'West Side Story (2021)'
    },
    correctAnswer: 'c'
},
{
    question: 'Which 2 James Bond films were directed by Martin Campbell?', 
    answers: { 
        a: 'GoldenEye and Casino Royale', 
        b: 'The World is Not Enough and Quantum of Solace', 
        c: 'The Living Daylights and Liscence to Kill', 
        d: 'Skyfall and Spectre'
    },
    correctAnswer: 'a'
},
{
    question: 'Which film did Dan Aykroyd star in and NOT co-write?',
    answers: {
        a: 'The Blues Brothers',
        b: 'Evolution',
        c: 'Ghostbusters',
        d: 'Ghostbusters 2'
    },
    correctAnswer: 'b'
},
{
    question: 'In The Terminator, who was originally cast to play the title character?',
    answers: {
        a: 'Lance Henriksen',
        b: 'Michael Biehn',
        c: 'Brian Thompson',
        d: 'Paul Winfield'
    },
    correctAnswer: 'a'
},
{
    question: 'In Back to the Future Part 2, which date in the past do Marty and doc Brown travel to?',
    answers: {
        a: 'September 2nd 1885',
        b: 'January 1st 1885',
        c: 'October 21st 1955',
        d: 'November 12th 1955'
    },
    correctAnswer: 'd'
},
{
    question: 'Which Mission Impossible film did J.J Abrams co-write and direct',
    answers: {
        a: 'I',
        b: 'II',
        c: 'III',
        d: 'IV'
    },
    correctAnswer: 'c'
},
{
    question: 'What was the release year of the first Jurassic Park film',
    answers: {
        a: '1991',
        b: '1992',
        c: '1993',
        d: '1994'
    },
    correctAnswer: 'c'
},
{
    question: 'Who played the title character in Tim Burton\'s Beetlejuice?',
    answers: {
        a: 'Johnny Depp',
        b: 'Christopher Walken',
        c: 'Danny DeVito',
        d: 'Michael Keaton'
    },
    correctAnswer: 'd'
},
{
    question: 'In Christopher Nolan\'s Batman Trilogy, which US city was used to represent Gotham?',
    answers: {
        a: 'Chicago',
        b: 'New York',
        c: 'Los Angeles',
        d: 'Detroit'
    },
    correctAnswer: 'a'
},
{
    question: 'How many Die Hard films were directed by John McTiernan?',
    answers: {
        a: '1',
        b: '2',
        c: '3',
        d: '4'
    },
    correctAnswer: 'b'
}];


function displayQuestion() {

    document.getElementById('question').innerText = qA[0].question;
    document.getElementById('a0').innerText = qA[0].answers.a;
    document.getElementById('a1').innerText = qA[0].answers.b;
    document.getElementById('a2').innerText = qA[0].answers.c;
    document.getElementById('a3').innerText = qA[0].answers.d;


}

document.getElementsByClassName('btn-nextq').addEventListener('click', function() {
    for (let i = 0; i <= qA.length; i ++) {
        document.getElementById('question').innerText = qA[i].question;
        document.getElementById('a0').innerText = qA[i].answers.a;
        document.getElementById('a1').innerText = qA[i].answers.b;
        document.getElementById('a2').innerText = qA[i].answers.c;
        document.getElementById('a3').innerText = qA[i].answers.d;
    }
})