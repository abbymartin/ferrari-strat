// TODO:
// add restart button
// add descriptions for results
// add more questions
// adjust answer weights 

//multiple choice, weights-> answer probability
const serMultQuestions = [
    {
        'q': 'Is your driver currently in the lead?',
        'a': ['Yes', 'No'],
        'weights': [
            [1, 1.5, 2, 2, 1, 5, 3, 2.3, 1, 3, 5, 0.8, 1.2, 1],
            [0.4, 3, 3, 4, 1, 3, 1, 4, 2, 1.2 , 2, 1.5, 1.8, 1]
        ]
    }, 
    {
        'q': 'What tires are currently on?',
        'a': ['Soft', 'Medium', 'Hard', 'Intermediate', 'Full Wet'],
        'weights': [
            [0.5, 4, 4, 4, 5, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [0.5, 4, 4, 4, 3.3, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [0.2, 2, 5, 5, 6, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [5, 4, 1, 1, 1, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [6.5, 4, 1, 1, 1, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
        ]
    },  
    {
        'q': 'Is the car broken?',
        'a': ['Yes', 'No'],
        'weights': [
            [1, 1, 1, 1, 5, 2, 0.4, 1, 4, 1.5, 1, 6, 2, 4],
            [1, 1, 1, 1, 0.6, 4, 0.4, 1, 4, 1.5, 1, 6, 4, 1],
        ]
    }, 
    {
        'q': 'What track is it?',
        'a': 
        [
            'Bahrain International Circuit, Sakhir', 
            'Jeddah Corniche Circuit, Jeddah', 
            'Albert Park Circuit, Melbourne', 
            'Autodromo Enzo e Dino Ferrari, Imola', 
            'Miami International Autodrome, Miami Gardens', 
            'Circuit de Barcelona-Catalunya, Barcelona', 
            'Circuit de Monte Carlo, Monaco', 
            'Baku City Circuit, Baku', 
            'Circuit Gilles-Villeneuve, Montreal', 
            'Silverstone Circuit, Towcester', 
            'Red Bull Ring, Speilberg', 
            'Circuit Paul Ricard, Le Castellet', 
            'Hungaroring, Budapest', 
            'Circuit Spa-Francorchamps, Stavelot', 
            'Circuit Zandvoort, Zandvoort', 
            'Autodromo Nazionale Monza, Monza', 
            'Marina Bay Circuit, Singapore', 
            'Suzuka Circuit', 
            'Circuit of the Americas, Austin', 
            'Autódromo Hermanos Rodríguez, Mexico City', 
            'Autódromo José Carlos Pace, Interlagos', 
            'Yas Marina Circuit'
        ],
        'weights': 0
    }, 
    {
        'q': 'Is Max Verstappen leading the race?',
        'a': ['Yes', 'No'],
        'weights': [
            [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2.5, 1],
            [1, 1, 1, 1, 1, 1, 1, 1.6, 1, 1, 1, 1, 1, 1],
        ]
    }
];
//fill in the blank
const serBlankQuestions = [
    {
        'q': 'How many laps are left in the race?'
    }, 
    {
        'q': 'What is the tire age?'
    }, 
    {
        'q': 'What is the gap to the next car?'
    }
];
const sillyQuestions = [
    {
        'q': 'Choose a number from 1 to 10'
    }, 
    {
        'q': 'What is your favorite color'
    }, 
    {
        'q': 'How did you feel during quali?'
    }, 
    {
        'q': 'How are you feeling?'
    },
    {
        'q': 'What is your favorite animal?'
    },
    {
        'q': 'What did you eat for breakfast?'
    }
];

const results = [
    'Pit for soft tires',
    'Pit for hard tires',
    'Pit for intermediate tires',
    'Pit for full wet tires',
    'One stop race',
    'Five stop race',
    'Team orders time!!!',
    'Play in the gravel',
    'Use the wrong tires',
    'Retire from the race',
    'Pit stop (just for fun!)',
    'Tell the pit crew they can go home',
    'Let Mattia drive',
    'EAT THE TIRES'
];

let questions = []
let answerWeights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let curQuestion = 0;

//choose random questions from lists
function chooseRandQuestions(amount, arr) {
    let chosen = [];
    while(chosen.length < amount) {
        let rand = Math.floor(Math.random() * arr.length);
        if(!chosen.includes(arr[rand])) {
            chosen.push(arr[rand]);
        }
    }

    return(chosen);
}

//choose 3 serious (2 mult, 1 blank) + 2 silly
function questionSelection() {
    for(let q of chooseRandQuestions(3, serMultQuestions)) {
        questions.push(q);
    }
    questions.push(chooseRandQuestions(1, serBlankQuestions)[0]);
    for(let q of chooseRandQuestions(2, sillyQuestions)) {
        questions.push(q);
    }

    //show first question
    displayQuestion();
}

//title and options
function displayQuestion() {
    const title = document.getElementById('qText');
    const options = document.getElementById('qList');

    title.innerText = questions[curQuestion].q;
    options.innerHTML = ''; //clear options
    //only mult choice questions have options
    if(curQuestion < 3) {
        for(let i = 0; i < questions[curQuestion].a.length; i++) {
            let answer = document.createElement("li");
            let button = document.createElement("button");
    
            button.appendChild(document.createTextNode(questions[curQuestion].a[i]));
            button.onclick = function () {
                advanceQuestion(i);
            }
            options.appendChild(answer.appendChild(button));
        }
    }
    else {
        let input = document.createElement("input");

        let answer = document.createElement("li");
        options.appendChild(input);
        
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("next"));
        button.onclick = function () {
            advanceQuestion(0);
        }
        options.appendChild(answer.appendChild(button));
    }
}

function calculateResult() {
    //choose result (weighted random)
    let calcWeights = [];
    for(let i = 0; i < answerWeights.length; i++) {
        if(i == 0) {
            calcWeights.push(answerWeights[i]);
        }
        else calcWeights.push(answerWeights[i] + calcWeights[i-1]);
    }

    let randNum = Math.floor(Math.random() * calcWeights[calcWeights.length - 1]);
    for(let i = calcWeights.length; i >= 0; i--) {
        if(calcWeights[i] - randNum <= 0) {
            return(i);
        }
    }
    return(calcWeights.length-1);
}

function displayResult() {
    //clear questions
    const qBox = document.getElementById('questions');
    const aBox = document.getElementById('answer');

    qBox.innerHTML = ''; //clear questions

    let resultText = document.createElement("p");
    resultText.innerText = results[calculateResult()];
    aBox.appendChild(resultText);
}

function advanceQuestion(choiceNum) {
    //adjust weights
    if(curQuestion < 3 && questions[curQuestion].weights !== 0) {
        for(let i = 0; i < answerWeights.length; i++) {
            answerWeights[i] *= questions[curQuestion].weights[choiceNum][i];
        }
    }

    //last question
    if(curQuestion == 5) {
        displayResult();
    }
    else {
        //advance to dif type of question
        curQuestion++;
        displayQuestion(curQuestion);
    }
}

questionSelection();
