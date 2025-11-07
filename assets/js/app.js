const quizContainer = document.getElementById('quiz-container');
const answerButtons = document.querySelectorAll('.answer-btn');
const finalCtaButton = document.getElementById('final-cta-btn');

const finalRedirectURL = 'https://www.google.com/';

let currentStep = 1;

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function showNextStep(nextStepNumber) {
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    if (currentStepElement) {
        currentStepElement.classList.add('hidden');
        currentStepElement.classList.remove('active');
    }

    currentStep = nextStepNumber;

    const nextStepElement = document.getElementById(`step-${currentStep}`);
    if (nextStepElement) {
        nextStepElement.classList.remove('hidden');
        nextStepElement.classList.add('active');

        if (currentStep === 4) {
            triggerConfetti();
        }
    }
}

answerButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const nextStep = parseInt(event.target.dataset.nextStep);

        setTimeout(() => {
            showNextStep(nextStep);
        }, 200);
    });
});

finalCtaButton.addEventListener('click', () => {
    window.location.href = finalRedirectURL;
});