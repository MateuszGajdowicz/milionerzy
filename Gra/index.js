//Zapisanie zmiennych
let questionText = document.getElementById('question');
let answersText = document.getElementsByClassName('answer');
let PrizeTags = document.getElementsByClassName('prize');
let Prize=0;
let randomQuestion;
let Result = document.getElementById('result');
let Prizewon = document.getElementById("PrizeWon");
let FriendDiv = document.getElementById('FriendDiv');
let FriendCallButton = document.getElementById('FriendButton');
let FiftyFiftyDiv = document.getElementById('fifty-fifty');
let RerollDiv = document.getElementById('RerollButton');

PrizeTags[12].style.backgroundColor='hsl(49, 100%, 60%)';

//Pytania
const questions = [
    {
        question: "Jaki jest największy kraj na świecie?",
        answers: ["A. Polska", "B. Rosja", "C. RPA", "D. Francja"],
        correctAnswer: 1
    },
    {
        question: "Które miasto jest stolicą Francji?",
        answers: ["A. Berlin", "B. Paryż", "C. Rzym", "D. Madryt"],
        correctAnswer: 1
    },
    {
        question: "Jakie jest największe jezioro na świecie?",
        answers: ["A. Jezioro Wiktorii", "B. Morze Kaspijskie", "C. Jezioro Bałchasz", "D. Jezioro Tanganika"],
        correctAnswer: 1
    },
    {
        question: "Kto napisał 'Hamleta'?",
        answers: ["A. William Shakespeare", "B. Juliusz Słowacki", "C. Johann Wolfgang von Goethe", "D. Dante Alighieri"],
        correctAnswer: 0
    },
    {
        question: "W którym roku rozpoczęła się II wojna światowa?",
        answers: ["A. 1935", "B. 1939", "C. 1941", "D. 1945"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się najwyższy szczyt świata?",
        answers: ["A. K2", "B. Mount Everest", "C. Mont Blanc", "D. Kilimandżaro"],
        correctAnswer: 1
    },
    {
        question: "Który pierwiastek ma symbol 'O'?",
        answers: ["A. Węgiel", "B. Wodór", "C. Tlen", "D. Azot"],
        correctAnswer: 2
    },
    {
        question: "Jak nazywa się największa pustynia świata?",
        answers: ["A. Sahara", "B. Gobi", "C. Kalahari", "D. Antarktyda"],
        correctAnswer: 3
    },
    {
        question: "Które państwo wynalazło papier?",
        answers: ["A. Egipt", "B. Chiny", "C. Grecja", "D. Indie"],
        correctAnswer: 1
    },
    {
        question: "Kto namalował 'Mona Lisę'?",
        answers: ["A. Leonardo da Vinci", "B. Vincent van Gogh", "C. Pablo Picasso", "D. Claude Monet"],
        correctAnswer: 0
    },
    {
        question: "Jak nazywa się stolica Polski?",
        answers: ["A. Kraków", "B. Warszawa", "C. Łódź", "D. Gdańsk"],
        correctAnswer: 1
    },
    {
        question: "Który ocean jest największy?",
        answers: ["A. Atlantycki", "B. Spokojny", "C. Indyjski", "D. Arktyczny"],
        correctAnswer: 1
    },
    {
        question: "W którym roku człowiek wylądował na Księżycu?",
        answers: ["A. 1959", "B. 1965", "C. 1969", "D. 1972"],
        correctAnswer: 2
    },
    {
        question: "Jak nazywa się najdłuższa rzeka na świecie?",
        answers: ["A. Nil", "B. Amazonka", "C. Jangcy", "D. Missisipi"],
        correctAnswer: 1
    },
    {
        question: "Które zwierzę jest nazywane królem dżungli?",
        answers: ["A. Tygrys", "B. Lew", "C. Słoń", "D. Niedźwiedź"],
        correctAnswer: 1
    },
    {
        question: "Ile kontynentów jest na świecie?",
        answers: ["A. 5", "B. 6", "C. 7", "D. 8"],
        correctAnswer: 2
    },
    {
        question: "Które miasto jest nazywane Wielkim Jabłkiem?",
        answers: ["A. Los Angeles", "B. Chicago", "C. Nowy Jork", "D. Waszyngton"],
        correctAnswer: 2
    },
    {
        question: "Który gaz jest najobficiej obecny w atmosferze Ziemi?",
        answers: ["A. Tlen", "B. Azot", "C. Dwutlenek węgla", "D. Argon"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się najbliższa Ziemi gwiazda?",
        answers: ["A. Polarna", "B. Syriusz", "C. Proxima Centauri", "D. Słońce"],
        correctAnswer: 3
    },
    {
        question: "Która planeta jest znana jako Czerwona Planeta?",
        answers: ["A. Merkury", "B. Mars", "C. Wenus", "D. Jowisz"],
        correctAnswer: 1
    },
    {
        question: "Który kontynent jest najmniejszy pod względem powierzchni?",
        answers: ["A. Australia", "B. Europa", "C. Ameryka Południowa", "D. Antarktyda"],
        correctAnswer: 0
    },
    {
        question: "Jaki jest największy ssak na świecie?",
        answers: ["A. Słoń afrykański", "B. Wieloryb błękitny", "C. Żyrafa", "D. Niedźwiedź polarny"],
        correctAnswer: 1
    },
    {
        question: "Który kraj ma najwięcej ludności na świecie?",
        answers: ["A. Indie", "B. Chiny", "C. USA", "D. Indonezja"],
        correctAnswer: 1
    },
    {
        question: "Jakie jest narodowe zwierzę Kanady?",
        answers: ["A. Bóbr", "B. Łoś", "C. Orzeł", "D. Niedźwiedź grizzly"],
        correctAnswer: 0
    },
    {
        question: "Które miasto jest znane jako Miasto Świateł?",
        answers: ["A. Nowy Jork", "B. Tokio", "C. Paryż", "D. Londyn"],
        correctAnswer: 2
    },
    {
        question: "Jaką walutę używa Japonia?",
        answers: ["A. Jen", "B. Juan", "C. Won", "D. Rupia"],
        correctAnswer: 0
    },
    {
        question: "Kto jest autorem teorii względności?",
        answers: ["A. Isaac Newton", "B. Albert Einstein", "C. Galileo Galilei", "D. Nikola Tesla"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się główna rzeka przepływająca przez Egipt?",
        answers: ["A. Nil", "B. Amazonka", "C. Jangcy", "D. Eufrat"],
        correctAnswer: 0
    },
    {
        question: "Który kraj jest znany jako kraj wschodzącego słońca?",
        answers: ["A. Korea Południowa", "B. Japonia", "C. Chiny", "D. Wietnam"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się chemiczny symbol dla złota?",
        answers: ["A. Ag", "B. Au", "C. Fe", "D. Pb"],
        correctAnswer: 1
    },
    {
        question: "Jakie jest największe państwo w Ameryce Południowej?",
        answers: ["A. Argentyna", "B. Brazylia", "C. Kolumbia", "D. Peru"],
        correctAnswer: 1
    },
    {
        question: "Który kraj jest domem kangurów?",
        answers: ["A. Nowa Zelandia", "B. Australia", "C. RPA", "D. Kanada"],
        correctAnswer: 1
    },
    {
        question: "Który metal jest płynny w temperaturze pokojowej?",
        answers: ["A. Rtęć", "B. Ołów", "C. Cyna", "D. Aluminium"],
        correctAnswer: 0
    },
    {
        question: "Który kraj jest znany z produkcji najlepszej czekolady?",
        answers: ["A. Belgia", "B. Francja", "C. Niemcy", "D. Włochy"],
        correctAnswer: 0
    },
    {
        question: "Jak nazywa się stolica Rosji?",
        answers: ["A. Moskwa", "B. Petersburg", "C. Nowosybirsk", "D. Kazań"],
        correctAnswer: 0
    },
    {
        question: "Który ocean znajduje się na wschód od USA?",
        answers: ["A. Spokojny", "B. Indyjski", "C. Atlantycki", "D. Arktyczny"],
        correctAnswer: 2
    },
    {
        question: "Który kraj ma najwięcej wulkanów?",
        answers: ["A. Indonezja", "B. Japonia", "C. Włochy", "D. Filipiny"],
        correctAnswer: 0
    },
    {
        question: "Jak nazywa się chemiczny symbol dla wody?",
        answers: ["A. O2", "B. CO2", "C. H2O", "D. NH3"],
        correctAnswer: 2
    },
    {
        question: "Jaki jest najstarszy uniwersytet na świecie?",
        answers: ["A. Oksford", "B. Sorbona", "C. Uniwersytet Al Quaraouiyine", "D. Uniwersytet w Bolonii"],
        correctAnswer: 2
    },
    {
        question: "Która planeta w Układzie Słonecznym ma najwięcej księżyców?",
        answers: ["A. Jowisz", "B. Saturn", "C. Uran", "D. Neptun"],
        correctAnswer: 1
    },
    {
        question: "Który język programowania jest najczęściej używany?",
        answers: ["A. Python", "B. JavaScript", "C. Java", "D. C++"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się największe miasto w Kanadzie?",
        answers: ["A. Toronto", "B. Vancouver", "C. Montreal", "D. Calgary"],
        correctAnswer: 0
    },
    {
        question: "Która planeta w Układzie Słonecznym ma pierścienie?",
        answers: ["A. Mars", "B. Jowisz", "C. Saturn", "D. Uran"],
        correctAnswer: 2
    },
    {
        question: "Jaki język jest najczęściej używany na świecie?",
        answers: ["A. Angielski", "B. Chiński", "C. Hiszpański", "D. Arabski"],
        correctAnswer: 1
    },
    {
        question: "Jakie jest główne źródło energii dla Ziemi?",
        answers: ["A. Wiatr", "B. Słońce", "C. Woda", "D. Geotermalna"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się proces zamiany wody w parę?",
        answers: ["A. Kondensacja", "B. Ewaporacja", "C. Sublimacja", "D. Osmoza"],
        correctAnswer: 1
    },
    {
        question: "Jakie zwierzę jest nazywane najlepszym przyjacielem człowieka?",
        answers: ["A. Kot", "B. Pies", "C. Papuga", "D. Delfin"],
        correctAnswer: 1
    },
    {
        question: "Która planeta jest najbliżej Słońca?",
        answers: ["A. Wenus", "B. Merkury", "C. Mars", "D. Ziemia"],
        correctAnswer: 1
    },
    {
        question: "Który kraj wygrał najwięcej mistrzostw świata w piłce nożnej?",
        answers: ["A. Niemcy", "B. Brazylia", "C. Argentyna", "D. Francja"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się chemiczny symbol dla srebra?",
        answers: ["A. Ag", "B. Au", "C. Cu", "D. Pt"],
        correctAnswer: 0
    },
    {
        question: "Który gaz jest używany do napełniania balonów?",
        answers: ["A. Tlen", "B. Hel", "C. Azot", "D. Argon"],
        correctAnswer: 1
    },
    {
        question: "Który kraj ma najwięcej wysp na świecie?",
        answers: ["A. Japonia", "B. Indonezja", "C. Kanada", "D. Szwecja"],
        correctAnswer: 3
    },
    {
        question: "Jak nazywa się najmniejsza kość w ludzkim ciele?",
        answers: ["A. Młoteczek", "B. Strzemiączko", "C. Kowadełko", "D. Rzepka"],
        correctAnswer: 1
    },
    {
        question: "Który kraj wynalazł pizzę?",
        answers: ["A. Francja", "B. Grecja", "C. Włochy", "D. Hiszpania"],
        correctAnswer: 2
    },
    {
        question: "Która planeta ma najkrótszy dzień w Układzie Słonecznym?",
        answers: ["A. Mars", "B. Jowisz", "C. Wenus", "D. Saturn"],
        correctAnswer: 1
    },
    {
        question: "Który ptak jest symbolem pokoju?",
        answers: ["A. Orzeł", "B. Gołąb", "C. Jaskółka", "D. Paw"],
        correctAnswer: 1
    },
    {
        question: "Która część ciała produkuje insulinę?",
        answers: ["A. Wątroba", "B. Trzustka", "C. Nerki", "D. Żołądek"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się największy oceaniczny ssak drapieżny?",
        answers: ["A. Wieloryb błękitny", "B. Kaszalot", "C. Orka", "D. Rekin wielorybi"],
        correctAnswer: 2
    },
    {
        question: "Które miasto jest stolicą Włoch?",
        answers: ["A. Florencja", "B. Mediolan", "C. Neapol", "D. Rzym"],
        correctAnswer: 3
    },
    {
        question: "Jak nazywa się najdłuższy łańcuch górski na świecie?",
        answers: ["A. Andy", "B. Himalaje", "C. Alpy", "D. Kordyliery"],
        correctAnswer: 0
    },
    {
        question: "Który kolor jest uznawany za neutralny?",
        answers: ["A. Czarny", "B. Biały", "C. Szary", "D. Brązowy"],
        correctAnswer: 2
    },
    {
        question: "Jak nazywa się największa pustynia piaszczysta?",
        answers: ["A. Sahara", "B. Gobi", "C. Kalahari", "D. Rub al-Chali"],
        correctAnswer: 0
    },
    {
        question: "Który narząd kontroluje równowagę w ciele?",
        answers: ["A. Ucho wewnętrzne", "B. Mózg", "C. Kręgosłup", "D. Serce"],
        correctAnswer: 0
    },
    {
        question: "Które państwo używa waluty o nazwie rubel?",
        answers: ["A. Polska", "B. Rosja", "C. Ukraina", "D. Białoruś"],
        correctAnswer: 1
    },
    {
        question: "Który pierwiastek ma symbol 'K'?",
        answers: ["A. Potas", "B. Wapń", "C. Kobalt", "D. Krypton"],
        correctAnswer: 0
    },
    {
        question: "Jak nazywa się największa planeta Układu Słonecznego?",
        answers: ["A. Saturn", "B. Jowisz", "C. Uran", "D. Neptun"],
        correctAnswer: 1
    },
    {
        question: "Które miasto jest stolicą Grecji?",
        answers: ["A. Ateny", "B. Saloniki", "C. Rodos", "D. Kreta"],
        correctAnswer: 0
    },
    {
        question: "Który kraj jest największym producentem kawy na świecie?",
        answers: ["A. Wietnam", "B. Brazylia", "C. Kolumbia", "D. Etiopia"],
        correctAnswer: 1
    },
    {
        question: "Jak nazywa się proces fotosyntezy?",
        answers: ["A. Wydzielanie tlenu", "B. Produkcja glukozy", "C. Synteza chlorofilu", "D. Absorpcja światła słonecznego"],
        correctAnswer: 3
    },
    {
        question: "Który kraj jest znany z opery i gondoli?",
        answers: ["A. Hiszpania", "B. Francja", "C. Włochy", "D. Portugalia"],
        correctAnswer: 2
    },
    {
        question: "Jakie jest najzimniejsze miejsce na Ziemi?",
        answers: ["A. Antarktyda", "B. Arktyka", "C. Syberia", "D. Grenlandia"],
        correctAnswer: 0
    },
    {
        question: "Który kraj jest największym producentem ropy naftowej?",
        answers: ["A. USA", "B. Rosja", "C. Arabia Saudyjska", "D. Wenezuela"],
        correctAnswer: 2
    },
    {
        question: "Która rzeka jest najdłuższa w Europie?",
        answers: ["A. Wołga", "B. Dunaj", "C. Ren", "D. Sekwana"],
        correctAnswer: 0
    },
    {
        question: "Który wynalazca stworzył żarówkę elektryczną?",
        answers: ["A. Nikola Tesla", "B. Thomas Edison", "C. Alexander Graham Bell", "D. Isaac Newton"],
        correctAnswer: 1
    },
    {
        question: "Jakie jest najstarsze miasto na świecie?",
        answers: ["A. Jerycho", "B. Ateny", "C. Damaszek", "D. Babilon"],
        correctAnswer: 0
    },
    {
        question: "Który kraj jest największym eksporterem herbaty?",
        answers: ["A. Indie", "B. Chiny", "C. Sri Lanka", "D. Kenia"],
        correctAnswer: 1
    },
    {
        question: "Który rodzaj gwiazdy jest najjaśniejszy?",
        answers: ["A. Biała karzeł", "B. Czerwony olbrzym", "C. Gwiazda neutronowa", "D. Gwiazda hiperolbrzym"],
        correctAnswer: 3
    },
    {
        question: "Jak nazywa się najmniejsza planeta Układu Słonecznego?",
        answers: ["A. Merkury", "B. Wenus", "C. Mars", "D. Pluton"],
        correctAnswer: 0
    },
    ]


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



//sprawdzenie odpowiedzi
let clickedAnswer;
let correctAnswerText;
function CheckAnswer(event) {
    clickedAnswer = event.target.textContent;
    correctAnswerText = randomQuestion.answers[randomQuestion.correctAnswer];
    FriendDiv.style.opacity=0;
    Prizewon.textContent='';
 
    if(clickedAnswer===correctAnswerText){
        Prize++;
        PrizeTags[12-Prize].style.backgroundColor='hsl(49, 100%, 60%)';
        PrizeTags[13-Prize].style.backgroundColor='hsl(236, 84%, 64%)';
        getRandomQuestion();
        WriteTexts();
        Result.textContent="Poprawna odpowiedź!";
        if(Prize===11){
            Result.textContent="Wygrałeś 1 000 000 zł!";

        } 
    }
    else{
        getRandomQuestion();
        WriteTexts();
        Result.textContent="Błędna odpowiedź";
        if(Prize>=1 && Prize<6){
            Prizewon.textContent="Wygrales 1000 zł!";
            Prize=0;

        }
        else if(Prize>=6 && Prize<11){
            Prizewon.textContent="Wygrałeś 40 000 zł!";
            Prize=0;

        }
        console.log(Prize);
        for(let i =0; i<PrizeTags.length; i++){
            PrizeTags[i].style.backgroundColor='hsl(236, 84%, 64%)'
        }
        PrizeTags[12].style.backgroundColor='hsl(49, 100%, 60%)';
        FiftyFiftyDiv.style.backgroundColor='hsl(236, 84%, 54%)';
        RerollDiv.style.backgroundColor='hsl(236, 84%, 54%)';
        FriendCallButton.style.backgroundColor='hsl(236, 84%, 54%)';

    }
} 

//kola ratunkowe
function FiftyFifty(){
    FiftyFiftyDiv.style.backgroundColor='red';

    switch(randomQuestion.correctAnswer){
        case 0:
            answersText[randomQuestion.correctAnswer +1].textContent=" ";
            answersText[randomQuestion.correctAnswer +2].textContent=" ";
            break;
        case 3:
            answersText[randomQuestion.correctAnswer -1].textContent=" ";
            answersText[randomQuestion.correctAnswer -2].textContent=" ";
            break;
        default:
            answersText[randomQuestion.correctAnswer -1].textContent=" ";
            answersText[randomQuestion.correctAnswer +1].textContent=" ";
}

}
const FriendsAnswers = ["Myślę, że odpowiedź to ",
     'Ja bym stawiał na ', "Wydaje mi się, że poprawne jest ", "To na pewno jest ",
      "Nie wiem, może ", "Ja strzelam, że to "];


function FriendCall(){
    FriendCallButton.style.backgroundColor='red';
    FriendDiv.style.opacity=1;
    let randomAnswerIndex = Math.floor(Math.random() * FriendsAnswers.length);
    let FriendAnswer = FriendsAnswers[randomAnswerIndex];
    const PotentialAnswers = [randomQuestion.answers[randomQuestion.correctAnswer], randomQuestion.answers[0]];
    let randomPotentialAnswerIndex=Math.floor(Math.random()*PotentialAnswers.length);
    let randomPotentialAnswer = PotentialAnswers[randomPotentialAnswerIndex];
    FriendDiv.textContent = FriendAnswer + randomPotentialAnswer;

}   
function Reroll(){
    RerollDiv.style.backgroundColor='red';
    getRandomQuestion();
    WriteTexts();
}

