const quizData = {
  questions: [
    // **Nhóm 1: Lựa chọn đúng/sai (10 câu)**
    {
      question: "Thủ đô của Việt Nam là Hà Nội.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Sông Nile là con sông dài nhất thế giới.",
      type: "boolean",
      correctAnswer: false,
    },
    // ... 8 câu tiếp theo
    {
      question: "Mặt Trời mọc ở phía Tây.",
      type: "boolean",
      correctAnswer: false,
    },
    {
      question: "Mặt Trăng không có ánh sáng riêng.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có hình cầu.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất quay quanh Mặt Trời.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có 2 cực.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có 4 mùa.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có 365 ngày.",
      type: "boolean",
      correctAnswer: false,
    },
    {
      question: "Trái Đất có 24 giờ.",
      type: "boolean",
      correctAnswer: true,
    },

    // **Nhóm 2: Chọn 1 trong 4 đáp án (10 câu)**
    {
      question: "Con vật nào sau đây không có xương sống?",
      type: "singleChoice",
      correctAnswer: "Sứa",
      answers: ["Cá", "Chó", "Sứa", "Thằn lằn"],
    },
    {
      question: "Màu nào sau đây không thuộc màu cơ bản?",
      type: "singleChoice",
      correctAnswer: "Cam",
      answers: ["Đỏ", "Xanh dương", "Vàng", "Cam"],
    },
    // ... 8 câu tiếp theo
    {
      question: "Trái cây nào sau đây không có hạt?",
      type: "singleChoice",
      correctAnswer: "Dưa hấu",
      answers: ["Dưa hấu", "Dâu tây", "Chuối", "Xoài"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },

    // **Nhóm 3: Chọn nhiều đáp án trong 4 lựa chọn (10 câu)**
    {
      question: "Những quốc gia nào sau đây thuộc Đông Nam Á?",
      type: "multipleChoice",
      correctAnswers: ["Việt Nam", "Thái Lan", "Indonesia", "Singapore"],
      answers: [
        "Việt Nam",
        "Trung Quốc",
        "Thái Lan",
        "Indonesia",
        "Singapore",
        "Nhật Bản",
      ],
    },
    {
      question: "Những loại trái cây nào sau đây có vị chua?",
      type: "multipleChoice",
      correctAnswers: ["Chanh", "Ổi", "Dâu tây", "Kiwi"],
      answers: ["Táo", "Cam", "Chanh", "Ổi", "Dâu tây", "Kiwi", "Bưởi"],
    },
    // ... 8 câu tiếp theo
    {
      question: "Những loại thức uống nào sau đây có cà phê?",
      type: "multipleChoice",
      correctAnswers: ["Cà phê sữa", "Cà phê đen", "Cà phê phin"],
      answers: [
        "Cà phê sữa",
        "Cà phê đen",
        "Cà phê phin",
        "Trà sữa",
        "Sinh tố",
        "Nước ép",
      ],
    },
    {
      question: "Ai là nhà văn nổi tiếng của Việt Nam?",
      type: "multipleChoice",
      correctAnswers: ["Nguyễn Du", "Nam Cao", "Tô Hoài", "Xuân Diệu"],
      answers: [
        "Nguyễn Du",
        "Nam Cao",
        "Tô Hoài",
        "Xuân Diệu",
        "Nguyễn Tuân",
        "Tố Hữu",
      ],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },

    // **Nhóm 4: Trả lời tự luận (10 câu)**
    {
      question: "Hãy nêu 3 nguyên nhân chính dẫn đến biến đổi khí hậu.",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    // ... 8 câu khác nhau tiếp theo
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", //
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", //
    },
  ],
};

// Get elements
const mainForm = document.getElementById("main-form");
const name = document.getElementById("name");
const dob = document.getElementById("dob");
const id = document.getElementById("id");
const address = document.getElementById("address");
const startSurveyBtn = document.getElementById("start-survey-btn");
const questionList = document.getElementById("question-list");

// Event listeners
startSurveyBtn.addEventListener("click", startSurvey);

// Functions
function startSurvey() {
  // Get user input
  const nameValue = name.value || "";
  const dobValue = dob.value || "";
  const idValue = id.value || "";
  const addressValue = address.value || "";

  // Validate user input
  if (
    nameValue === "" ||
    dobValue === "" ||
    idValue === "" ||
    addressValue === ""
  ) {
    alert("Please fill in all fields.");
  } else {
    // show all questions
    renderQuestions();
  }
}

// Render all questions from quizData
function renderQuestions() {
  let html = "";
  quizData.questions.forEach((question, index) => {
    html += `
      <div class="question p-2 px-4 border-2 my-4 rounded-md shadow-sm">
        <h3 class="text-lg font-bold">Câu hỏi ${index + 1}: ${
      question.question
    }</h3>
        <div class="answers">
          ${renderAnswers(question, index)}
        </div>
      </div>
    `;
  });

  html += `
    <button
      id="submit-survey-btn"
      type="submit"
      class="p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 my-2 mx-auto block"
    >
      Submit Survey
    </button>
  `;
  questionList.innerHTML = html;
}

// Render answers for each question
function renderAnswers(question, index) {
  let html = "";
  if (question.type === "boolean") {
    html += `
      <div>
        <input type="radio" id="true" name="question${index}" value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
        <label for="true">Đúng</label>
      </div>
      <div>
        <input type="radio" id="false" name="question${index}" value="false" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
        <label for="false">Sai</label>
      </div>
    `;
  } else if (question.type === "singleChoice") {
    question.answers.forEach((answer, index) => {
      html += `
        <div>
          <input type="radio" id="answer${index}" name="question${index}" value="${answer}" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
          <label for="answer${index}">${answer}</label>
        </div>
      `;
    });
  } else if (question.type === "multipleChoice") {
    question.answers.forEach((answer, index) => {
      html += `
        <div>
          <input type="checkbox" id="answer${index}" name="question${index}" value="${answer}" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2">
          <label for="answer${index}">${answer}</label>
        </div>
      `;
    });
  } else if (question.type === "essay") {
    html += `
      <div>
        <textarea id="essay" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 name="question${index}" rows="4" cols="50"></textarea>
      </div>
    `;
  }

  return html;
}

// Submit survey
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // store user answers of each question
  const userAnswers = [];
  quizData.questions.forEach((question, index) => {
    if (question.type === "boolean") {
      const answer =
        document.querySelector(`input[name="question${index}"]:checked`)
          ?.value || "";
      userAnswers.push(answer);
    } else if (question.type === "singleChoice") {
      const answer =
        document.querySelector(`input[name="question${index}"]:checked`)
          ?.value || "";
      userAnswers.push(answer);
    } else if (question.type === "multipleChoice") {
      const answers = Array.from(
        document.querySelectorAll(`input[name="question${index}"]:checked`)
      ).map((input) => input?.value || "");
      userAnswers.push(answers);
    } else if (question.type === "essay") {
      const answer =
        document.querySelector(`textarea[name="question${index}`)?.value || "";
      userAnswers.push(answer);
    }
  });

  // remove all questions and render all user answers
  questionList.innerHTML = "";
  renderUserAnswers(userAnswers);
});

// Render all user answers
function renderUserAnswers(userAnswers) {
  let html = "";
  questionList.innerHTML = "";
  console.log(questionList);
  userAnswers.forEach((answer, index) => {
    if (answer instanceof Array) {
      answer = answer.join(", ");
    }
    html += `
      <div class="user-answer p-2 px-4 border-2 my-4 rounded-md shadow-sm">
        <h3 class="text-lg font-bold">Câu hỏi ${index + 1}: ${
      quizData.questions[index].question
    }</h3>
        <p>${answer || "No answer"}</p>
      </div>
    `;
  });
  questionList.innerHTML = html;
}
1