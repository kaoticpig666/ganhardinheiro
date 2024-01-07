let balance = 0;
const withdrawalThreshold = 50.00;
const questionBox = document.getElementById('question-box');
const answerInput = document.getElementById('answer-input');
const balanceDisplay = document.getElementById('balance');
const withdrawButton = document.getElementById('withdraw-button');
const withdrawText = document.getElementById('withdraw-text');

// Perguntas e Respostas (adapte conforme necessário)
const questions = [
    { question: 'Qual é a capital do Brasil?', answer: 'brasília' },
    { question: 'Quanto é 2 + 2?', answer: '4' },
    { question: 'Quem escreveu "Dom Quixote"?', answer: 'miguel de cervantes' },
    { question: 'Qual é o maior planeta do sistema solar?', answer: 'júpiter' },
    { question: 'Em que ano foi assinada a Declaração de Independência do Brasil?', answer: '1822' },
    { question: 'Quantos elementos químicos existem na tabela periódica?', answer: '118' },
    { question: 'Quem foi o primeiro presidente dos Estados Unidos?', answer: 'george washington' },
    { question: 'Quem pintou a Mona Lisa?', answer: 'leonardo da vinci' },
    { question: 'Quantos lados tem um dodecaedro regular?', answer: '12' },
    // Adicione mais perguntas conforme necessário
    { question: 'Quem descobriu a penicilina?', answer: 'alexander fleming' },
    { question: 'Quantos continentes existem?', answer: '7' },
    { question: 'Quem foi o autor de "Cem Anos de Solidão"?', answer: 'gabriel garcía márquez' },
    { question: 'Qual é a fórmula química da água?', answer: 'h2o' },
    { question: 'Quem foi o primeiro homem a pisar na Lua?', answer: 'neil armstrong' },
    { question: 'Quantos ossos tem o corpo humano?', answer: '206' },
    { question: 'Quem escreveu "Romeu e Julieta"?', answer: 'william shakespeare' },
    // Adicione mais perguntas conforme necessário
];

// Adicionando a chamada da função startGame() para inicializar o jogo
startGame();

function startGame() {
    showRandomQuestion();
}

function showRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];

    questionBox.textContent = currentQuestion.question;

    // Adicionando a resposta correta como um atributo à caixa de pergunta
    questionBox.setAttribute('data-answer', currentQuestion.answer);
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questionBox.getAttribute('data-answer').toLowerCase();

    if (userAnswer === correctAnswer) {
        // Resposta correta
        balance += 8.00; // Agora, ganha R$8,00 a cada pergunta bem respondida
        updateBalance();
        showRandomQuestion();
    } else {
        // Resposta incorreta, pode adicionar lógica adicional aqui
        alert('Resposta incorreta. Tente novamente!');
    }
}

function updateBalance() {
    balanceDisplay.textContent = balance.toFixed(2);

    // Exibir botão de saque e mensagem quando o saldo atingir R$ 50,00
    if (balance >= withdrawalThreshold) {
        withdrawButton.style.display = 'block';
        withdrawText.style.display = 'block';
    }
}
