

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();


})



let qA = [{
    question: 'Which film won all 11 oscars that it was nominated for?', 
    answerOne: 'Titanic', 
    answerTwo: 'Forrest Gump', 
    rightAnswer: 'The Lord of the Rings: The Return of the King', 
    answerThree: 'West Side Story (2021)'},
{
    question: 'Which 2 James Bond films were directed by Martin Campbell?', 
    rightAnswer: 'GoldenEye and Casino Royale', 
    answerOne: 'The World is Not Enough and Quantum of Solace', 
    answerTwo: 'The Living Daylights and Liscence to Kill', 
    answerThree: 'Skyfall and Spectre',
}];


function displayQuestion() {

    document.getElementById('question').innerText = qA[0].question;
    document.getElementById('a0').innerText = qA[0].answerOne;
    document.getElementById('a1').innerText = qA[0].answerTwo;
    document.getElementById('a2').innerText = qA[0].rightAnswer;
    document.getElementById('a3').innerText = qA[0].answerThree;


}
