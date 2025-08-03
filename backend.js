const feedbacks = [];

function addFeedback(text) {
  feedbacks.push(text);
  displayFeedbacks();
}

function displayFeedbacks() {
  const list = document.getElementById("feedbackList");
  list.innerHTML = "";

  feedbacks.forEach((feedback, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${feedback}`;
    list.appendChild(li);
  });
}

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("feedbackInput");
  const text = input.value.trim();
  if (text) {
    addFeedback(text);
    input.value = "";
  }
});
