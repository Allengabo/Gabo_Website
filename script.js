//<!-- Pasion_Allen Gabrielle_S.              BSIT-3A-->

function checkAnswer() {
const userAnswer = document.getElementById("answer").value.trim();
const correctAnswer = "22";

if (userAnswer === correctAnswer) {
document.getElementById("feedback").innerHTML="✅ Correct! JavaScript treats 2 + '2' as string concatenation.";
} else {
document.getElementById("feedback").innerHTML = "❌ Incorrect. Try again!";
}
}
