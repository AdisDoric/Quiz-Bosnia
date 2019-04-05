function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        var options = quiz.getQuestionIndex().options;
        for(var i = 0; i < options.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = options[i];
            guess("btn" + i, options[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

// Question number
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
// Score
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

 // Questions
var questions = [
  new Question('What are the  colours of the Bosnia and Herzegovina flag???', ["White, Blue, Yellow", "Yellow, Blue", "Blue, Yellow, Orange", "Yellow, White, Orange"], "White, Blue, Yellow"),
  new Question('Trams were first regularly used in Europe in Sarajevo, starting in ???', ["1880", "1885", "1900", "1902"], "1885"),
  new Question('What is the nickname of Bosnia and Herzegovina???', ["The romance of Europe", "The heart of Europe", "The child of Europe","None of them"], "The heart of Europe"),
  new Question('In which year Sarajevo, the current capital city of Bosnia and Herzegovina, hosted Winter Olympics???', ["1990", "1986", "1984", "1988"], "1984"),
  new Question('The currency of Bosnia and Herzegovina is the ???', ["Euro", "Kuna", "Dinar", "Marka"], "Marka"),
  new Question('How many citizens lives in Bosnia???', ["3,500 000", "4,000 000", "2,000 000", "2,500 000"], "3,500 000"),
  new Question('The name “Bosnia” comes from an Indo-European word Bosana, which means ???', ["Fire", "Nature", "Water", "Flower"], "Water"),
  new Question('How many presidents Bosnia and Herzegovina has ???', ["1", "2", "4", "3"], "3"),
  new Question('Bosnia and Herzegovina has the last remaining jungle in Europe which is called ???', ["Majevica", "Perućica", "Jablanica", "Jahorina"], "Perućica"),
  new Question('National Symbol is ???', ["Star", "Eagle", "Golden lily", "Moon"], "Golden lily"),
];


var quiz = new Quiz(questions);


populate();
