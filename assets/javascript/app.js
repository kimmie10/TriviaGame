/*create a trivia form with multiple choice or true/false options (your choice).

The player will have a limited amount of time to finish the quiz. 

The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

Don't let the player pick more than one answer per question.

Don't forget to include a countdown timer.*/
let timer = 0;
let correct = 0;
let incorrect = 0;
$("#btn").hide();
$(".questions").hide();
$("#cor").hide();
$("#inc").hide();
$("#start").on("click", function () {
  $(".questions").show();
  $("#btn").show();
  $("#start").hide();

  let myArray = [
    {
      question: "Who invented the rabies vaccination?",
      answers: [
        "Jean Baptiste Dumas",
        "Marie Curie",
        "Louis Pasteur",
        "Emile Duclaux"
      ],
      correctAnswer: "Louis Pasteur"
    },
    {
      question: "Which is an example of a lexicon?",
      answers: [
        "glossary",
        "dictionary",
        "jQuery",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
    {
      question: "Where would you find the Sea of Tranquility?",
      answers: [
        "Brazil",
        "The Moon",
        "Iraq",
        "Saturn"
      ],
      correctAnswer: "The Moon"
    },
    {
      question: "Name the seventh planet from the sun?",
      answers: [
        "Saturn",
        "Mars",
        "Juipter",
        "Uranus"
      ],
      correctAnswer: "Uranus"
    },
    {
      question: "What is the diameter of Earth?",
      answers: [
        " 12875 km",
        "1.2875e+7 meters",
        "8000 miles",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
    {
      question: "Where would you find the world's most ancient forest?",
      answers: [
        "Daintree Forest, Australia",
        "Yakushima Forest, Japan",
        "Tongass National Forest, Alaska",
        "Waipoua Forest, New Zealand"
      ],
      correctAnswer: "Daintree Forest, Australia"
    },
    {
      question: "Name the actress whose career began at the age of 3, and who went on the star in films such as Contact, Maverick, and The Silence of the Lambs?",
      answers: [
        "Jean De Baer",
        "Brooke Smith",
        "Angela Bassett",
        "Jodie Foster"
      ],
      correctAnswer: "Jodie Foster"
    },
    {
      question: "How many valves does a trumpet have?",
      answers: [
        "5",
        "3",
        "2",
        "4"
      ],
      correctAnswer: "3"
    },

  ]

  radioAnswer = myArray[1];
  //let random = Math.floor(Math.random() * myArray.length);

  console.log(myArray[1]);

  for (var i = 0; i < myArray.length; i++) {
    const questionNum = "question" + i;
    let userAnswer = $(`input[name='questionNum${i}']:checked`);
    console.log('QUESTION', i);
    console.log('USER ANSWER', userAnswer.val());
    let newDiv = `<div class="questionDiv" id="${i}">
                    ${myArray[i].question}
                    <div class="answers">
                    <form class = "triviaQuestion">
                    <input type="radio" name=${questionNum} value="${myArray[i].answers[0]}" class = "A">${myArray[i].answers[0]}
                    <input type="radio" name=${questionNum} value="${myArray[i].answers[1]}" class = "A">${myArray[i].answers[1]}
                    <input type="radio" name=${questionNum} value="${myArray[i].answers[2]}" class = "A">${myArray[i].answers[2]}
                    <input type="radio" name=${questionNum} value="${myArray[i].answers[3]}" class = "A">${myArray[i].answers[3]}
                    </form>
                  </div>`;

    $(".questions").append("<br>", newDiv);
  }

  const checkAnswer = function (questionNum, questions) {
    const questionAnswer = $(`input[name='question-${questionNumber}']:checked`).val()
    const correctAnswer = questions[questionNumber].correctAnswer

    return questionAnswer === correctAnswer
  }

  $("#btn").on("click", function () {
    //const userAnswer =  $("input[name='questionNum${i}']:checked")
    //const answer = correctAnswer.val();
    //console.log('', i);
    $("#btn").hide();
    $(".questions").hide();
    $("#cor").show();
    $("#inc").show();
  })
  //correctAnswer = myArray[i].correctAnswer
  //if (correctAnswer === userAnswer.val()) {
    // increment total correct answers variable
  //}

  /*if (myArray["answers"] === myArray["correctAnswer"]) {
    $("#right").html("<h3>" + correct + "</h3>");
    correct++;
  } else {
    $("#wrong").html("<h3>" + incorrect + "</h3>");
    wrong++;
  }*/

});



