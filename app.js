document.querySelector('.btn').addEventListener('click', function() {
    // Очистим все предыдущие подсветки
    document.querySelectorAll('ul.question').forEach(function(question) {
      question.querySelectorAll('li').forEach(function(li) {
        li.style.backgroundColor = '';
      });
    });
    
    // Заданные правильные ответы
    const correctAnswers = {
      bivak: 3,
      area: 1,
      fire: 1,
      rr: 2,
      text: ['закрытом', 'воды', 'закрытом'],
      wood: 3,
      's': 1,
      c: 2
    };

    // Проверка ответов
    Object.keys(correctAnswers).forEach(function(questionId) {
      const selectedAnswer = document.querySelector('input[name="' + questionId + '"]:checked');
      if (selectedAnswer) {
        const selectedAnswerIndex = Array.from(selectedAnswer.parentNode.parentNode.children).indexOf(selectedAnswer.parentNode);
        if (questionId === 'text') {
          const selectedOptions = Array.from(document.querySelectorAll('select[name="' + questionId + '"]')).map(option => option.value);
          if (JSON.stringify(selectedOptions) === JSON.stringify(correctAnswers[questionId])) {
            selectedAnswer.parentNode.style.backgroundColor = 'green'; // Правильный ответ
          } else {
            selectedAnswer.parentNode.style.backgroundColor = 'red'; // Неправильный ответ
          }
        } else if (Array.isArray(correctAnswers[questionId])) {
          const selectedOptions = Array.from(document.querySelectorAll('input[name="' + questionId + '"]:checked')).map(input => input.value);
          if (JSON.stringify(selectedOptions) === JSON.stringify(correctAnswers[questionId])) {
            selectedAnswer.parentNode.style.backgroundColor = 'green'; // Правильный ответ
          } else {
            selectedAnswer.parentNode.style.backgroundColor = 'red'; // Неправильный ответ
          }
        } else if (selectedAnswerIndex === correctAnswers[questionId] - 1) {
          selectedAnswer.parentNode.style.backgroundColor = 'green'; // Правильный ответ
        } else {
          selectedAnswer.parentNode.style.backgroundColor = 'red'; // Неправильный ответ
        }
      }
    });
  });


function checkAnswers() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;
    
    checkboxes.forEach(function(checkbox) {
      const isCorrect = checkbox.dataset.correct === "true";
      if (checkbox.checked) {
        checkedCount++;
        if (isCorrect) {
          checkbox.nextElementSibling.classList.remove('incorrect');
          checkbox.nextElementSibling.classList.add('correct');
        } else {
          checkbox.nextElementSibling.classList.remove('correct');
          checkbox.nextElementSibling.classList.add('incorrect');
        }
      } else {
        checkbox.nextElementSibling.classList.remove('correct', 'incorrect');
      }
    });

    if (checkedCount > 4) {
      alert("В 7-ом Вопросе можно выбрать не более четырех ответов!");
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        checkbox.nextElementSibling.classList.remove('correct', 'incorrect');
      });
    }


// ===================================

var selects = document.querySelectorAll('select[name="ff"]');
selects.forEach(function(select) {
  var selectedOption = select.options[select.selectedIndex].value;
  select.classList.remove('correct', 'incorrect'); // Reset classes
  
  if (select === document.getElementById('select1') && selectedOption === "открытом") {
    select.classList.add('correct');
  } else if (select === document.getElementById('select1')) {
    select.classList.add('incorrect');
  }
  
  if (select === document.getElementById('select2') && selectedOption === "воды") {
    select.classList.add('correct');
  } else if (select === document.getElementById('select2')) {
    select.classList.add('incorrect');
  }
  
  if (select === document.getElementById('select3') && selectedOption === "нельзя") {
    select.classList.add('correct');
  } else if (select === document.getElementById('select3')) {
    select.classList.add('incorrect');
  }
});
  }
