// ===============================
// PUZZLE QUEST - SCRIPT.JS
// ===============================

// Reset score if it doesn't exist
if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", 0);
}

// Function to check puzzle answer
function checkAnswer(correctAnswer, nextPage) {

    let input = document.getElementById("answer").value.trim().toLowerCase();
    let correct = correctAnswer.toLowerCase();

    let message = document.getElementById("message");

    if (input === correct) {

        let score = Number(localStorage.getItem("score"));
        score++;
        localStorage.setItem("score", score);

        message.className = "success";
        message.innerHTML = "✅ Correct Answer!";

        setTimeout(function () {
            window.location.href = nextPage;
        }, 1000);

    } else {

        message.className = "error";
        message.innerHTML = "❌ Wrong Answer. Try Again!";
    }
}


// Allow Enter key to submit answer
document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("answer");

    if (input) {

        input.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                let button = document.querySelector("button");

                if (button) {
                    button.click();
                }

            }

        });

    }

});


// Display score on score.html
function displayScore() {

    let score = Number(localStorage.getItem("score"));

    let scoreBox = document.getElementById("finalScore");

    let remark = document.getElementById("remark");

    if (!scoreBox || !remark) return;

    scoreBox.innerHTML = score + " / 4";

    if (score == 4) {

        remark.innerHTML = "🏆 Excellent! Perfect Score!";

    }
    else if (score == 3) {

        remark.innerHTML = "🎉 Great Job!";

    }
    else if (score == 2) {

        remark.innerHTML = "🙂 Good Try!";

    }
    else if (score == 1) {

        remark.innerHTML = "👍 Keep Practicing!";

    }
    else {

        remark.innerHTML = "💡 Better Luck Next Time!";

    }

}


// Restart Game
function restartGame() {

    localStorage.setItem("score", 0);

    window.location.href = "index.html";

}
