

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();


})


function displayQuestion() {
    let qA = {question: 'Which film won all 11 oscars that it was nominated for?', answers: ['Titanic', 'Forrest Gump', 'The Lord of the Rings: The Return of the King', 'West Side Story (2021)'],
            question2: 'Which 2 James Bond films were directed by Martin Campbell?', answers2: ['GoldenEye and Casino Royale', 'The World is Not Enough and Quantum of Solace', 'The Living Daylights and Liscence to Kill', 'Skyfall and Spectre'],
            };



    document.getElementById('question').innerText = qA.question;
    document.getElementById('a0').innerText = qA.answers[0];
    document.getElementById('a1').innerText = qA.answers[1];
    document.getElementById('a2').innerText = qA.answers[2];
    document.getElementById('a3').innerText = qA.answers[3];
    
    document.getElementsByClassName('btn-nextq').addEventListener('click', function() {
        document.getElementById('question').innerText = qA.question2;
        document.getElementById('a0').innerText = qA.answers2[0];
        document.getElementById('a1').innerText = qA.answers2[1];
        document.getElementById('a2').innerText = qA.answers2[2];
        document.getElementById('a3').innerText = qA.answers2[3];

    })



}
