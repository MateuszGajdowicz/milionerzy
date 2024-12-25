//Zapisanie zmiennych
let questionText = document.getElementById('question');
let answersText = document.getElementsByClassName('answer');
let PrizeTags = document.getElementsByClassName('prize');
let Prize=0;
let randomQuestion;
let Result = document.getElementById('result');
//Pytania
const questions = [
    {
        question: "Jaki jest największy kraj na świecie?",
        answers: ["Polska", "Rosja", "RPA", "Francja"],
        correctAnswer: 1
    },
    {
        question: "Które miasto jest stolicą Francji?",
        answers: ["Berlin", "Paryż", "Rzym", "Madryt"],
        correctAnswer: 1
    },
    {
        question: "Jakie jest największe jezioro na świecie?",
        answers: ["Jezioro Wiktorii", "Morze Kaspijskie", "Jezioro Bałchasz", "Jezioro Tanganika"],
        correctAnswer: 1
    },
    {
        question: "Kto napisał 'Hamleta'?",
        answers: ["William Shakespeare", "Juliusz Słowacki", "Johann Wolfgang von Goethe", "Dante Alighieri"],
        correctAnswer: 0
    },
    {
        question: "W którym roku rozpoczęła się II wojna światowa?",
        answers: ["1935", "1939", "1941", "1945"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się najwyższy szczyt świata?",
        answers: ["K2", "Mount Everest", "Mont Blanc", "Kilimandżaro"],
        correctAnswer: 1
    },
    {
        question: "Który pierwiastek ma symbol 'O'?",
        answers: ["Węgiel", "Wodór", "Tlen", "Azot"],
        correctAnswer: 2
    },
    {
        question: "Jak nazywa się największa pustynia świata?",
        answers: ["Sahara", "Gobi", "Kalahari", "Antarktyda"],
        correctAnswer: 3
    },
    {
        question: "Które państwo wynalazło papier?",
        answers: ["Egipt", "Chiny", "Grecja", "Indie"],
        correctAnswer: 1
    },
    {
        question: "Kto namalował 'Mona Lisę'?",
        answers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 0
    },
    {
        question: "Jak nazywa się stolica Polski?",
        answers: ["Kraków", "Warszawa", "Łódź", "Gdańsk"],
        correctAnswer: 1
    },
    {
        question: "Który ocean jest największy?",
        answers: ["Atlantycki", "Spokojny", "Indyjski", "Arktyczny"],
        correctAnswer: 1
    },
    {
        question: "W którym roku człowiek wylądował na Księżycu?",
        answers: ["1959", "1965", "1969", "1972"],
        correctAnswer: 2
    },
    {
        question: "Jak nazywa się najdłuższa rzeka na świecie?",
        answers: ["Nil", "Amazonka", "Jangcy", "Missisipi"],
        correctAnswer: 1
    },
    {
        question: "Które zwierzę jest nazywane królem dżungli?",
        answers: ["Tygrys", "Lew", "Słoń", "Niedźwiedź"],
        correctAnswer: 1
    },
    {
        question: "Ile kontynentów jest na świecie?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: 2
    },
    {
        question: "Które miasto jest nazywane Wielkim Jabłkiem?",
        answers: ["Los Angeles", "Chicago", "Nowy Jork", "Waszyngton"],
        correctAnswer: 2
    },
    {
        question: "Który gaz jest najobficiej obecny w atmosferze Ziemi?",
        answers: ["Tlen", "Azot", "Dwutlenek węgla", "Argon"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się najbliższa Ziemi gwiazda?",
        answers: ["Polarna", "Siriusz", "Proxima Centauri", "Słońce"],
        correctAnswer: 3
    },
    {
        question: "Która planeta jest znana jako Czerwona Planeta?",
        answers: ["Merkury", "Mars", "Wenus", "Jowisz"],
        correctAnswer: 1
    }
];

//Losowanie pytania
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}


//wyswietlanie pytan i dopowiedzi
function WriteTexts(){
    randomQuestion= getRandomQuestion();
    questionText.textContent = randomQuestion.question;
    for(let i=0; i<answersText.length; i++){
        answersText[i].textContent= randomQuestion.answers[i];
        answersText[i].addEventListener('click', CheckAnswer);  
}   
}

WriteTexts();
PrizeTags[11].style.backgroundColor='yellow';

//sprawdzenie odpowiedzi
function CheckAnswer(event) {
    const clickedAnswer = event.target.textContent;
    let correctAnswerText = randomQuestion.answers[randomQuestion.correctAnswer];
 
    if(clickedAnswer===correctAnswerText){
        Prize++;
        console.log(PrizeTags[11-Prize]);
        PrizeTags[11-Prize].style.backgroundColor='yellow';
        PrizeTags[12-Prize].style.backgroundColor='hsl(236, 84%, 64%)';
        getRandomQuestion();
        WriteTexts();
        Result.textContent="Poprawna odpowiedź";
    }
    else{
        getRandomQuestion();
        WriteTexts();
        Prize=0;
        console.log(Prize);
        for(let i =0; i<PrizeTags.length; i++){
            PrizeTags[i].style.backgroundColor='hsl(236, 84%, 64%)'
        }
        PrizeTags[11].style.backgroundColor='yellow';
        
    }
}  