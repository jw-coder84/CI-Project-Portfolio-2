

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();


})


function displayQuestion() {
    let Question1 = {'Which film won all 11 oscars that it was nominated for?': ['Titanic', 'Forrest Gump', 'The Lord of the Rings: The Return of the King', 'West Side Story (2021)']};


    document.getElementById('question').innerText = Object.keys(Question1);
    document.getElementById('a1').innerText = Object.values(Question1[0]);
    document.getElementById('a2').innerText = Object.values(Question1[1]);
    


}