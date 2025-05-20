
    const Questions = [
      {
        question: "What is the capital of France?",
        answers: [
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false },
          { text: "Paris", correct: true },
          { text: "Rome", correct: false }
        ]
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Saturn", correct: false }
        ]
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
          { text: "Harper Lee", correct: true },
          { text: "Mark Twain", correct: false },
          { text: "Ernest Hemingway", correct: false },
          { text: "F. Scott Fitzgerald", correct: false }
        ]
      }
    ];

    const questionEl = document.getElementById("question");
    const answerBtns = document.querySelectorAll("#question-btn button:not(h1)");
    const nextBtn = document.getElementById("Next-btn");
    const scoreEl = document.getElementById("score");

    let questionIndex = 0;
    let score = 0;

    function showQuestion() {
      resetState();
      const currentQ = Questions[questionIndex];
      questionEl.textContent = currentQ.question;

      answerBtns.forEach((btn, index) => {
        btn.textContent = currentQ.answers[index].text;
        btn.onclick = () => selectAnswer(currentQ.answers[index], btn);
      });
    }

    function selectAnswer(answer, button) {
      const isCorrect = answer.correct;

      if (isCorrect) {
        button.classList.add("bg-green-500", "text-white");
        score++;
      } else {
        button.classList.add("bg-red-500", "text-white");
      }

      answerBtns.forEach(btn => btn.disabled = true);
      nextBtn.classList.remove("hidden");
    }

    function resetState() {
      answerBtns.forEach(btn => {
        btn.className = "border border-2 rounded-2xl border-blue-800 p-2 w-250px cursor-pointer hover:bg-blue-900 hover:text-white";
        btn.disabled = false;
      });
      nextBtn.classList.add("hidden");
    }

    nextBtn.addEventListener("click", () => {
      questionIndex++;
      if (questionIndex < Questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      questionEl.textContent = "Quiz Completed!";
      answerBtns.forEach(btn => btn.classList.add("hidden"));
      nextBtn.classList.add("hidden");
      scoreEl.innerHTML = `Your Score: ${score}/${Questions.length}`;
    }

    
    showQuestion();
  