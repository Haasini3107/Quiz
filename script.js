   const questions = [
    {
        question: "1. Which keyword is used to create a class in Java?",
        options: ["function", "class", "define", "create"],
        answer: 1
    },
    {
        question: "2. Which method is the starting point of a Java program?",
        options: ["start()", "run()", "main()", "execute()"],
        answer: 2
    },
    {
        question: "3. Which keyword is used to create an object?",
        options: ["object", "create", "new", "class"],
        answer: 2
    },
    {
        question: "4. Which data type is used to store whole numbers?",
        options: ["float", "String", "boolean", "int"],
        answer: 3
    },
    {
        question: "5. Which symbol is used to end a statement in Java?",
        options: [".", ";", ":", ","],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    loadQuestion();
}

function loadQuestion() {
    selectedAnswer = null;

    const current = questions[currentQuestion];

    document.getElementById("question").textContent = current.question;

    const options = document.getElementById("options");
    options.innerHTML = "";

    current.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = (index + 1) + ". " + option;

        button.className = "option";

        button.onclick = function() {
            selectAnswer(index, button);
        };

        options.appendChild(button);
    });

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextBtn").textContent = "Finish Quiz";
    } else {
        document.getElementById("nextBtn").textContent = "Next";
    }
}

function selectAnswer(index, button) {
    selectedAnswer = index;

    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(function(option) {
        option.classList.remove("selected");
    });

    button.classList.add("selected");
}

function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    const percentage = (score / questions.length) * 100;

    document.getElementById("score").textContent =
        "Score: " + score + "/" + questions.length;

    document.getElementById("percentage").textContent =
        "Percentage: " + percentage + "%";

    if (score === 5) {
        document.getElementById("message").textContent = "Excellent!";
    } else if (score >= 3) {
        document.getElementById("message").textContent = "Good job!";
    } else {
        document.getElementById("message").textContent = "Keep practicing!";
    }
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("result").style.display = "none";
    document.getElementById("startPage").style.display = "block";
}
