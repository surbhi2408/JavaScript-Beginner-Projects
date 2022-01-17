const quizData = [
    {
        question: 'What is the capital of Nepal?',
        a: 'Birgunj',
        b: 'Kathmandu',
        c: 'Pokhara',
        d: 'Bhaktapur',
        correct: 'b'
    },
    {
        question: 'Which is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'C++',
        correct: 'a'
    },
    {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
        {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});