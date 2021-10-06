var readlineSync = require("readline-sync");

function start_game() {
    var username = readlineSync.question("What is your name: ");
    console.log("WELCOME " + username + " to HARRY POTTER quiz!!!!");
    console.log("Test your knowledge about Harry Potter");
    console.log("");
    game(username);
}

var score = 0;

var questions = [{
    question: "1. How many Horcruxes of Voldemort's are there?",
    options: {
        a: "1",
        b: "9",
        c: "7",
        d: "5"
    },
    answer: "c"},

    {question: "2. Did Harry put his name into the Goblet of Fire?",
    options: {
        a: "True",
        b: "False"
    },
    answer: "b"},

    {question: "3. What do Hermione's parents do for a living?",
    options: {
        a: "Veterinarians",
        b: "Dentists",
        c: "Pediatricians",
        d: "Bankers"
    },
    answer: "b"},

    {question: "4. How many Unforgivable curses are there?",
    options: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
    },
    answer: "c"},

    {question: "5. Who does Hermione go to the Yule Ball with in Harry Potter and the Goblet of Fire?",
    options: {
        a: "Ron",
        b: "Viktor Krum",
        c: "Cedric Diggory",
        d: "Neville Longbottom"
    },
    answer: "b"},

    {question: "6. How does Sirius die in Harry Potter and the Order of the Phoenix?",
    options: {
        a: "Bellatrix LeStrange kills him.",
        b: "Voldemort kills him.",
        c: " Harry accidentally kills him.",
        d: "Dies naturally."
    },
    answer: "a"},

    {question: "7. What's Voldemort's real name?",
    options: {
        a: "Severus",
        b: "Tom",
        c: "James",
        d: "Remus"
    },
    answer: "b"},

    {question: "8. Where does the name Minerva come from?",
    options: {
        a: "Ancient Rome",
        b: "Greece",
        c: "Egypt",
        d: "A French food"
    },
    answer: "a"},

    {question: "9. Who composed the music for the Harry Potter movies?",
    options: {
        a: "John Williams",
        b: "Oliver Phelps",
        c: "Robbie Coltrane",
        d: "Josh Groban"
    },
    answer: "a"},

    {question: "10. How does Dumbledore die?",
    options: {
        a: "Malfoy kills him",
        b: "Snape kills him",
        c: "Dies by accident",
        d: "Heart attack"
    },
    answer: "b"},
];

function play(question, options, answer){
    console.log(question);
    for(const key in options){
        console.log(`${key}: ${options[key]}`);
    }

    var userAnswer = readlineSync.question("Choose your option: ");

    if(userAnswer.toLowerCase() === answer.toLowerCase()){
        console.log("YAYY!!Right answer");
        console.log("------------------------------");
        score = score+1;
    }
    else{
        console.log("OOPS!!Wrong answer");
        console.log(`Right option is: ${answer}`);
        console.log("------------------------------");
    }
}

function showScore(){
    console.log("***************************************");
    console.log("CONGRATULATIONS!!!")
    console.log("You scored " + score + " OUT OF " + questions.length + ".");
} 

function game(username){
    for(var i=0; i<questions.length; i++){
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
    }

    showScore();
}

start_game();